const http = require("http"); //esta libreria sirve para crear un web services
const host = 'localhost'; //definimos el servidor es nuestra propia computadora
const port = 9090; //1-65535

const respuesta = function (req, res) {
    res.setHeader("Content-Type", "text/html"); //el tipo de informacion
    //que se enviará al cliente
    res.end("hola bienvenido al servicio del backend");
}

const server = http.createServer(respuesta); //crea el servidor web con la respuesta
server.listen(port, host, () => {
    console.log("El servidor esta corriento en el puerto" + port);
});
