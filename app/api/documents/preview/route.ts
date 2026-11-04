import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileKey = searchParams.get("fileKey") || "document.pdf";
  const cleanKey = fileKey.replace(/[<>&"]/g, "");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Preview (Demo Mode) — StudyIndia</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; background: #0f172a; color: #f8fafc; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; }
    .card { background: #1e293b; border: 1px solid #334155; border-radius: 16px; max-width: 520px; width: 100%; padding: 32px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); text-align: center; }
    .badge { display: inline-block; padding: 4px 12px; background: rgba(245, 158, 11, 0.15); border: 1px solid #f59e0b; color: #fbbf24; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; }
    h1 { font-size: 20px; margin: 0 0 8px 0; color: #ffffff; }
    p { font-size: 13px; color: #94a3b8; line-height: 1.6; margin: 0 0 20px 0; }
    .file-box { background: #0f172a; border: 1px dashed #475569; border-radius: 10px; padding: 14px; font-family: monospace; font-size: 12px; color: #38bdf8; word-break: break-all; margin-bottom: 24px; }
    .btn { display: inline-block; padding: 10px 20px; background: #059669; color: white; border-radius: 8px; text-decoration: none; font-size: 12px; font-weight: 600; cursor: pointer; border: none; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">Demo Mode Simulation</div>
    <h1>Secure Document Inspection</h1>
    <p>External cloud storage (Supabase Storage) is currently paused. In Demo Mode, files are previewed within a simulated sandbox to protect student privacy and avoid cloud API dependencies.</p>
    <div class="file-box">${cleanKey}</div>
    <button onclick="window.history.back()" class="btn">Return to Portal</button>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

