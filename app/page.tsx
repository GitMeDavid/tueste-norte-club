import EtiquetaTueste from "@/components/EtiquetaTueste";

import BotonFavorito from "@/components/BotonFavorito";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Club Tueste Norte
      </h1>

      <p className="mt-4">
        Ejercicio 1 - Componentes React
      </p>

      <div className="mt-6 flex gap-4">
        <EtiquetaTueste nivel="claro" />
        <EtiquetaTueste nivel="medio" />
        <EtiquetaTueste nivel="oscuro" />
      </div>

      <div className="mt-6">
        <BotonFavorito nombreCafe="Etiopía Sidamo" />
      </div>

    </main>
  );
}
