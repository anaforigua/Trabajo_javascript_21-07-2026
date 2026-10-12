const listarUsuarios = async () => {
    const datos = [
        { "nombre": "Jhonny", "cargo": "instructor", "ficha": "3407180" }
    ];
    return datos;
};

module.exports = {
    listarUsuarios
};