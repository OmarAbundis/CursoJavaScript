const { info } = require('console');
const fs = require('fs');
fs.writeFileSync('archivo.txt', "Hola, este es un archivo nuevo, creado de manera sincrónica");
fs.writeFile('archivo2.txt', "Hola, este es un archivo nuevo, creado de manera asincrónica", (err) => {
    if (err)
        console.log(err);
    else {
    }
});

let informacion = fs.readFileSync('archivo2.txt', 'utf8');
console.log(informacion);

//fs.unlinkSync('archivo.txt');      Para borrar archivos