export class Alumno {
  nombre:string
  edad:number
  titulación:string

  constructor(nombre:string, edad:number, titulación:string) {
    this.nombre = nombre
    this.edad = edad
    this.titulación = titulación
  }

  obtenerInfo():string {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}, Titulación: ${this.titulación}`
  }
}

