require('dotenv').config({ path: '.env.example' });

const express = require("express"); 
const fs = require("fs"); 
const path = require("path"); 
const multer = require("multer");

const app = express();
const puerto = process.env.PORT || 3050;
const rutaArchivoJson = path.join(__dirname, "aprendices.json");

const registroMiddleware = require("./middleware/registromiddleware");
const manejadordeerrores =require ("./middleware/manejadordeerrores")
const autenticacionToken = require("./middleware/autenticacion");
// Middlewares esenciales
app.use(express.json());
app.use(registroMiddleware);
app.use(manejadordeerrores);
app.use(autenticacionToken);


// Asegurar que la carpeta exista antes de usarla
const carpetaImágenes = path.join(__dirname, "misimagenes");
if (!fs.existsSync(carpetaImágenes)) {
    fs.mkdirSync(carpetaImágenes, { recursive: true });
}

const almacenamiento = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, carpetaImágenes);
    },
    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname);
        cb(null, `${Date.now()}${extension}`);
    }
});

const cargar = multer({ storage: almacenamiento });
// Eliminamos la declaración duplicada de 'cargar'



// LISTAR APRENDICES
app.get("/api/aprendices/listar", (req, res) => {
    fs.readFile(rutaArchivoJson, "utf-8", (error, datos) => {
        if (error) {
            return res.status(500).json({
                Error: "Error al leer el archivo JSON"
            });
        }
        const listaAprendices = JSON.parse(datos);
        res.json(listaAprendices);
    });
});


// CREAR APRENDICES
app.post("/api/aprendices/crear", cargar.single("imagen"), (req, res) => {
    const datosaprendiz = req.body;
    
    // Guardamos la ruta con el nombre correcto de la carpeta
    datosaprendiz.imagen = req.file ? `misimagenes/${req.file.filename}` : "Sin archivo";

    fs.readFile(rutaArchivoJson, "utf-8", (error, datos) => {
        if (error) {
            return res.status(500).json({
                Error: "No se puede leer el archivo JSON"
            });
        }

        const listaAprendices = JSON.parse(datos);
        listaAprendices.push(datosaprendiz);

        fs.writeFile(
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

// ACTUALIZAR APRENDICES
app.put("/api/aprendices/actualizar", cargar.single("imagen"), (req, res) => {
    const datosaprendiz = req.body;

    fs.readFile(rutaArchivoJson, "utf-8", (error, datos) => {
        if (error) {
            return res.status(500).json({
                Error: "No se puede leer el archivo JSON"
            });
        }

        const listaAprendices = JSON.parse(datos);
        const indice = listaAprendices.findIndex(
            aprendiz => String(aprendiz.id) === String(datosaprendiz.id)
        );

        if (indice === -1) {
            return res.status(404).json({
                Error: "Aprendiz no encontrado"
            });
        }

        if (req.file) {
            datosaprendiz.imagen = `misimagenes/${req.file.filename}`;
        } else {
            datosaprendiz.imagen = listaAprendices[indice].imagen;
        }

        listaAprendices[indice] = datosaprendiz;

        fs.writeFile(
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

// ELIMINAR APRENDICES
app.delete("/api/aprendices/eliminar", (req, res) => {
    const id = req.body.id;

    fs.readFile(rutaArchivoJson, "utf-8", (error, datos) => {
        if (error) {
            return res.status(500).json({
                Error: "No se puede leer el archivo JSON"
            });
        }

        const listaAprendices = JSON.parse(datos);
        const indice = listaAprendices.findIndex(
            aprendiz => String(aprendiz.id) === String(id)
        );

        if (indice === -1) {
            return res.status(404).json({
                Error: "Aprendiz no encontrado"
            });
        }

        const aprendizEliminado = listaAprendices.splice(indice, 1)[0];

        fs.writeFile(
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

app.get('/', (req, res) => {
    res.json({ mensaje: "¡Bienvenido a mi API!" });
});

app.get("/rutaProtegida", (req, res) => {
    res.send("Has accedido a la ruta protegida");
});
//endpoint de manejo de errores
app.get("/error", (req, res, next) => {
    next(new Error("¡Pamplinas algo salió mal en el servidor!")); // Esto activa automáticamente tu middleware
});

app.listen(puerto, () => {
    console.log(`SERVIDOR http://localhost:${puerto}`);
});