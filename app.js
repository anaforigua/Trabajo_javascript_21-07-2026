import express from "express"; //ESM
//import {configDotenv} from "dotenv"
//configDotenv()
import "dotenv/config"

const app = express();
const puerto = process.env.PORT||3050;

app.get("/", (req, res) => {
    res.status(200).json({
        mensaje: "Servidor funcionando"
    });
});

app.listen( puerto,()=>{
    console.log (`SERVIDOR https//localhost:${puerto} 
        https//127.0.0.1:${puerto}`);})
    
app.get ("/ejemplo",(req,res)=>{
    res.status(200)
    res.json({"mensaje":"hola"})
})

app.get("/frases", (req, res) => {
    const frase = req.query.frase;

    res.status(200).json({
        mensaje: frase
    });
});

app.get("/nombres", (req, res) => {
    const nombre = req.query.nombre;

    res.status(200).json({
        mensaje: `Yo soy ${nombre}`
    });
});


app.get("/usuarios", (req, res) => {
    const nombre = req.query.nombre;

    if (nombre !== "Batman") {
        return res.status(404).json({
            mensaje: "Usuario no encontrado"
        });
    }

    res.status(200).json({
        mensaje: `Yo soy ${nombre}`
    });
});