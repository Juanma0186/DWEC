function añadirTarea() {
  const lista = document.getElementById("lista-tareas");
  const tarea = document.getElementById("tarea").value;

  const nuevaTarea = document.createElement("li");

  //Comprobamos que la tarea no esté vacía
  if (tarea != "") {
    //Eliminamos el mensaje de que no hay tareas
    document.getElementById("comprobar").innerHTML = "";
    //Añadimos el nombre de la tarea
    nuevaTarea.textContent = tarea;
    //Añadimos la función para poder seleccionar el elemento
    nuevaTarea.setAttribute("onclick", "seleccionar(this)");
    //Se lo añadimos a la lista, al final
    lista.appendChild(nuevaTarea);
    //Limpiamos el input
    document.getElementById("tarea").value = "";
  }
}

//Cogemos el campo de texto
const inputTarea = document.getElementById("tarea");

inputTarea.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // Llama a la función añadirTarea cuando se presiona "Enter"
    añadirTarea();
  }
});

//Función que recibe el parametro del elemento seleccionado, en este caso ("li")
function seleccionar(elemento) {
  if (elemento.classList.contains("selected")) {
    //Si el elemento ya tiene la clase selected, se la quitamos
    elemento.classList.remove("selected");
  } else {
    //Se la añadimos en caso de que no la tenga
    elemento.classList.add("selected");
  }
}

function eliminarTarea() {
  //Obtenemos el array de tareas seleccionadas
  const tareasSeleccionadas = document.querySelectorAll(".selected");

  //Recorremos el array para ir eliminando una a una las tareas seleccionadas
  for (let i = 0; i < tareasSeleccionadas.length; i++) {
    tareasSeleccionadas[i].remove();
  }
  comprobar();
}

function eliminarTodo() {
  const lista = document.getElementById("lista-tareas");
  lista.innerHTML = "";
  comprobar();
}

function moverArriba() {
  const lista = document.getElementById("lista-tareas");
  const tareasSeleccionadas = document.querySelectorAll(".selected");

  // Verifica si hay elementos seleccionados y si el primero no es el primer hijo de la lista
  if (
    tareasSeleccionadas.length > 0 &&
    tareasSeleccionadas[0] !== lista.firstElementChild
  ) {
    // Mueve los elementos seleccionados una posición hacia arriba
    for (let i = 0; i < tareasSeleccionadas.length; i++) {
      lista.insertBefore(
        tareasSeleccionadas[i],
        tareasSeleccionadas[i].previousElementSibling
      );
      tareasSeleccionadas[i].classList.remove("selected");
    }
  }
}

//Función que comprueba si quedan tareas por hacer
function comprobar() {
  const lista = document.getElementById("lista-tareas");
  const comprobar = document.getElementById("comprobar");

  //Si no hay tareas en la lista, se muestra el mensaje
  if (lista.childElementCount == 0) {
    comprobar.innerHTML =
      "Has acabado <span class='todas'>todas</span> las tareas :)";
  }
}

function generarTxt() {
  // Obtén la fecha de hoy en el formato deseado (puedes personalizarlo)
  const fechaHoy = obtenerFechaHoy();
  const lista = document.getElementById("lista-tareas");

  if (lista.childElementCount != 0) {
    // Añadimos la cabecera y tareas
    const contenido = `Tareas - ${fechaHoy}\n\n${obtenerTareasSinHTML()}`;
    console.log(contenido);

    // Crea un elemento de txt
    const txt = document.createElement("a");
    txt.href = "data:text/plain;charset=utf-8," + encodeURIComponent(contenido);
    txt.download = "tareas.txt";

    //Iniciamos la descarga
    txt.click();
  }
}

function obtenerFechaHoy() {
  const fecha = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };

  //Pasamos como parámetro  undefined para que coja el idioma del navegador
  return fecha.toLocaleDateString(undefined, options);
}

function obtenerTareasSinHTML() {
  // Obtenemos la lista de elementos li dentro de #lista-tareas
  const tareas = Array.from(document.querySelectorAll("#lista-tareas li"));

  // Array para almacenar el texto de las tareas
  const tareasTexto = tareas.map(function (tarea) {
    return tarea.textContent; // Texto de cada tarea
  });

  // Combinamos todo en un mismo texto
  return tareasTexto.join("\n");
}

//?LOCALSTORAGE
// Funcion de guardar la lista en LocalStorage
function guardar() {
  const lista = document.getElementById("lista-tareas");
  const tareas = lista.innerHTML;
  localStorage.setItem("tareas", tareas);
}

// Funcion de cargar la lista de LocalStorage
function cargar() {
  const lista = document.getElementById("lista-tareas");
  const tareas = localStorage.getItem("tareas");
  lista.innerHTML = tareas;
}

// Cargamos la lista en caso de que contenga elementos
if (localStorage.getItem("tareas") != null) {
  cargar();
  comprobar();
}
