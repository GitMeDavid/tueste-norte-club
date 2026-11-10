
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

---

# Tueste Norte Club - Semana 7

## 9. Evolución del proyecto

Durante la Semana 7 se ha ampliado Tueste Norte Club
para incorporar persistencia de datos mediante SQLite
y Drizzle ORM.

El objetivo es que los planes, clientes y pedidos se
almacenen en una base de datos real, en lugar de
depender únicamente de datos escritos en el código.

Se han desarrollado las siguientes funcionalidades:

- Tres tablas relacionadas: planes, clientes y pedidos.
- Claves foráneas para relacionar los registros.
- Restricción de email único para los clientes.
- Script de seed para insertar datos de ejemplo.
- Formulario de alta mediante una Server Action.
- Validación de datos en el servidor.
- Comprobación de correos electrónicos duplicados.
- Selector de planes cargado desde SQLite.
- Listado de pedidos mediante un Server Component.
- Consulta de clientes relacionados mediante Drizzle.
- API GET /api/pedidos que devuelve datos en JSON.

## 10. Instalación y preparación de la base de datos

El proyecto utiliza SQLite como base de datos y
Drizzle ORM para realizar las consultas.

Para preparar el proyecto desde cero:

1. Clonar el repositorio de GitHub.
2. Abrir una terminal en la carpeta del proyecto.
3. Instalar las dependencias:

```bash
npm install
```

4. Crear las tablas de la base de datos:

```bash
npx drizzle-kit push
```

5. Insertar los datos de ejemplo:

```bash
npx tsx src/db/seed.ts
```

6. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

La base de datos se almacena localmente y no se
incluye en el repositorio de GitHub.

El esquema y el script de seed permiten reconstruirla.

## 11. API de pedidos

Se ha creado un Route Handler en Next.js que permite
consultar los pedidos almacenados en SQLite.

### Endpoint

- URL: http://localhost:3000/api/pedidos
- Método HTTP: GET
- Archivo: app/api/pedidos/route.ts
- Formato de respuesta: JSON

La API consulta los pedidos mediante Drizzle ORM e
incluye los datos del cliente asociado a cada pedido.

### Ejemplo de respuesta

```json
[
  {
    "id": 1,
    "clienteId": 1,
    "cafe": "Etiopía Sidamo",
    "mes": "2026-11",
    "estado": "pendiente",
    "cliente": {
      "id": 1,
      "nombre": "antonio garcía",
      "email": "antonio.prueba@example.com",
      "planId": 1
    }
  }
]
```

### Prueba con curl

Con el servidor Next.js funcionando, ejecutar:

```bash
curl http://localhost:3000/api/pedidos
```

El servidor devuelve los pedidos en formato JSON,
incluyendo la información del cliente relacionado.

Si no existen pedidos, devuelve un array vacío: [].
