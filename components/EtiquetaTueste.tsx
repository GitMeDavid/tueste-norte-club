
type EtiquetaTuesteProps = {
    nivel: "claro" | "medio" | "oscuro"; // la barra vertical significa "o"  
};



export default function EtiquetaTueste({ nivel }: EtiquetaTuesteProps) {
    const colores = {
        claro: "bg-amber-100 text-amber-800",
        medio: "bg-amber-300 text-amber-900",
        oscuro: "bg-amber-800 text-white",
    };

    return (
        <span className={`rounded px-3 py-1 ${colores[nivel]}`}>
            {nivel}
        </span>
    );
}

