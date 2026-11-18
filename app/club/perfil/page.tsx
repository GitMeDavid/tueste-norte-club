import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import BotonCerrarSesion from "@/app/components/BotonCerrarSesion";
import { db } from "@/src/db";
import { clientes } from "@/src/db/schema";
import { eq } from "drizzle-orm";

export default async function PerfilPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }
  const suscripcion = await db
    .select()
    .from(clientes)
    .where(eq(clientes.userId, session.user.id))
    .get();
  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Mi perfil</h1>
      <p>Nombre: {session.user.name}</p>
      <p>Correo: {session.user.email}</p>
      <h2>Mi suscripción</h2>

      {suscripcion ? (
        <p>Plan contratado: {suscripcion.planId}</p>
      ) : (
        <p>No tienes ninguna suscripción registrada.</p>
      )}
      <BotonCerrarSesion />
    </main>
  );
}
