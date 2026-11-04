import { createClient } from "@supabase/supabase-js";
import { isDemoMode, DEMO_CONFIG } from "@/lib/config/demo-mode";

// Client for public or anonymous operations if required
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-service-key";

export const BUCKET_NAME = process.env.SUPABASE_STUDENT_DOCS_BUCKET || "student-documents";

// Server-side admin client (only use in Server Actions, Route Handlers, or Server Components)
export function getSupabaseServerClient() {
  if (isDemoMode) {
    return null;
  }
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

// Client-side instance (safe anon key)
export const supabaseClient = isDemoMode
  ? (null as unknown as ReturnType<typeof createClient>)
  : createClient(supabaseUrl, supabaseAnonKey);

/**
 * Generates a secure, temporary signed download URL (valid for 15 minutes)
 * for a private student document.
 */
export async function getDocumentSignedUrl(fileKey: string, expiresInSeconds = 900): Promise<string | null> {
  // If in demo mode or keys are placeholders, return simulated preview route
  if (isDemoMode || supabaseUrl.includes("placeholder")) {
    return `/api/documents/preview?fileKey=${encodeURIComponent(fileKey)}&demo=true`;
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) return null;

  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .createSignedUrl(fileKey, expiresInSeconds);

  if (error || !data?.signedUrl) {
    console.error("Error generating signed URL:", error);
    return null;
  }

  return data.signedUrl;
}

/**
 * Validates file upload parameters before storage
 */
export function validateDocumentFile(file: { name: string; size: number; type: string }) {
  const allowedTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/webp",
  ];

  const maxSizeBytes = 5 * 1024 * 1024; // 5MB

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: "Invalid file type. Only PDF, JPG, and PNG documents are accepted.",
    };
  }

  if (file.size > maxSizeBytes) {
    return {
      valid: false,
      error: "File size exceeds the 5MB maximum limit.",
    };
  }

  return { valid: true, error: null };
}

/**
 * Simulated Document Upload for Demo Mode
 */
export async function uploadDocumentDemo(file: { name: string; size: number; type: string }) {
  const validation = validateDocumentFile(file);
  if (!validation.valid) {
    return { success: false, error: validation.error };
  }

  return {
    success: true,
    fileKey: `demo_${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`,
    notice: DEMO_CONFIG.notices.documentUpload,
  };
}
