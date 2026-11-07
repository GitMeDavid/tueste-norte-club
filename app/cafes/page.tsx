import EtiquetaTueste from "@/components/EtiquetaTueste";
import Link from "next/link";
import { cafes } from "@/lib/cafes";


export default function CafesPage() {
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold">
                Catálogo de cafés - Tueste Norte Club
            </h1>

            <p className="mt-4">
                Descubre los cafés disponibles para tu suscripción.
            </p>


            <ul className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                {cafes.map((cafe) => (

                    <li key={cafe.slug} className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
                        <h2 className="text-xl font-semibold">
                            {cafe.nombre}
                        </h2>

                        <p className="mt-2">
                            Origen: {cafe.origen}
                        </p>

                        <p className="mt-2">
                            Precio: {cafe.precio.toFixed(2)} €
                        </p>

                        <div className="mt-3">
                            <EtiquetaTueste nivel={cafe.tueste} />
                        </div>

                        <Link
                            href={`/cafes/${cafe.slug}`}
                            className="mt-3 block text-amber-800 underline"
                        >
                            Ver ficha
                        </Link>

                    </li>

                ))}
            </ul>

        </main>
    );
}
