
import { notFound } from "next/navigation";

type MetodoPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

const metodos = [
    { nombre: "V60", slug: "v60" },
    { nombre: "Prensa francesa", slug: "prensa-francesa" },
    { nombre: "Aeropress", slug: "aeropress" },
];

export async function generateStaticParams() {
  return metodos.map((metodo) => ({
    slug: metodo.slug,
  }));
}

export default async function MetodoPage({ params }: MetodoPageProps) {
    const { slug } = await params;

    const metodo = metodos.find((item) => item.slug === slug);

    if (!metodo) {
        notFound();
    }


    return (
        <main className="p-8">

            <h1 className="text-3xl font-bold">
                Método de preparación: {metodo?.nombre}
            </h1>

        </main>
    );
}
