import express from "express"; //ESM
//import {configDotenv} from "dotenv"
//configDotenv()
import "dotenv/config"

const app = express();
const puerto = process.env.PORT||3050;

app.get ("/",(req,res)=>{
    res.send("hola ficha 3407180 del SENA ")

});

app.get("/hi",(req,res)=>{
    const hi = req.params.hi
    res.send(`<p> Recuerda querida: ''Todos los hombres son iguales,mas no sus sueldos''. Paola Bracho</p><h1> La usurpadora </h1> ${hi}`);
});

app.get("/liz/:amor",(req,res)=>{
    const amor = req.params.amor
    res.send(`<p> Mi corazon nene, mi corazon nene, mi corazon muriendose de amor ${amor} </p>`);
});

app.get("/nombre/:ficha",(req,res)=>{
    const ficha = req.params.ficha
    res.send(`<p> Hola soy Ana de la ficha ${ficha} </p>`);
});

app.listen( puerto,()=>{
    console.log (`SERVIDOR https//localhost:${puerto} 
        https//127.0.0.1:${puerto}`)
    
});

// 
app.get("/productos/:categoria",(req,res)=>{
    const mi_categoria = req.params.categoria
    res.send(`Hola escribe la categoria de un producto que te interese ${mi_categoria} `);
});

app.get("/productos/:categoria/:id",(req,res)=>{
    const mi_categoria = req.params.categoria
    const mi_id = req.params.id
    res.send(`<h1> Hola escribe una categoria de un producto que te interese </h1> <p>${mi_categoria}<p> <h1>coloca el numero de id</h1> <p>${mi_id}</p>`);
});


app.get("/libros/:isbn", (req,res)=> {
    const mi_isbn= req.params.isbn
    res.send(`<h1>Hola coloca el ISBN (el codigo del libro)</h1> ${mi_isbn}`)
})

app.get("/lacteos/:lacteos", (req,res)=> {
    const lacteo= req.params.lacteos
    const fecha_v= req.query.fecha_v
    res.send(`<h1>Hola coloca una categoria de interes </h1> ${lacteo} <p>Fecha de vencimiento: ${fecha_v}</p>`
    )
})




const productos = [
  { idProducto: 1, nombre: "Camisa", categoria: "Ropa", cantidad: 10 },
  { idProducto: 2, nombre: "Pantalón", categoria: "Ropa", cantidad: 5 },
  { idProducto: 3, nombre: "Zapatos", categoria: "Calzado", cantidad: 8 }
];

const libros = [
  { isbn: "9780131103627", nombre: "El libro de C", autor: "Brian Kernighan" },
  { isbn: "9780596007126", nombre: "JavaScript: The Definitive Guide", autor: "David Flanagan" },
  { isbn: "9781491952023", nombre: "Eloquent JavaScript", autor: "Marijn Haverbeke" }
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