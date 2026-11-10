import FormularioAlta from "./FormularioAlta";

import { db } from "../../src/db";
import { planes } from "../../src/db/schema";

export default async function PaginaAlta() {
  const listaPlanes = await db.select().from(planes);

  return (
    <main>
      <h1>Alta de suscripción - Tueste Norte Club</h1>
      <p>Elige tu plan y únete a nuestro club de café.</p>

      <FormularioAlta planes={listaPlanes} />
    </main>
  );
}
