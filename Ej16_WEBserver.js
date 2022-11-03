
/*
const express = require('express');
const app = express();
const port = 9000; //65526 - 1 es 2 a la 16 bits = 65535

app.get('/', (req, res) => {
    res.send("Hola este es un servicio en la nube local");
});

app.listen(port, () => {
    console.log('El servidor web ya esta listo por el puerto ' + port);
});
*/


const express = require('express');
const app = express();
const port = 9000; //NO usar puertos del 1 al 1025 y el máximo es 2¹6 -1 bits.
app.get('/', (req, res) => {
    res.send("Hola, este es un servicio en la nube local");
});

app.listen(port, () => {
    console.log('El servidos web ya está listo por el puerto: ' + port);
});
