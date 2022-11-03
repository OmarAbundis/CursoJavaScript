process.stdin.resume();
process.stdin.setEncoding('ascii');

saludar = (nombre) => {
    console.log('Hola ' + nombre);
}

pedirNombre = (callback) => {
    console.log("Escribe tu nombre: ");
    process.stdin.on('data', (line) => {
        callback(line);
        process.exit();
    });
}
pedirNombre(saludar);

/*
var sensorA = Buffer.alloc(20); // reservar memoria en buffer
var sensorB = Buffer.from("Hola este es un buffer"); //guardar en buffer

console.log("Este es un Buffer vacio");
console.log(sensorA);


console.log("Este es un Buffer con carácteres");
console.log(sensorB);


sensorB[0] = 64; //cada subindice significa un letra del mesaje

console.log(sensorB.toString()); //convertir los bytes en cadena
*/

/*
const fs = require('fs'); //incluimos la libreria para flujo de archivo: lectura y escritura

fs.writeFileSync("archivo.txt", "Hola, como estam este es un ejemplo"); //creamos un archivo bloqueo o sincrono
fs.writeFile("archivo2.txt", "Este es un segundo ejemplo asincrono", function (err) { //creamos un archivo no bloqueo
    if (err) {
        console.log(err);
    } else {
        console.log("Estoy guardando la información");
    }
});

let lecturaArchivo = fs.readFile('archivo2.txt', 'utf8'); //leer un archivo 
console.log(lecturaArchivo)
*/

/*
const fs = require('fs'); //incluimos la libreria para flujo de archivo: lectura y escritura
var evento = require('events');

var ManejadorEmisor = evento.EventEmitter;
var manejador = new ManejadorEmisor();
var variable = null;
var sensor = null;

manejador.on('mensaje1', function(msj) {
    variable = Buffer.from(msj);
});

manejador.on('mensaje2', function(msj) {
    sensor = Buffer.from(msj);
});

manejador.emit('mensaje1', "Esta es una nueva información");
manejador.emit('mensaje2', "23");


fs.writeFileSync("archivo.txt", variable); //creamos un archivo bloqueo o sincrono
fs.writeFile("archivo2.txt", sensor, function(err) { //creamos un archivo no bloqueo
    if (err) {
        console.log(err);
    } else {
        console.log("Estoy guardando la información");
    }
});

let lecturaArchivo = fs.readFileSync('archivo2.txt', 'utf8'); //leer un archivo 
console.log(lecturaArchivo);

*/