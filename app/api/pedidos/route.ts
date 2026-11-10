
import { db } from "../../../src/db";
import { NextResponse } from "next/server";

export async function GET() {
  const listaPedidos = await db.query.pedidos.findMany({
    with: {
      cliente: true,
    },
  });

  return NextResponse.json(listaPedidos);
}
