import express from "express"; //ESM
import {configDotenv} from "dotenv"
configDotenv()


const app = express();
const puerto = process.env.PORT||3050;

app.get ("/",(req,res)=>{
    res.send("hola ficha 3407180 del SENA ")

})

app.listen( puerto,()=>{
    console.log (`servidor funcionando!! en el puerto ${puerto}`)
})