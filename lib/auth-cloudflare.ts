
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { conectarD1 } from "@/src/db/cloudflare";
import type { D1Database } from "@cloudflare/workers-types";

export function crearAuthCloudflare(database: D1Database) {
  const db = conectarD1(database);

  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "sqlite",
    }),
    emailAndPassword: {
      enabled: true,
    },
  });
}
