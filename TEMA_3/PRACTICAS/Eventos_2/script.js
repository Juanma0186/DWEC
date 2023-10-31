//? EVENTOS DEL RATON

const buttonClick = document.querySelector("#buttonClick");
const buttonMOver = document.querySelector("#buttonMOver");
const buttonMDU = document.querySelector("#buttonMDU");
const textClick = document.querySelector("#textClick");
const textMOver = document.querySelector("#textMOver");
const textMDU = document.querySelector("#textMDU");
const divOver = document.querySelector(".mouseOver");

buttonClick.addEventListener("click", () => {
  textClick.innerHTML = "Has hecho click";
});

buttonMOver.addEventListener("mouseover", () => {
  textMOver.innerHTML = "Has pasado por encima";
  divOver.style.backgroundColor = "indigo";
});

buttonMOver.addEventListener("mouseout", () => {
  textMOver.innerHTML = "Has salido";
  divOver.style.backgroundColor = "blueviolet";
});

buttonMDU.addEventListener("mousedown", () => {
  textMDU.innerHTML = "Estás presionando el botón";
});
buttonMDU.addEventListener("mouseup", () => {
  textMDU.innerHTML = "Haz clic y mantén presionado";
});

//? EVENTOS DEL TECLADO

//? EVENTOS DEL FORMULARIO

const formulario = document.getElementById("miFormulario");
const miInput = document.getElementById("miInput");

formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita el envío del formulario
  alert("Formulario enviado  correctamente"); // Puedes realizar aquí validaciones antes de enviar el formulario
});

miInput.addEventListener("change", (event) => {
  alert("El valor del campo ha cambiado a: " + event.target.value);
});

//?EVENTOS DE CARGA

const miImagen = document.getElementById("miImagen");

miImagen.addEventListener("load", () => {
  alert("La imagen se ha cargado correctamente.");
});

document.addEventListener("DOMContentLoaded", () => {
  const miParrafo = document.getElementById("miParrafo");
  miParrafo.textContent = "¡El documento se ha cargado completamente!";
});

//?FUNCIONES DE TEMPORIZACIÓN

const divColor = document.getElementById("divColor");
const divColor2 = document.getElementById("divColor2");
const cont = document.getElementById("cont");
var contador = 0;

function cambiarColor() {
  //cambia a color aleatorio
  divColor.style.backgroundColor = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
}

setTimeout(cambiarColor, 3000);

function cambiarColor2() {
  divColor2.style.backgroundColor = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
  contador++;
  cont.textContent = `El color ha cambiado ${contador} veces`;
}

setInterval(cambiarColor2, 1000);

//?EVENTOS DE INTERACCIÓN

const input2 = document.getElementById("miInput2");
const div2 = document.getElementById("miDiv2");
const draggable = document.getElementById("draggable");
const droppable = document.getElementById("droppable");

input2.addEventListener("focus", () => {
  input2.style.backgroundColor = "lightblue";
});
input2.addEventListener("blur", () => {
  input2.style.backgroundColor = "white";
});

div2.addEventListener("contextmenu", (event) => {
  event.preventDefault(); // Evita que aparezca el menú contextual predeterminado
  alert("Has hecho clic derecho en el div.");
});

draggable.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "Este es un elemento arrastrable");
});

droppable.addEventListener("dragover", (event) => {
  event.preventDefault();
});

droppable.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  droppable.innerHTML = data;
});

//?EVENTOS DE NAVEGACIÓN

document.addEventListener("beforeunload", (event) => {
  event.preventDefault(); // Previene que la ventana se cierre inmediatamente
  event.returnValue = "No te vayas :(";
});
