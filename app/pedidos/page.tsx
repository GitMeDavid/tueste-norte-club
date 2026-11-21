import { obtenerBaseDeDatosCloudflare } from "@/src/db/database";
import { obtenerAuthCloudflare } from "@/lib/auth-cloudflare";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { clientes, pedidos } from "@/src/db/schema";
import { eq } from "drizzle-orm";

export default async function PaginaPedidos() {
  const auth = await obtenerAuthCloudflare();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const db = await obtenerBaseDeDatosCloudflare();

  const clienteActual = await db
    .select()
    .from(clientes)
    .where(eq(clientes.userId, session.user.id))
    .get();

  const listaPedidos = clienteActual
    ? await db.query.pedidos.findMany({
        where: (pedidos, { eq }) => eq(pedidos.clienteId, clienteActual.id),
        with: {
          cliente: true,
        },
      })
    : [];

  return (
    <main>
      <h1>Pedidos - Tueste Norte Club</h1>
      <p>Listado de pedidos de nuestros clientes.</p>

      {listaPedidos.length === 0 && <p>No hay pedidos registrados.</p>}

      <ul>
        {listaPedidos.map((pedido) => (
          <li key={pedido.id}>
            <p>Cliente: {pedido.cliente.nombre}</p>

            <p>Café: {pedido.cafe}</p>
            <p>Mes: {pedido.mes}</p>
            <p>Estado: {pedido.estado}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
