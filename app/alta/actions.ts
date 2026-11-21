"use server";

import { revalidatePath } from "next/cache";

import { obtenerBaseDeDatosCloudflare } from "@/src/db/database";
import { clientes, planes } from "../../src/db/schema";
import { eq } from "drizzle-orm";
import { obtenerAuthCloudflare } from "@/lib/auth-cloudflare";
import { headers } from "next/headers";
export async function registrarCliente(
  estadoAnterior: { error: string },
  formData: FormData,
): Promise<{ error: string }> {
  const auth = await obtenerAuthCloudflare();
  const db = await obtenerBaseDeDatosCloudflare();
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return { error: "Debes iniciar sesión para suscribirte." };
  }

  const nombre = session.user.name;
  const email = session.user.email;
  const planId = formData.get("planId");

  if (typeof nombre !== "string" || nombre.trim() === "") {
    throw new Error("El nombre es obligatorio.");
  }

  if (
    typeof email !== "string" ||
    !email.includes("@") ||
    email.trim() === ""
  ) {
    throw new Error("Introduce un correo electrónico válido.");
  }

  const numeroPlan = Number(planId);

  if (
    typeof planId !== "string" ||
    planId.trim() === "" ||
    !Number.isInteger(numeroPlan) ||
    numeroPlan <= 0
  ) {
    throw new Error("Selecciona un plan válido.");
  }

  const planEncontrado = await db
    .select()
    .from(planes)
    .where(eq(planes.id, numeroPlan))
    .get();

  if (!planEncontrado) {
    throw new Error("El plan seleccionado no existe.");
  }
  const suscripcionExistente = await db
    .select()
    .from(clientes)
    .where(eq(clientes.userId, session.user.id))
    .get();

  if (suscripcionExistente) {
    return { error: "Ya tienes una suscripción registrada." };
  }
  const clienteExistente = await db
    .select()
    .from(clientes)
    .where(eq(clientes.email, email.trim()))

    .get();

  if (clienteExistente) {
    return { error: "Este correo electrónico ya está registrado." };
  }

  await db.insert(clientes).values({
    nombre: nombre.trim(),
    email: email.trim(),
    userId: session.user.id,
    planId: numeroPlan,
  });

  revalidatePath("/alta");

  return { error: "" };
}
