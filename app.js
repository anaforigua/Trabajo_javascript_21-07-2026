//import express from "express"; //ESM
//import {configDotenv} from "dotenv"
//configDotenv()
//import "dotenv/config"
const express = require("express")
const app = express();
const puerto = process.env.PORT||3050;
const sistemadearchivos = require("fs")
const ruta = require("path")
const rutaArchivoJson= ruta.join(__dirname,"aprendices.json")
app.use(express.json());
//app.get ("/",(req,res)=>{
//res.send("hola ficha 3407180 del SENA ")
//});


const listaAprendices = { "id": 20, "nombre": "anita", "correo": "ana21@gmail.com", "imagen":"url"};

//LISTAR APRENDICES
app.get("/api/aprendices/listar", (req, res) => {

    sistemadearchivos.readFile(rutaArchivoJson, "utf-8", (error, datos) => {
        if (error) {
            return res.status(500).json({
                Error: "Error al leer el archivo JSON"
            });
        }
        const listaAprendices = JSON.parse(datos);
        res.json(listaAprendices);
    });

});

app.post("/api/aprendices/crear", (req, res) => {

    const datosaprendiz = req.body;

    sistemadearchivos.readFile(rutaArchivoJson, "utf-8", (error, datos) => {

        if (error) {
            return res.status(500).json({
                Error: "No se puede leer el archivo JSON"
            });
        }


       console.log(rutaArchivoJson, datos);
        const listaAprendices = JSON.parse(datos);

        listaAprendices.push(datosaprendiz);

        sistemadearchivos.writeFile(
            rutaArchivoJson,
            JSON.stringify(listaAprendices, null, 2),
            (error) => {

                if (error) {
                    return res.status(500).json({
                        Error: "No se puede registrar el aprendiz"
                    });
                }

                res.status(201).json(datosaprendiz);
            }
        );

    });

});

app.put("/api/aprendices/actualizar", (req, res) => {

    const datosaprendiz = req.body;

    sistemadearchivos.readFile(rutaArchivoJson, "utf-8", (error, datos) => {

        if (error) {
            return res.status(500).json({
                Error: "No se puede leer el archivo JSON"
            });
        }

        const listaAprendices = JSON.parse(datos);

        const indice = listaAprendices.findIndex(
            aprendiz => aprendiz.id === datosaprendiz.id
        );

        if (indice === -1) {
            return res.status(404).json({
                Error: "Aprendiz no encontrado"
            });
        }

        listaAprendices[indice] = datosaprendiz;

        sistemadearchivos.writeFile(
            rutaArchivoJson,
            JSON.stringify(listaAprendices, null, 2),
            (error) => {

                if (error) {
                    return res.status(500).json({
                        Error: "No se puede actualizar el aprendiz"
                    });
                }

                res.status(200).json({
                    mensaje: "Aprendiz actualizado correctamente",
                    aprendiz: datosaprendiz
                });
            }
        );
    });
});



app.delete("/api/aprendices/eliminar", (req, res) => {

    const id = req.body.id;

    sistemadearchivos.readFile(rutaArchivoJson, "utf-8", (error, datos) => {

        if (error) {
            return res.status(500).json({
                Error: "No se puede leer el archivo JSON"
            });
        }

        const listaAprendices = JSON.parse(datos);

        const indice = listaAprendices.findIndex(
            aprendiz => aprendiz.id === id
        );

        if (indice === -1) {
            return res.status(404).json({
                Error: "Aprendiz no encontrado"
            });
        }

        const aprendizEliminado = listaAprendices.splice(indice, 1)[0];

        sistemadearchivos.writeFile(
            rutaArchivoJson,
            JSON.stringify(listaAprendices, null, 2),
            (error) => {

                if (error) {
                    return res.status(500).json({
                        Error: "No se puede eliminar el aprendiz"
                    });
                }

                res.status(200).json({
                    mensaje: `Aprendiz ${aprendizEliminado.nombre} eliminado correctamente`,
                    aprendiz: aprendizEliminado
                });
            }
        );
    });
});

//Vamos a crear un end point
app.listen( puerto,()=>{
    console.log (`SERVIDOR https//localhost:${puerto} 
        https//127.0.0.1:${puerto}`)
});