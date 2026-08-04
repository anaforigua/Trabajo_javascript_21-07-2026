# Trabajo JavaScript - Parámetros y Parámetros de Consulta

## Descripción

Este proyecto fue desarrollado utilizando **JavaScript, Node.js y Express** como práctica para aprender a crear un servidor, manejar rutas, utilizar parámetros y trabajar con parámetros de consulta.

En el proyecto se implementaron diferentes rutas para practicar:

- Rutas básicas.
- Parámetros de ruta.
- Parámetros de consulta.
- `req.params`.
- `req.query`.
- Listas de productos.
- Listas de libros.
- Consulta de información mediante la URL.
- Modificación de productos mediante la URL.
- Modificación de libros mediante la URL.
- Consulta de fecha de vencimiento para productos lácteos.
- Variables de entorno.
- Git y GitHub.
- Rama de respaldo.

---

# 1. Tecnologías utilizadas

## JavaScript

Lenguaje utilizado para desarrollar la lógica del proyecto.

## Node.js

Entorno que permite ejecutar JavaScript fuera del navegador y crear el servidor.

## Express

Framework utilizado para crear el servidor y definir las diferentes rutas.

## dotenv

Permite utilizar variables de entorno almacenadas en un archivo `.env`.

## Git

Sistema de control de versiones utilizado para guardar los cambios realizados en el proyecto.

## GitHub

Plataforma utilizada para almacenar el proyecto de manera remota y realizar respaldos.

---

# 2. ¿Qué es un parámetro?

Un parámetro es un dato que se envía a una función, método o ruta para que pueda trabajar con información específica.

En Express se pueden utilizar parámetros dentro de las rutas.

Por ejemplo:

