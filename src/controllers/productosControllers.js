const { } = require('../models/productosModel.js');

// const listarProductos = async (req, res) => {
//     try {
//         const productos = await listarProductos();
//         return res.status(200).json({
//             ListadoProductos: productos
//         });
//     } catch (error) {
//         return res.status(500).json({
//             error: "Error al listar los productos",
//             detalle: error.message
//         });
//     }
// };
const {listar} = require("../models/productosModel.js");

const listarProductos = async (req, res) => {
    try {
        // Ejecutamos la función que está dentro del objeto 'listar'
       const productos = await listar();
        
        return res.status(200).json(productos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const listarUnProducto = (req,res)=> {res.send({mensaje:"Ruta de listado de un producto"})}

const crearProductos = (req,res)=> {res.send({mensaje:"Ruta de crear productos"})}

const actualizarProductos = (req,res)=> {res.send({mensaje:"Ruta de actualizar productos"})}

const eliminarProductos = (req,res)=> {res.send({mensaje:"Ruta de eliminar productos"})}


module.exports = {
    listarProductos,
    listarUnProducto,
    crearProductos, 
    actualizarProductos, 
    eliminarProductos
    
};