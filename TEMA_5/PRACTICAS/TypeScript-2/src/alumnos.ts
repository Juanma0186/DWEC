import { Alumno } from './Alumno.js'

const agregar = document.getElementById('agregar') as HTMLButtonElement
const listaAlumnos = document.getElementById('listaAlumnos') as HTMLUListElement
let alumnos:Alumno[] = []

agregar.addEventListener('click', (e) => {
  e.preventDefault()
  const nombre = (document.getElementById('nombre') as HTMLInputElement).value
  const edad = parseInt((document.getElementById('edad') as HTMLInputElement).value)
  const titulacion = (document.getElementById('titulacion') as HTMLInputElement).value

  const alumno = new Alumno(nombre, edad, titulacion)
  alumnos.push(alumno)
  mostrarAlumnos()
})

function mostrarAlumnos():void {
  listaAlumnos.innerHTML = ''
  alumnos.forEach(alumno => {
    const li = document.createElement('li')
    li.textContent = alumno.obtenerInfo()
    listaAlumnos.appendChild(li)
  })
}

window.onload = () => {
  mostrarAlumnos()
}



