var express = require('express');
var app = express();
const ruta = require('path');
app.use(express.json());
app.use(express.urlencoded());

app.get('/', function (req, res) {
    res.sendFile(ruta.join(__dirname + '/html/index.html'));
});

// app.post('/ejemplo', function(req, res) {
//     let nombre = req.body.nombre;
//     res.send('dato recibido' + nombre);
// });

app.post('/respuesta', function (req, res) {
    let t = req.body.temperatura;
    let h = req.body.humedad;
    let co2 = req.body.CO2;
    res.send("La temperatura es: " + t + " La humedad es:" + h + " El CO2 es: " + co2);
});

app.listen(9000, function () {
    console.log('Servidor corriendo en el puerto 9000');
});
