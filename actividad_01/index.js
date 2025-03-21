// Se exporta el módulo
const { Alumno } = require('./Alumno.js');

const a1 = new Alumno();
a1.setNombre('Yael');
let nombre = a1.getNombre();
console.log(`Hola ${nombre}`);