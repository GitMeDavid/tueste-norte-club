
"use client";

import { useState } from "react";

export default function SelectorBolsas() {
    const [bolsas, setBolsas] = useState<number>(2);

    return (
        <div className="mt-6 rounded-lg border p-4">
            <h2 className="text-xl font-semibold">
                Personaliza tu suscripción
            </h2>


            <p className="mt-3">
                Número de bolsas de café: {bolsas}
            </p>


            <button
                type="button"
                onClick={() => setBolsas(Math.min(6, bolsas + 1))}
                disabled={bolsas >= 6}
                className="mt-4 rounded bg-amber-800 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
                Añadir bolsa +
            </button>



            <button
                type="button"
                onClick={() => setBolsas(Math.max(1, bolsas - 1))}
                disabled={bolsas <= 1}
                className="ml-3 mt-4 rounded bg-gray-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
                Quitar bolsa -
            </button>


        </div>
    );
}
