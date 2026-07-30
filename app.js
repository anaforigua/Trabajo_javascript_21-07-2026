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

app.get("/productos/:lacteos", (req,res)=> {
    const lacteo= req.params.lacteos
    const fecha_v= req.query.fecha_v
    res.send(`<h1>Hola coloca una categoria de interes </h1> ${lacteo} <p>Fecha de vencimiento: ${fecha_v}</p>`
    )
})




const lista_productos=[
    
    { id: 1, nombre: "Laptop", categoria: "Tecnología", precio: 2500000 },
    { id: 2, nombre: "Mouse", categoria: "Tecnología", precio: 80000 },
    { id: 3, nombre: "Camiseta", categoria: "Ropa", precio: 50000 },
    { id: 4, nombre: "Zapatos", categoria: "Calzado", precio: 180000 }
    
];

app.get("/productos", (req, res) => {
   const {nombre}=req.query;
       if (nombre) {
        const resultado = lista_productos.filter(
            producto => producto.nombre.toLowerCase() === nombre.toLowerCase()
        );
         return res.json(resultado);
    }

    res.json(lista_productos);
});

app.put("/productos", (req, res) => {
    const { id, nombre, precio } = req.query;

    const producto = lista_productos.find(
        producto => producto.id === Number(id)
    );

    if (!producto) {
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    if (nombre) {
        producto.nombre = nombre;
    }

    if (precio) {
        producto.precio = Number(precio);
    }

    res.json({
        mensaje: "Producto actualizado",
        producto: producto
    });
});



const lista_libros=[
    {
         ISBN:21345,titulo:"El viejo y el mar", autor:"Ernest Hemingway."},
         {
         ISBN:21346,titulo:"Carrie", autor:"Stephen King."},
         {
         ISBN:22430,titulo:"El mensajero de agartha zombies", autor:"Mario Mendoza."}
]

app.get("/libros", (req, res) => {
   const {titulo}=req.query;
       if (titulo) {
        const resultado = lista_libros.filter(
            libro => libro.titulo.toLowerCase() === titulo.toLowerCase()
        );
         return res.json(resultado);
    }

    res.json(lista_libros);
});

app.put("/libros", (req, res) => {
    const { ISBN, titulo, autor } = req.query;

    const libro = lista_libros.find(
        libro => libro.ISBN === Number(ISBN)
    );

    if (!libro) {
        return res.status(404).json({
            mensaje: "Libro no encontrado"
        });
    }

    if (titulo) {
        libro.titulo = titulo;
    }

    if (autor) {
        libro.autor = autor;
    }

    res.json({
        mensaje: "Libro actualizado correctamente",
        libro: libro
    });
});