```js

app.get("/nombre/:ficha", (req, res) => {

    const ficha = req.params.ficha;

    res.send(`<p>Hola soy Ana de la ficha ${ficha}</p>`);

});
En este caso:

:ficha

es un parámetro de ruta.

Si se utiliza:

http://localhost:3050/nombre/3407180

el valor recibido será:

3407180

Y se obtiene mediante:

req.params.ficha
3. ¿Qué son los parámetros de ruta?

Los parámetros de ruta son valores que forman parte de la estructura de una URL.

Se identifican utilizando :.

Ejemplo:

app.get("/productos/:categoria", (req, res) => {

    const categoria = req.params.categoria;

});

La parte:

:categoria

es un parámetro dinámico.

Si se utiliza:

http://localhost:3050/productos/Ropa

el valor de:

req.params.categoria

será:

Ropa
4. ¿Qué son los parámetros de consulta?

Los parámetros de consulta, también conocidos como Query Parameters, son datos que se envían en una URL después del signo:

?

Por ejemplo:

http://localhost:3050/productos?categoria=Ropa

En este caso:

categoria=Ropa

es un parámetro de consulta.

En Express se obtiene mediante:

req.query.categoria
5. Varios parámetros de consulta

Se pueden enviar varios parámetros de consulta utilizando:

&

Por ejemplo:

http://localhost:3050/productos?categoria=Ropa&cantidad=10

Tenemos:

categoria = Ropa
cantidad = 10

En Express:

const categoria = req.query.categoria;
const cantidad = req.query.cantidad;
6. Diferencia entre req.params y req.query
req.params

Se utiliza para obtener parámetros que forman parte de la ruta.

Ejemplo:

/productos/Ropa

Código:

const categoria = req.params.categoria;
req.query

Se utiliza para obtener parámetros enviados después de ?.

Ejemplo:

/productos?categoria=Ropa&cantidad=10

Código:

const categoria = req.query.categoria;
const cantidad = req.query.cantidad;
7. Estructura del proyecto
Trabajo_javascript_21-07-2026/
│
├── node_modules/
├── .env
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
app.js

Contiene el servidor, las rutas, las listas de productos y libros y la lógica de los parámetros.

package.json

Contiene la información del proyecto y las dependencias.

package-lock.json

Registra las versiones exactas de las dependencias instaladas.

node_modules

Contiene las dependencias instaladas con npm.

.env

Contiene las variables de entorno.

.gitignore

Indica qué archivos o carpetas no deben subirse a GitHub.

README.md

Contiene la documentación del proyecto.

8. Instalación

Primero se debe comprobar que Node.js esté instalado:

node -v

Después comprobar npm:

npm -v

También se puede comprobar Git:

git --version
9. Instalar las dependencias

Después de entrar a la carpeta del proyecto:

cd Trabajo_javascript_21-07-2026

se ejecuta:

npm install

Este comando instala las dependencias del proyecto.

10. Variables de entorno

El proyecto utiliza:

import "dotenv/config";

Esto permite cargar las variables de entorno almacenadas en .env.

Por ejemplo:

PORT=3050

En el código se utiliza:

const puerto = process.env.PORT || 3050;

Esto significa que:

Si existe PORT, se utiliza ese valor.
Si no existe, se utiliza 3050.
11. Crear el servidor

Primero se importa Express:

import express from "express";

Después se crea la aplicación:

const app = express();

Y se define el puerto:

const puerto = process.env.PORT || 3050;
12. Ruta principal

La ruta principal es:

app.get("/", (req, res) => {
    res.send("hola ficha 3407180 del SENA");
});

Se puede consultar en:

http://localhost:3050/

El servidor responderá:

hola ficha 3407180 del SENA
13. Ruta /hi

Se creó la ruta:

app.get("/hi", (req, res) => {

    const hi = req.params.hi;

    res.send(`
        <p>Recuerda querida: "Todos los hombres son iguales, mas no sus sueldos". Paola Bracho</p>
        <h1>La usurpadora</h1>
        ${hi}
    `);

});

Esta ruta forma parte de las prácticas realizadas con Express.

14. Ruta /liz/:amor

Esta ruta utiliza un parámetro:

app.get("/liz/:amor", (req, res) => {

    const amor = req.params.amor;

    res.send(`
        <p>Mi corazon nene, mi corazon nene, mi corazon muriendose de amor ${amor}</p>
    `);

});

Ejemplo:

http://localhost:3050/liz/Ana

El valor:

Ana

se obtiene mediante:

req.params.amor
15. Ruta /nombre/:ficha

Esta ruta recibe el número de ficha como parámetro:

app.get("/nombre/:ficha", (req, res) => {

    const ficha = req.params.ficha;

    res.send(`
        <p>Hola soy Ana de la ficha ${ficha}</p>
    `);

});

Ejemplo:

http://localhost:3050/nombre/3407180

Resultado:

Hola soy Ana de la ficha 3407180
16. Ruta de productos por categoría

Se creó:

app.get("/productos/:categoria", (req, res) => {

    const mi_categoria = req.params.categoria;

    res.send(`
        Hola escribe la categoria de un producto que te interese
        ${mi_categoria}
    `);

});

Ejemplo:

http://localhost:3050/productos/Ropa

Aquí:

req.params.categoria

recibe:

Ropa
17. Ruta de productos por categoría e ID

También se creó:

app.get("/productos/:categoria/:id", (req, res) => {

    const mi_categoria = req.params.categoria;
    const mi_id = req.params.id;

    res.send(`
        <h1>Hola escribe una categoria de un producto que te interese</h1>
        <p>${mi_categoria}</p>

        <h1>Coloca el numero de id</h1>
        <p>${mi_id}</p>
    `);

});

Ejemplo:

http://localhost:3050/productos/Ropa/2

Los valores recibidos son:

categoria = Ropa
id = 2

Se obtienen mediante:

req.params.categoria
req.params.id
18. Ruta de libros por ISBN

Se creó:

app.get("/libros/:isbn", (req, res) => {

    const mi_isbn = req.params.isbn;

    res.send(`
        <h1>Hola coloca el ISBN (el codigo del libro)</h1>
        ${mi_isbn}
    `);

});

Ejemplo:

http://localhost:3050/libros/9780131103627

El ISBN se obtiene mediante:

req.params.isbn
19. Ruta de lácteos

La ruta de lácteos fue modificada para evitar conflictos con la ruta:

/productos/:categoria

La ruta utilizada es:

app.get("/lacteos/:lacteos", (req, res) => {

    const lacteo = req.params.lacteos;
    const fecha_v = req.query.fecha_v;

    res.send(`
        <h1>Hola coloca una categoria de interes</h1>
        ${lacteo}

        <p>Fecha de vencimiento: ${fecha_v}</p>
    `);

});
20. ¿Cómo funciona la ruta de lácteos?

Se puede utilizar:

http://localhost:3050/lacteos/Leche?fecha_v=2026-08-20

La URL contiene dos tipos de parámetros.

Parámetro de ruta
/lacteos/Leche

El valor:

Leche

se obtiene mediante:

req.params.lacteos
Parámetro de consulta
?fecha_v=2026-08-20

El valor:

2026-08-20

se obtiene mediante:

req.query.fecha_v

Por lo tanto, esta ruta permite practicar al mismo tiempo:

req.params

y:

req.query
21. Lista de productos

Se creó una lista de productos:

const productos = [
    {
        idProducto: 1,
        nombre: "Camisa",
        categoria: "Ropa",
        cantidad: 10
    },
    {
        idProducto: 2,
        nombre: "Pantalón",
        categoria: "Ropa",
        cantidad: 5
    },
    {
        idProducto: 3,
        nombre: "Zapatos",
        categoria: "Calzado",
        cantidad: 8
    }
];

Cada producto contiene:

Campo	Descripción
idProducto	Identificador del producto
nombre	Nombre del producto
categoria	Categoría
cantidad	Cantidad disponible
22. Lista de libros

También se creó una lista de libros:

const libros = [
    {
        isbn: "9780131103627",
        nombre: "El libro de C",
        autor: "Brian Kernighan"
    },
    {
        isbn: "9780596007126",
        nombre: "JavaScript: The Definitive Guide",
        autor: "David Flanagan"
    },
    {
        isbn: "9781491952023",
        nombre: "Eloquent JavaScript",
        autor: "Marijn Haverbeke"
    }
];

Cada libro contiene:

Campo	Descripción
isbn	Código identificador del libro
nombre	Nombre del libro
autor	Autor
23. Editar un producto mediante parámetros de consulta

Se creó la ruta:

app.get("/editar-producto", (req, res) => {

    const idProducto = req.query.producto;
    const nombre = req.query.nombre;
    const categoria = req.query.categoria;
    const cantidad = req.query.cantidad;

    const producto = productos.find(
        item => item.idProducto == idProducto
    );

    if (!producto) {
        return res.send("Producto no encontrado");
    }

    if (nombre) producto.nombre = nombre;
    if (categoria) producto.categoria = categoria;
    if (cantidad) producto.cantidad = cantidad;

    res.json(producto);
});

Esta ruta utiliza parámetros de consulta para identificar y modificar un producto.

24. URL para editar un producto

La URL utilizada es:

http://localhost:3050/editar-producto?producto=2&nombre=Tenis&categoria=Calzado&cantidad=15

Esta URL se puede dividir en varias partes:

http://localhost:3050

Es la dirección del servidor.

/editar-producto

Es la ruta encargada de modificar el producto.

?

Indica el inicio de los parámetros de consulta.

producto=2

Indica el ID del producto que se quiere modificar.

&

Se utiliza para separar los parámetros.

nombre=Tenis

Indica el nuevo nombre.

categoria=Calzado

Indica la nueva categoría.

cantidad=15

Indica la nueva cantidad.

25. ¿Cómo recibe Express los datos?

La URL:

http://localhost:3050/editar-producto?producto=2&nombre=Tenis&categoria=Calzado&cantidad=15

es recibida por Express.

Los valores se obtienen utilizando:

const idProducto = req.query.producto;
const nombre = req.query.nombre;
const categoria = req.query.categoria;
const cantidad = req.query.cantidad;

Los valores serán:

producto  → 2
nombre    → Tenis
categoria → Calzado
cantidad  → 15
26. Buscar el producto

Después de recibir el ID se busca el producto dentro del arreglo:

const producto = productos.find(
    item => item.idProducto == idProducto
);

El método find() permite buscar un elemento dentro de un arreglo.

En este caso se busca un producto cuyo:

idProducto

sea igual al ID recibido desde la URL.

Por ejemplo:

producto = 2

buscará:

{
    idProducto: 2,
    nombre: "Pantalón",
    categoria: "Ropa",
    cantidad: 5
}
27. Modificar los datos

Después de encontrar el producto se modifican los datos recibidos:

if (nombre) producto.nombre = nombre;

if (categoria) producto.categoria = categoria;

if (cantidad) producto.cantidad = cantidad;

Por lo tanto, inicialmente:

ID: 2
Nombre: Pantalón
Categoría: Ropa
Cantidad: 5

Después de utilizar:

http://localhost:3050/editar-producto?producto=2&nombre=Tenis&categoria=Calzado&cantidad=15

queda:

ID: 2
Nombre: Tenis
Categoría: Calzado
Cantidad: 15
28. Modificar solamente algunos datos

No es obligatorio enviar todos los parámetros.

Por ejemplo:

http://localhost:3050/editar-producto?producto=2&nombre=Tenis

Solamente modifica:

Nombre → Tenis

La categoría y cantidad permanecen iguales.

Esto funciona gracias a:

if (nombre) producto.nombre = nombre;

if (categoria) producto.categoria = categoria;

if (cantidad) producto.cantidad = cantidad;

Si el parámetro no se envía, no se modifica ese campo.

29. Ejemplos de edición de productos
Cambiar solamente el nombre
http://localhost:3050/editar-producto?producto=1&nombre=Camisa
Cambiar nombre y cantidad
http://localhost:3050/editar-producto?producto=1&nombre=Camisa%20Azul&cantidad=20

%20 representa un espacio dentro de una URL.

Cambiar categoría y cantidad
http://localhost:3050/editar-producto?producto=3&categoria=Deportivo&cantidad=12
Cambiar todos los datos
http://localhost:3050/editar-producto?producto=2&nombre=Tenis&categoria=Calzado&cantidad=15
30. Editar un libro mediante parámetros de consulta

Se creó la ruta:

app.get("/editar-libro", (req, res) => {

    const isbn = req.query.libro;
    const nombre = req.query.nombre;
    const autor = req.query.autor;

    const libro = libros.find(
        item => item.isbn == isbn
    );

    if (!libro) {
        return res.send("Libro no encontrado");
    }

    if (nombre) libro.nombre = nombre;
    if (autor) libro.autor = autor;

    res.json(libro);
});
31. URL para editar un libro

Ejemplo:

http://localhost:3050/editar-libro?libro=9780131103627&nombre=JavaScript&autor=Ana

Los parámetros son:

libro  → 9780131103627
nombre → JavaScript
autor  → Ana

El ISBN permite identificar el libro.

Después se busca utilizando:

const libro = libros.find(
    item => item.isbn == isbn
);

Finalmente se modifican los datos:

if (nombre) libro.nombre = nombre;

if (autor) libro.autor = autor;
32. Ejemplos para editar libros
Cambiar solamente el nombre
http://localhost:3050/editar-libro?libro=9780131103627&nombre=JavaScript%20Basico
Cambiar solamente el autor
http://localhost:3050/editar-libro?libro=9780131103627&autor=Ana
Cambiar nombre y autor
http://localhost:3050/editar-libro?libro=9780131103627&nombre=JavaScript%20Basico&autor=Ana
33. ¿Qué sucede si el producto no existe?

El código comprueba si el producto fue encontrado:

if (!producto) {
    return res.send("Producto no encontrado");
}

Por ejemplo:

http://localhost:3050/editar-producto?producto=99&nombre=Tenis

Si no existe el producto 99, el servidor responde:

Producto no encontrado
34. ¿Qué sucede si el libro no existe?

También se comprueba si el libro existe:

if (!libro) {
    return res.send("Libro no encontrado");
}

Por ejemplo:

http://localhost:3050/editar-libro?libro=9999999999999&nombre=JavaScript

Si el ISBN no existe, se responde:

Libro no encontrado
35. Importante: los cambios son temporales

Los productos y libros están almacenados en arreglos de JavaScript:

const productos = [];
const libros = [];

Esto significa que los cambios se realizan en la memoria del servidor.

Por ejemplo:

Producto original
       ↓
Pantalón
       ↓
URL de modificación
       ↓
Tenis

El cambio permanece mientras el servidor esté ejecutándose.

Sin embargo, si se detiene el servidor y se vuelve a iniciar:

node --watch app.js

los datos vuelven a los valores originales definidos en el código.

Esto ocurre porque todavía no se utiliza una base de datos.

Para conservar los cambios permanentemente sería necesario utilizar una base de datos como PostgreSQL, MySQL o MongoDB.

36. ¿Cómo iniciar el proyecto?

Primero se ingresa a la carpeta:

cd Trabajo_javascript_21-07-2026

Después se instalan las dependencias:

npm install

Finalmente se inicia el servidor:

node --watch app.js

Si el servidor inicia correctamente aparecerá un mensaje indicando el puerto utilizado.

37. URLs para probar el proyecto
Ruta principal
http://localhost:3050/
Ficha
http://localhost:3050/nombre/3407180
Producto por categoría
http://localhost:3050/productos/Ropa
Producto por categoría e ID
http://localhost:3050/productos/Ropa/2
Libro por ISBN
http://localhost:3050/libros/9780131103627
Lácteos
http://localhost:3050/lacteos/Leche?fecha_v=2026-08-20
Editar producto
http://localhost:3050/editar-producto?producto=2&nombre=Tenis&categoria=Calzado&cantidad=15
Editar libro
http://localhost:3050/editar-libro?libro=9780131103627&nombre=JavaScript&autor=Ana
38. Flujo de funcionamiento

El funcionamiento de la modificación de un producto es:

Usuario
   ↓
Escribe la URL
   ↓
/editar-producto
   ↓
req.query recibe los parámetros
   ↓
Se obtiene el ID
   ↓
find() busca el producto
   ↓
Se modifican los campos enviados
   ↓
res.json() devuelve el producto actualizado

Ejemplo:

/editar-producto
       ↓
producto=2
       ↓
Buscar ID 2
       ↓
nombre=Tenis
categoria=Calzado
cantidad=15
       ↓
Producto actualizado
39. Git y GitHub

Git se utiliza para controlar las versiones del proyecto.

GitHub se utiliza para almacenar el proyecto de forma remota y realizar respaldos.

40. Inicializar Git

Si el proyecto todavía no tiene un repositorio Git:

git init

Este comando crea el repositorio Git local.

git init normalmente se utiliza una sola vez al comenzar el control de versiones del proyecto.

41. Agregar los archivos

Para agregar los cambios:

git add .

El punto . indica que se agreguen los archivos modificados del proyecto que no estén incluidos en .gitignore.

42. Crear un commit

Para guardar los cambios:

git commit -m "subir corrección de parametros de consulta"

El commit crea una versión de los cambios realizados.

El mensaje permite identificar qué se modificó.

43. Subir los cambios a GitHub

Para subir los cambios al repositorio remoto:

git push

Si es la primera vez que se conecta una rama local con una rama remota, se puede utilizar:

git push -u origin respaldo
44. Rama de respaldo

Para crear una rama llamada respaldo:

git switch -c respaldo

Después:

git add .

Luego:

git commit -m "subir corrección de parametros de consulta"

Finalmente:

git push -u origin respaldo
45. Si la rama respaldo ya existe

Si la rama respaldo ya fue creada anteriormente:

git switch respaldo

Después:

git add .
git commit -m "subir corrección de parametros de consulta"

Y finalmente:

git push
46. Comandos utilizados para el respaldo

El flujo completo utilizado para guardar la corrección es:

git init

git add .

git commit -m "subir corrección de parametros de consulta"

git push

Si se trabaja específicamente con la rama respaldo:

git switch respaldo

git add .

git commit -m "subir corrección de parametros de consulta"

git push

Si la rama todavía no existe:

git switch -c respaldo

git add .

git commit -m "subir corrección de parametros de consulta"

git push -u origin respaldo
47. Verificar el estado del proyecto

Antes de realizar el commit se puede utilizar:

git status

Este comando muestra los archivos modificados y permite verificar el estado del repositorio.

También se puede comprobar la rama actual con:

git branch

La rama actual aparece marcada con:

*
48. Flujo completo de trabajo

El flujo utilizado durante el desarrollo es:

Modificar código
       ↓
Guardar archivo
       ↓
Iniciar servidor
       ↓
Probar rutas
       ↓
Probar parámetros
       ↓
Probar parámetros de consulta
       ↓
Verificar cambios
       ↓
git status
       ↓
git add .
       ↓
git commit
       ↓
git push
       ↓
Respaldo en GitHub
49. Conceptos aprendidos

Durante este proyecto se practicaron los siguientes conceptos:

JavaScript.
Node.js.
Express.
Servidores.
Rutas HTTP.
Parámetros.
Parámetros de ruta.
req.params.
Parámetros de consulta.
req.query.
Query Parameters.
URL.
Arrays.
Objetos.
find().
Modificación de objetos.
Variables de entorno.
dotenv.
node --watch.
Git.
GitHub.
Repositorios.
Commits.
Ramas.
Rama de respaldo.
50. Código principal utilizado

El proyecto contiene las siguientes partes principales:

import express from "express";
import "dotenv/config";

const app = express();
const puerto = process.env.PORT || 3050;

const productos = [
    {
        idProducto: 1,
        nombre: "Camisa",
        categoria: "Ropa",
        cantidad: 10
    },
    {
        idProducto: 2,
        nombre: "Pantalón",
        categoria: "Ropa",
        cantidad: 5
    },
    {
        idProducto: 3,
        nombre: "Zapatos",
        categoria: "Calzado",
        cantidad: 8
    }
];

const libros = [
    {
        isbn: "9780131103627",
        nombre: "El libro de C",
        autor: "Brian Kernighan"
    },
    {
        isbn: "9780596007126",
        nombre: "JavaScript: The Definitive Guide",
        autor: "David Flanagan"
    },
    {
        isbn: "9781491952023",
        nombre: "Eloquent JavaScript",
        autor: "Marijn Haverbeke"
    }
];

app.get("/editar-producto", (req, res) => {

    const idProducto = req.query.producto;
    const nombre = req.query.nombre;
    const categoria = req.query.categoria;
    const cantidad = req.query.cantidad;

    const producto = productos.find(
        item => item.idProducto == idProducto
    );

    if (!producto) {
        return res.send("Producto no encontrado");
    }

    if (nombre) producto.nombre = nombre;
    if (categoria) producto.categoria = categoria;
    if (cantidad) producto.cantidad = cantidad;

    res.json(producto);
});

app.get("/editar-libro", (req, res) => {

    const isbn = req.query.libro;
    const nombre = req.query.nombre;
    const autor = req.query.autor;

    const libro = libros.find(
        item => item.isbn == isbn
    );

    if (!libro) {
        return res.send("Libro no encontrado");
    }

    if (nombre) libro.nombre = nombre;
    if (autor) libro.autor = autor;

    res.json(libro);
});

app.listen(puerto, () => {
    console.log(`SERVIDOR ejecutándose en http://localhost:${puerto}`);
});
