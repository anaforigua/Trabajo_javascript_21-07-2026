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

