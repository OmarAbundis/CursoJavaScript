const http = require('http'); // Está biblioteca sirve para realizar un webService
// datos para el servidor
const host = 'localhost'; // Nuestro servidor es nuestra propia PC
// puerto de comunicación
const port = 8000; // de 1 a 65535 se recomienda mayor a 1025
// Creación de nuestra función debe tener petición y respuesta

const respuesta = function(req,res) {
    res.setHeader ("Content-Type", "text/html"); // Este es el tipo de información que se enviará al cliente
    res.end("Hola, bienvenido al servicio del Backend");
};

const server = http.createServer(respuesta); // Crea el servidor web con la respuesta
server.listen(port, host, () => {
    console.log("El servidor está corriendo en el puerto " + port); 
});