"use strict";
var tarea = document.getElementById("tarea");
var agregar = document.getElementById("agregar");
var lista = document.getElementById("lista");
agregar.addEventListener("click", function () {
    var li = document.createElement("li");
    li.textContent = tarea.value;
    lista.appendChild(li);
    tarea.value = "";
});
