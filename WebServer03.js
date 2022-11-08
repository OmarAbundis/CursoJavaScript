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
    res.send("La temperatura: " + req.body.temperatura);
    console.log("Información enviada");
});

app.listen(9000, function () {
    console.log('Servidor corriendo en el puerto 9000');
});



/*
const services = require("express");
var webservices = services();
webservices.use(services.json());   // Se recibe del cliente datos en formato json
webservices.use(services.urlencoded()); // codificado de URL
const ruta = require("path");

webservices.post('/peticion', (req,res) => {                 // se cambia get por post y aumenta la seguridad
    let temperatura = req.body.temperatura;
    //res.send("La temperatura recibida fue: " + temperatura);
    res.sendFile(ruta.join(__dirname + "/html/index.html"));
});

webservices.listen(9090, () => {
    console.log ("Iniciando un nuevo servicio...")
});*/