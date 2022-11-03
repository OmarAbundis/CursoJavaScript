var sensorA = Buffer.alloc(20); // reservar memoria en buffer
var sensorB = Buffer.from("Hola este es un buffer"); //guardar en buffer

console.log("Este es un Buffer vacio");
console.log(sensorA);


console.log("Este es un Buffer con carácteres");
console.log(sensorB);


sensorB[0] = 64; //cada subindice significa un letra del mesaje el 64 representa la @

console.log(sensorB.toString()); //convertir los bytes en cadena