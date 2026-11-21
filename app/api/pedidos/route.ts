import { obtenerBaseDeDatosCloudflare } from "@/src/db/database";
import { NextResponse } from "next/server";
import { obtenerAuthCloudflare } from "@/lib/auth-cloudflare";
import { headers } from "next/headers";
import { eq } from "drizzle-orm";
import { clientes } from "@/src/db/schema";

export async function GET() {
  const auth = await obtenerAuthCloudflare();
  const db = await obtenerBaseDeDatosCloudflare();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.json(
      { error: "Debes iniciar sesión para consultar tus pedidos." },
      { status: 401 },
    );
  }
  const clienteActual = await db
    .select()
    .from(clientes)
    .where(eq(clientes.userId, session.user.id))
    .get();
  if (!clienteActual) {
    return NextResponse.json([]);
  }
  const listaPedidos = await db.query.pedidos.findMany({
    where: (pedidos, { eq }) => eq(pedidos.clienteId, clienteActual.id),
    with: {
      cliente: true,
    },
  });

  return NextResponse.json(listaPedidos);
}
