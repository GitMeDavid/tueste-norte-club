
"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function BotonCerrarSesion() {
  const router = useRouter();

  async function cerrarSesion() {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={cerrarSesion}
      className="mt-4 bg-amber-900 text-white px-4 py-2 rounded"
    >
      Cerrar sesión
    </button>
  );
}
