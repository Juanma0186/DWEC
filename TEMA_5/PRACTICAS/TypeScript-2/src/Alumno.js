export class Alumno {
    constructor(nombre, edad, titulación) {
        this.nombre = nombre;
        this.edad = edad;
        this.titulación = titulación;
    }
    obtenerInfo() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Titulación: ${this.titulación}`;
    }
}
