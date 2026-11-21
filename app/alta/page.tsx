import FormularioAlta from "./FormularioAlta";


import { planes } from "../../src/db/schema";

import { obtenerAuthCloudflare } from "@/lib/auth-cloudflare";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { obtenerBaseDeDatosCloudflare } from "@/src/db/database";
export default async function PaginaAlta() {
  const auth = await obtenerAuthCloudflare();
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }
  const db = await obtenerBaseDeDatosCloudflare();
  const listaPlanes = await db.select().from(planes);

  return (
    <main>
      <h1>Alta de suscripción - Tueste Norte Club</h1>
      <p>Elige tu plan y únete a nuestro club de café.</p>

      <FormularioAlta planes={listaPlanes} />
    </main>
  );
}
