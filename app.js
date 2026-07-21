//import express from "express"
const express = require("express")
const app = express();
const puerto = process.env.PORT||3000;

app.get ("/",(req,res)=>{
    res.send("hola ficha 3407180")

})

app.listen( puerto,()=>{
    console.log (`servidor funcionando!! en el puerto ${puerto}`)
})