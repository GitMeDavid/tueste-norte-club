import type { D1Database } from "@cloudflare/workers-types";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";
import { getCloudflareContext } from "@opennextjs/cloudflare";
export function conectarD1(database: D1Database) {
  return drizzle(database, { schema });
}

export async function obtenerDbCloudflare() {
  const { env } = await getCloudflareContext();
  const database = (env as typeof env & { DB: D1Database }).DB;
  return conectarD1(database);
}
