import { Alumno } from './Alumno.js';
const agregar = document.getElementById('agregar');
const listaAlumnos = document.getElementById('listaAlumnos');
let alumnos = [];
agregar.addEventListener('click', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const titulacion = document.getElementById('titulacion').value;
    const alumno = new Alumno(nombre, edad, titulacion);
    alumnos.push(alumno);
    mostrarAlumnos();
});
function mostrarAlumnos() {
    listaAlumnos.innerHTML = '';
    alumnos.forEach(alumno => {
        const li = document.createElement('li');
        li.textContent = alumno.obtenerInfo();
        listaAlumnos.appendChild(li);
    });
}
window.onload = () => {
    mostrarAlumnos();
};
