var buffer1 = Buffer.alloc(20);
var buffer2 = Buffer.from('Hola este es un buffer');

console.log('Este es un Buffer vacio');
console.log(buffer1);
console.log('Este es el buffer creado con la cadena de caracteres');
console.log(buffer2);

console.log(buffer2[0]);

buffer2[0] = 23;
buffer2[1] = 45;
buffer2[2] = 10;
buffer2[3] = 80;

console.log(buffer2.toString());