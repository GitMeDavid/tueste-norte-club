import EtiquetaTueste from "@/components/EtiquetaTueste";

import BotonFavorito from "@/components/BotonFavorito";

import SelectorBolsas from "@/components/SelectorBolsas";

export default function Home() {
  const suscripcion = {
    plan: "Plan Mensual",
    bolsas: 2,
    proximaEntrega: "15 de noviembre de 2026",
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Panel de suscripción - Tueste Norte Club
      </h1>

      <section className="mt-6 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Mi suscripción</h2>

        <p className="mt-3">Plan contratado: {suscripcion.plan}</p>

        <p className="mt-3">Bolsas de café: {suscripcion.bolsas}</p>

        <p className="mt-3">Próxima entrega: {suscripcion.proximaEntrega}</p>
      </section>

      <SelectorBolsas />

      <p className="mt-4">Ejercicio 1 - Componentes React</p>

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
