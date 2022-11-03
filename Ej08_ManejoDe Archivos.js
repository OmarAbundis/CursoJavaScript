//const { info } = require('console');
const fs = require('fs'); //incluimos la libreria para flujo de archivo: lectura y escritura
var evento = require('events');

var ManejadorEmisor = evento.EventEmitter;
var manejador = new ManejadorEmisor();
var variable = null;
var sensor = null;

manejador.on('mensaje1', function (msj) {
    variable = Buffer.from(msj);
});

manejador.on('mensaje2', function (msj) {
    sensor = Buffer.from(msj);
});

manejador.emit('mensaje1', "Esta es una nueva información");
manejador.emit('mensaje2', "23");


fs.writeFileSync("file.txt", variable); //creamos un archivo bloqueo o sincrono
fs.writeFile("file2.txt", sensor, function (err) { //creamos un archivo no bloqueo
    if (err) {
        console.log(err);
    } else {
        console.log("Estoy guardando la información");
    }
});

let lecturaArchivo = fs.readFileSync('file2.txt', 'utf8'); //leer un archivo 
console.log(lecturaArchivo);