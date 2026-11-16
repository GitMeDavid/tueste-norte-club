"use client";

import { useActionState } from "react";
import { registrarCliente } from "./actions";

export default function FormularioAlta({
  planes,
}: {
  planes: { id: number; nombre: string }[];
}) {
  const [estado, accionFormulario] = useActionState(registrarCliente, {
    error: "",
  });

  return (
    <form action={accionFormulario}>
      <h2>Formulario de suscripción</h2>

      <div>
        <label htmlFor="planId">Plan de suscripción:</label>
        <select id="planId" name="planId" required>
          <option value="">Selecciona un plan</option>

          {planes.map((plan) => (
            <option key={plan.id} value={plan.id}>
              {plan.nombre}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Suscribirme</button>

      {estado.error && <p role="alert">{estado.error}</p>}
    </form>
  );
}
