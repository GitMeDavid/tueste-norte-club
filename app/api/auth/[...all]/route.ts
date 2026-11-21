import { obtenerAuthCloudflare } from "@/lib/auth-cloudflare";
import { toNextJsHandler } from "better-auth/next-js";

export async function GET(request: Request) {
  const auth = await obtenerAuthCloudflare();
  return toNextJsHandler(auth).GET(request);
}

export async function POST(request: Request) {
  const auth = await obtenerAuthCloudflare();
  return toNextJsHandler(auth).POST(request);
}
