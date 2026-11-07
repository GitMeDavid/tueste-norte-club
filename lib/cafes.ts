
export type Cafe = {
  nombre: string;
  slug: string;
  origen: string;
  precio: number;
  tueste: "claro" | "medio" | "oscuro";
};

export const cafes: Cafe[] = [
  {
    nombre: "Etiopía Sidamo",
    slug: "etiopia-sidamo",
    origen: "Etiopía",
    precio: 12.5,
    tueste: "claro",
  },
  {
    nombre: "Guatemala Volcán",
    slug: "guatemala-volcan",
    origen: "Guatemala",
    precio: 11.9,
    tueste: "medio",
  },
  {
    nombre: "Colombia Supremo",
    slug: "colombia-supremo",
    origen: "Colombia",
    precio: 10.9,
    tueste: "oscuro",
  },
];
