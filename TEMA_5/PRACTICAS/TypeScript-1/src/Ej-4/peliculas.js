"use strict";
var titulo = document.getElementById("titulo");
var anno = document.getElementById("anno");
var genero = document.getElementById("genero");
var agregar2 = document.getElementById("agregar");
var lista2 = document.getElementById("lista");
var peliculasFavs = [
    ["El Padrino", 1972, "Drama"],
    ["El Padrino II", 1974, "Drama"],
    ["El Padrino III", 1990, "Drama"],
];
function mostrarPeliculas() {
    lista2.innerHTML = "";
    peliculasFavs.forEach(function (peli) {
        var li = document.createElement("li");
        li.textContent = "Titulo: ".concat(peli[0], " - A\u00F1o: ").concat(peli[1], " - G\u00E9nero: ").concat(peli[2]);
        lista2.appendChild(li);
    });
}
agregar2.addEventListener("click", function () {
    var peli = [titulo.value, parseInt(anno.value), genero.value];
    peliculasFavs.push(peli);
    titulo.value = "";
    anno.value = "";
    genero.value = "";
    mostrarPeliculas();
});
window.onload = function () {
    mostrarPeliculas();
};
