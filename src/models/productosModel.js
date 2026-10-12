const listarProductos = async () => {
    const datos = [
        { "id": 1, "nombre": "Laptop de segunda", "precio": 1200000 },
        { "id": 2, "nombre": "Mouse inalámbrico", "precio": 45000 }
    ];
    return datos;
};

module.exports = {
    listarProductos
};