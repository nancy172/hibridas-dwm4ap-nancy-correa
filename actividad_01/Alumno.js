class Alumno {
    nombre = "";
    apellido = "";
    edad = 0;
    carrera = "";
    materias = [];

    constructor(nombre, apellido, edad, carrera, materias)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = materias;
    }
    //Métodos
    mostrarCarrera(){
        return `Carrera: ${this.carrera}`;
    }
    Nombre(){
        return `Nombre: ${this.nombre} ${this.apellido}`;
    }
    modificarEdad(edadNueva){
        this.edad = edadNueva;
    }
    agregarMateria(materia){
        this.materias.push(materia);
    }
    mostrarMaterias(){
        console.table(this.materias);
    }
    retornarEdad(){
        return this.edad;
    }


    // getNombre(){
    //     return this.nombre;
    // }
    // getApellido(){
    //     return this.apellido;
    // }
    // setNombre(nombre){
    //     this.nombre = nombre;
    // }
}

// Se exporta la clase
module.exports = Alumno;