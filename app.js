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
    res.send(`<p> Recuerda querida: ''Todos los hombres son iguales,mas no sus sueldos''. Paola Bracho</p><h1> La usurpadora </h1>`);
});

app.listen( puerto,()=>{
    console.log (`servidor funcionando!! en el puerto ${puerto}`)
});