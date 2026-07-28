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
    res.send(`Hola escribe l acategoria de un producto que te interese ${mi_categoria} `);
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