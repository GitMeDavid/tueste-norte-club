
"use client";

export default function Error() {
  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold text-red-700">
        No se pudieron cargar las entradas del blog.
      </h2>

      <p className="mt-4">
        Comprueba que WordPress esté funcionando.
      </p>
    </main>
  );
}
