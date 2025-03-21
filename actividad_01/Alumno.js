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

    }
    Nombre(){

    }
    modificarEdad(edadNueva){

    }
    agregarMateria(){

    }
    mostrarMaterias(){

    }
    retornarEdad(){

    }


    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
}

// Se exporta la clase
module.exports = Alumno;