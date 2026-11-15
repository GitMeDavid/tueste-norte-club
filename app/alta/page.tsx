import FormularioAlta from "./FormularioAlta";

import { db } from "../../src/db";
import { planes } from "../../src/db/schema";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function PaginaAlta() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }
  const listaPlanes = await db.select().from(planes);

  return (
    <main>
      <h1>Alta de suscripción - Tueste Norte Club</h1>
      <p>Elige tu plan y únete a nuestro club de café.</p>

      <FormularioAlta planes={listaPlanes} />
    </main>
  );
}
