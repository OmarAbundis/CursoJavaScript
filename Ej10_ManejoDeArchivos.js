// Ejecución asíncrona

const fs = require('fs');

var sensor = "Buenos dias la tempetarura es de 40 C";

fs.writeFile("archivo.txt", sensor, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("guardando a información...");
    }
});

fs.readFile('archivo.txt', 'utf-8', (err, dato) => {
    if (err) {
        console.log("error" + err);
    } else {
        console.log(dato);
    }
});