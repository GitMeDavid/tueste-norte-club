import { db } from "./index";

import { planes, clientes, pedidos } from "./schema";

async function insertarPlanes() {
  const datosPlanes = [
    {
      nombre: "Plan Básico",
      descripcion: "250 gramos de café al mes",
      precioMensual: 12.9,
      gramosMes: 250,
    },
    {
      nombre: "Plan Estándar",
      descripcion: "500 gramos de café al mes",
      precioMensual: 22.9,
      gramosMes: 500,
    },
    {
      nombre: "Plan Premium",
      descripcion: "1000 gramos de café al mes",
      precioMensual: 39.9,
      gramosMes: 1000,
    },
  ];

  const planesExistentes = await db.select().from(planes);

  if (planesExistentes.length === 0) {
    await db.insert(planes).values(datosPlanes);
  }

  console.log("Planes insertados correctamente.");
}

async function insertarPedidos() {
  const listaClientes = await db.select().from(clientes);

  if (listaClientes.length === 0) {
    console.log("No hay clientes registrados para crear pedidos.");
    return;
  }

  const pedidosExistentes = await db.select().from(pedidos);

  if (pedidosExistentes.length > 0) {
    console.log("Ya existen pedidos en la base de datos.");
    return;
  }

  const datosPedidos = [
    {
      clienteId: listaClientes[0].id,
      cafe: "Etiopía Sidamo",
      mes: "2026-11",
      estado: "pendiente" as const,
    },
  ];

  await db.insert(pedidos).values(datosPedidos);

  console.log("Pedidos insertados correctamente.");
}

async function ejecutarSeed() {
  await insertarPlanes();
  await insertarPedidos();
}

ejecutarSeed();
