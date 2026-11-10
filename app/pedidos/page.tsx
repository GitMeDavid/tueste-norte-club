import { db } from "../../src/db";
import { pedidos } from "../../src/db/schema";

export default async function PaginaPedidos() {
  const listaPedidos = await db.query.pedidos.findMany({
    with: {
      cliente: true,
    },
  });

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
