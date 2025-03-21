// Se exporta el módulo
const Alumno = require('./Alumno.js');

const a1 = new Alumno(
    "Yael", 
    "Correa", 
    24, 
    "Diseño y Desarrollo Web",
    ["Aplicaciones Híbridas"]
);

//Nombre completo
console.log(a1.Nombre());

//Edad
console.log(`Edad: ${a1.edad}`)

//Carrera
console.log(a1.mostrarCarrera());

//Materias
a1.agregarMateria("Programación 2");
a1.agregarMateria("Internet de las cosas");
a1.mostrarMaterias();

//Edad modificada
a1.modificarEdad(25);
console.log(`Edad actualizada: ${a1.edad}`);