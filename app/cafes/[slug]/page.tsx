import { cafes } from "@/lib/cafes";
import { notFound } from "next/navigation";
import EtiquetaTueste from "@/components/EtiquetaTueste";

export async function generateStaticParams() {
    return cafes.map((cafe) => ({
        slug: cafe.slug,
    }));
}

type CafeDetalleProps = {
    params: Promise<{
        slug: string;
    }>;
};


export default async function CafeDetallePage({ params }: CafeDetalleProps) {
    const { slug } = await params;

    const cafe = cafes.find((cafe) => cafe.slug === slug);

    if (!cafe) {
        notFound();
    }

    return (
        <main className="p-8">

            <h1 className="text-3xl font-bold">
                {cafe.nombre}
            </h1>

            <p className="mt-4">
                Origen: {cafe.origen}
            </p>

            <p className="mt-2">
                Precio: {cafe.precio.toFixed(2)} €
            </p>

            <div className="mt-3">
                <EtiquetaTueste nivel={cafe.tueste} />
            </div>


        </main>
    );
}
