"use client";

import { useState } from "react";

type BotonFavoritoProps = {
    nombreCafe: string;
};

export default function BotonFavorito({ nombreCafe }: BotonFavoritoProps) {
    const [esFavorito, setEsFavorito] = useState(false);



    return (
        <button
            onClick={() => setEsFavorito(!esFavorito)}
            aria-label={`Cambiar favorito de ${nombreCafe}`}
        >
            {esFavorito ? "★ En favoritos" : "☆ Añadir a favoritos"}
        </button>
    );

}
