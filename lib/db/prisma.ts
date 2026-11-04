import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { isDemoMode } from "@/lib/config/demo-mode";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  const connectionString =
    process.env.DATABASE_URL ||
    "postgresql://postgres:postgres@localhost:5432/studyindia";
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);

  return new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["warn", "error"]
        : ["error"],
  });
}

// In Demo Mode: Returns a safe in-memory mock handler without initializing pg Pool
function createMockModelHandler() {
  return new Proxy({}, {
    get(_modelTarget, method) {
      return async (args?: Record<string, unknown>) => {
        if (method === "findUnique" || method === "findFirst") {
          return null;
        }
        if (method === "findMany") {
          return [];
        }
        if (method === "count") {
          return 0;
        }
        if (method === "create" || method === "update" || method === "upsert") {
          return { id: `demo-${Date.now()}`, ...((args?.data as Record<string, unknown>) || {}) };
        }
        if (method === "delete" || method === "deleteMany") {
          return { count: 0 };
        }
        return null;
      };
    },
  });
}

// Lazy-initialized singleton client with Demo Mode bypass
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    if (isDemoMode) {
      // Demo Mode: zero external database connection
      if (prop === "$connect" || prop === "$disconnect") {
        return async () => {};
      }
      if (prop === "$transaction") {
        return async (cb: unknown) =>
          typeof cb === "function" ? (cb as (p: PrismaClient) => unknown)(prisma) : [];
      }
      return createMockModelHandler();
    }

    // Production Mode: Lazily instantiate genuine PrismaClient connected to PostgreSQL
    if (!globalForPrisma.prisma) {
      globalForPrisma.prisma = createPrismaClient();
    }
    return (globalForPrisma.prisma as unknown as Record<string, unknown>)[
      prop as string
    ];
  },
});
