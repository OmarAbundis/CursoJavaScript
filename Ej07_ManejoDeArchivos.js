const fs = require('fs'); //incluimos la libreria para flujo de archivo: lectura y escritura

fs.writeFileSync("archivo.txt", "Hola, cómo estan? Este es un ejemplo"); //creamos un archivo bloqueo o sincrono
fs.writeFile("archivo2.txt", "Este es un segundo ejemplo asincrono", function (err) { //creamos un archivo no bloqueo
    if (err) {
        console.log(err);
    } else {
        console.log("Estoy guardando la información");
    }
});

let lecturaArchivo = fs.readFile('archivo2.txt', 'utf8'); //leer un archivo 
console.log(lecturaArchivo)