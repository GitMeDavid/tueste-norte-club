
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import BotonCerrarSesion from "@/app/components/BotonCerrarSesion";

export default async function PerfilPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Mi perfil
      </h1>
      <p>Nombre: {session.user.name}</p>
      <p>Correo: {session.user.email}</p>
      <BotonCerrarSesion />
    </main>
  );
}
