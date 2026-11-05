import Link from "next/link";

const metodos = [
    { nombre: "V60", slug: "v60" },
    { nombre: "Prensa francesa", slug: "prensa-francesa" },
    { nombre: "Aeropress", slug: "aeropress" },
];

export default function MetodosPage() {
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold">
                Métodos de preparación
            </h1>

            <p className="mt-4">
                Descubre diferentes formas de preparar café.
            </p>

            <ul className="mt-6 space-y-3">
                {metodos.map((metodo) => (

                    <li key={metodo.slug}>
                        <Link
                            href={`/metodos/${metodo.slug}`}
                            className="text-amber-800 hover:underline"
                        >
                            {metodo.nombre}
                        </Link>
                    </li>

                ))}
            </ul>

        </main>
    );
}
