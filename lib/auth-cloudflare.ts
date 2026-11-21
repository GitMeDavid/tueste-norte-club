import { authConfig } from "./auth-config";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { conectarD1 } from "@/src/db/cloudflare";
import type { D1Database } from "@cloudflare/workers-types";
import { getCloudflareContext } from "@opennextjs/cloudflare";
export function crearAuthCloudflare(database: D1Database) {
  const db = conectarD1(database);

  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "sqlite",
    }),
    ...authConfig,
  });
}

export async function obtenerAuthCloudflare() {
  const { env } = await getCloudflareContext();

  const database = (env as typeof env & { DB: D1Database }).DB;

  return crearAuthCloudflare(database);
}
