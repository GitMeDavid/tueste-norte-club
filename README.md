
# Tueste Norte Club - Semana 6

Proyecto desarrollado durante la Semana 6 de la formación CodeNode.

## 1. Descripción del proyecto

Tueste Norte Club es una aplicación web de ejemplo para gestionar una suscripción de café de especialidad.

El proyecto se ha desarrollado con Next.js, React, TypeScript y Tailwind CSS.

El objetivo principal es aprender a crear aplicaciones web con componentes reutilizables, rutas dinámicas, gestión de estados y diseño responsive.

## 2. Tecnologías utilizadas

- Next.js: framework utilizado para desarrollar la aplicación.
- React: biblioteca para crear componentes reutilizables.
- TypeScript: permite definir tipos y detectar errores en el código.
- Tailwind CSS: facilita la creación de estilos y diseños responsive.
- Node.js y npm: permiten ejecutar el proyecto e instalar dependencias.
- Git y GitHub: control de versiones y entrega del trabajo.

## 3. Ejercicios realizados

### Ejercicio 1 - Componentes React

Se han creado dos componentes:

- EtiquetaTueste: muestra el nivel de tueste del café mediante etiquetas de diferentes colores.
- BotonFavorito: permite añadir o quitar un café de favoritos.

Se ha utilizado "use client" y useState para gestionar la interacción del botón de favoritos.

### Ejercicio 2 - Rutas con Next.js

Se han creado las siguientes rutas:

- / : página principal.
- /metodos : listado de métodos de preparación.
- /metodos/[slug] : ficha individual de cada método.

Se ha utilizado el componente Link para navegar entre páginas.

También se ha utilizado notFound() para gestionar rutas de métodos inexistentes.

### Ejercicio 3 - Consulta a WordPress

Se ha creado la ruta /entradas para consultar publicaciones de WordPress mediante su API REST.

Se han utilizado:

- fetch() para realizar la petición.
- async y await para gestionar la respuesta.
- loading.tsx para mostrar un estado de carga.
- error.tsx para gestionar errores de consulta.

La API de WordPress se consulta desde un Server Component.

## 4. Encargo final - Tueste Norte Club

Se ha desarrollado una aplicación de suscripción de café.

### Página principal

La página principal muestra un panel de suscripción con:

- Plan contratado.
- Número de bolsas.
- Fecha de la próxima entrega.

### Catálogo de cafés

La ruta /cafes muestra tres cafés:

- Etiopía Sidamo.
- Guatemala Volcán.
- Colombia Supremo.

Cada café muestra su nombre, origen, precio y nivel de tueste.

### Fichas individuales

La ruta dinámica /cafes/[slug] permite consultar los detalles de cada café.

Se utiliza el parámetro slug para identificar el café seleccionado.

La función find() busca el café correspondiente y notFound() gestiona los cafés inexistentes.

### Selector de bolsas

Se ha creado el componente SelectorBolsas.

Este componente utiliza useState para permitir al usuario modificar el número de bolsas de su suscripción.

Se han establecido los siguientes límites:

- Mínimo: 1 bolsa.
- Máximo: 6 bolsas.

Los botones se desactivan automáticamente al alcanzar estos límites.

### Diseño responsive

Se ha utilizado Tailwind CSS para adaptar el catálogo a diferentes pantallas:

- Móviles: una columna.
- Tabletas: dos columnas.
- Ordenadores: tres columnas.

## 5. Organización del proyecto

- app/: páginas, rutas y estructura de Next.js.
- app/cafes/: catálogo y fichas individuales.
- app/metodos/: rutas de métodos de preparación.
- app/entradas/: consulta de publicaciones de WordPress.
- components/: componentes reutilizables de React.
- lib/cafes.ts: datos compartidos y tipo Cafe.
- public/: archivos públicos del proyecto.

## 6. Cómo ejecutar el proyecto

Es necesario tener instalado Node.js.

Abrir una terminal en la carpeta del proyecto y ejecutar:

```bash
npm install
npm run dev
```

Después, abrir en el navegador:

http://localhost:3000

Para consultar la ruta /entradas es necesario tener WordPress funcionando en el entorno local con XAMPP y su API REST accesible.

## 7. Conceptos aprendidos

Durante esta semana se han trabajado los siguientes conceptos:

- Creación de componentes React.
- Diferencias entre Server Components y Client Components.
- Uso de "use client".
- Gestión de estados mediante useState.
- Propiedades tipadas con TypeScript.
- Rutas dinámicas mediante [slug].
- Navegación con Link.
- Gestión de páginas inexistentes con notFound().
- Consultas a una API REST mediante fetch().
- Gestión de estados de carga y errores.
- Diseño responsive mediante Tailwind CSS.
- Reutilización de componentes y datos compartidos.

## 8. Conclusión

Este proyecto ha permitido poner en práctica los fundamentos de Next.js y React mediante una aplicación de suscripción de café.

Se ha aprendido a organizar una aplicación en componentes y rutas, compartir información entre páginas, gestionar interacciones del usuario y aplicar estilos adaptables a diferentes dispositivos.

El proyecto se ha desarrollado como práctica formativa de la Semana 6 de CodeNode.
