const registroMiddleware = (req, res, next) => {
    const tiempomilisegundos = Date.now();
    const tiempoUTC = new Date().toISOString();
    //console.log(`Tiempo en milisegundos: ${tiempomilisegundos}, Tiempo UTC: ${tiempoUTC}`);
    console.log(`[${tiempoUTC}:${req.method}-${req.url}-${req.ip}]`);

    res.on("finish", () => {
        const duracion = Date.now() - tiempomilisegundos;
        // Corregido: usando ${} para que las variables muestren sus valores reales
        console.log(`[${tiempoUTC}] Respuesta: ${res.statusCode} - Duración: ${duracion}ms`);
    });

    next();
};

module.exports = registroMiddleware;