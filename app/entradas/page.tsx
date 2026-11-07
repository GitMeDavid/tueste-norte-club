
type EntradaWordPress = {
    id: number;
    title: {
        rendered: string;
    };
};

export default async function EntradasPage() {

  // Esta página es un Server Component de Next.js.
  // Por eso fetch() se ejecuta en el servidor y no en el navegador.
  // La petición a WordPress no aparece en la pestaña Network
  // del navegador como una petición fetch realizada por el cliente.

    const respuesta = await fetch("http://localhost/tueste-norte-wp/wp-json/wp/v2/posts");

    if (!respuesta.ok) {
        throw new Error("No se pudieron obtener las entradas de WordPress");
    }


    const entradas: EntradaWordPress[] = await respuesta.json();

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold">
                Entradas del blog de Tueste Norte
            </h1>

            <ul className="mt-6 space-y-3">
                {entradas.map((entrada) => (
                    <li key={entrada.id}>
                        {entrada.title.rendered}
                    </li>
                ))}
            </ul>

        </main>
    );
}
