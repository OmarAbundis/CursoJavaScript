const encipta = require('bcrypt');

var cadena = "Panchito Lopez";
var salt = 10;
var hash = encipta.hashSync(cadena, salt);
console.log(hash);

//validar cual de las dos coincide con el cifrado anterior

var hash2 = encipta.hashSync("Panchito Lopez", salt);
console.log(hash2);

if (hash == hash2) {
    console.log("las contraseñas coinciden");
} else {
    console.log("las contraseñas NO coinciden");
}



/*
const encipta = require('bcrypt');

var cadena = "Panchito Lopez";
var salt = 10;
var hash = encipta.hashSync(cadena, salt);
console.log(cadena + "Cifrada en método Hash es: " + hash);
*/