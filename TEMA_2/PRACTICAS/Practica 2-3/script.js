function añadirTarea() {
  const lista = document.getElementById("lista-tareas");
  const tarea = document.getElementById("tarea").value;

  const nuevaTarea = document.createElement("li");

  //Comprobamos que la tarea no esté vacía
  if (tarea != "") {
    //Añadimos el nombre de la tarea
    nuevaTarea.textContent = tarea;
    //Añadimos la función para poder seleccionar el elemento
    nuevaTarea.setAttribute("onclick", "seleccionar(this)");
    //Se lo añadimos a la lista, al final
    lista.appendChild(nuevaTarea);
  }
}

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
}

function moverArriba() {
  const lista = document.getElementById("lista-tareas");
  const tareasSeleccionadas = document.querySelectorAll(".selected");

  //Movemos las tareas seleccionadas arriba del todo del elemento lista
  for (let i = 0; i < tareasSeleccionadas.length; i++) {
    lista.insertBefore(tareasSeleccionadas[i], lista.firstChild);
  }
}
