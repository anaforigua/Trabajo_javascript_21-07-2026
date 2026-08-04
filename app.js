//import express from "express"
const express = require("express")
const app = express()
const puerto = process.env.PORT||3009;

app.get ("/",(req,res)=>{
    res.send("hola ficha 3407180")

})

app.get("/frase/:Rubi", (req, res) => {
    const texto = req.params.Rubi;
    const Rubi = texto.charAt(0).toUpperCase() + texto.slice(1);
    res.send(`"En esta vida el dinero es muy importante y el que diga que no es porque le sobra o porque está equivocado." ${Rubi}`);
});


app.get("/Paola", (req, res) => {
    const Paola = "paola";
    const nombre = Paola.charAt(0).toUpperCase() + Paola.slice(1);

    res.send(`"Aquí me aburro soberanamente, no tengo a quien fastidiar ni con quien destilar veneno." ${nombre}`);
});


app.listen( puerto,()=>{
    console.log (`SERVIDOR https//localhost:${puerto} 
        https//127.0.0.1:${puerto}`)
});






//parametros de consulta
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

    const isbn = req.query.isbn;
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
