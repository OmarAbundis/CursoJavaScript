
process.stdin.resume();
process.stdin.setEncoding('ascii');

function saludar(nombre) {
    console.log('Hola ' + nombre);
}

function pedirNombre(callback) {
    console.log("Escribe tu nombre: ");
    process.stdin.on('data', function (line) {
        callback(line);
        process.exit();
    });
}

pedirNombre(saludar); 

/*
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
*/