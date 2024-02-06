"use strict";
var nombre = document.getElementById('nombre');
var edad = document.getElementById('edad');
var submit = document.getElementById('submit');
var mensaje = document.getElementById('mensaje');
submit.addEventListener('click', function (e) {
    e.preventDefault();
    mensaje.textContent = "Hola ".concat(nombre.value, ", tu edad es ").concat(edad.value);
});
