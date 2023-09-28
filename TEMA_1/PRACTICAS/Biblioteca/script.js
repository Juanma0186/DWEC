//Array de libros
const libros = [];

//Funcion para agregar libro
function añadir() {
  //Variables donde almacenaremos los datos de los libros
  const titulo = prompt("Ingresa el titulo");
  const autor = prompt("Ingresa el nombre del autor");
  const fecha = prompt("Ingresa la fecha de publicación");

  //Creamos el objeto libro
  const libro = {
    titulo: titulo,
    autor: autor,
    fecha: fecha,
  };

  //Añadimos el libro al array de libros
  libros.push(libro);

  //Obtenemos la tabla y creamos nueva fila
  const tabla = document.getElementById("tabla");
  const nuevaFila = tabla.insertRow();

  //Creamos cada celda de la tabla
  const cTitulo = nuevaFila.insertCell(0);
  const cAutor = nuevaFila.insertCell(1);
  const cFecha = nuevaFila.insertCell(2);

  //Añdimos los datos a las celdas creadas
  cTitulo.textContent = libro.titulo;
  cAutor.textContent = libro.autor;
  cFecha.textContent = libro.fecha;
}

function eliminar() {
  if (libros.length > 0) {
    const tituloEliminar = prompt("Introduce el título del libro a eliminar");

    // Array donde almacenaremos los índices de los libros a eliminar
    let indices = [];

    // Buscar los libros con el título indicado y almacenar sus índices
    for (let i = 0; i < libros.length; i++) {
      if (libros[i].titulo === tituloEliminar) {
        indices.push(i);
      }
    }

    // Eliminar los libros con los índices almacenados
    if (indices.length > 0) {
      for (let i = indices.length - 1; i >= 0; i--) {
        libros.splice(indices[i], 1);
      }

      const tabla = document.getElementById("tabla");

      // Eliminar las filas de la tabla con los índices almacenados
      for (let i = indices.length - 1; i >= 0; i--) {
        tabla.deleteRow(indices[i] + 1);
      }
    } else {
      alert("No existe ningún libro con ese título");
    }
  } else {
    alert("No has introducido ningún libro");
  }
}

function ordenarPor($tipo) {
  // Ordenar los libros por el tipo indicado (titulo, autor o fecha)

  switch ($tipo) {
    case "titulo": // Ordenar por título
      if (
        document.getElementById("titulo").classList.contains("fa-caret-down")
      ) {
        libros.sort((a, b) => a.titulo.localeCompare(b.titulo));

        document.getElementById("titulo").classList.remove("fa-caret-down");
        document.getElementById("titulo").classList.add("fa-caret-up");
        break;
      } else if (
        document.getElementById("titulo").classList.contains("fa-caret-up")
      ) {
        console.log("hola");
        libros.sort((a, b) => b.titulo.localeCompare(a.titulo));

        document.getElementById("titulo").classList.remove("fa-caret-up");
        document.getElementById("titulo").classList.add("fa-caret-down");
        break;
      }
    case "autor": // Ordenar por autor
      if (
        document.getElementById("autor").classList.contains("fa-caret-down")
      ) {
        libros.sort((a, b) => a.autor.localeCompare(b.autor));

        document.getElementById("autor").classList.remove("fa-caret-down");
        document.getElementById("autor").classList.add("fa-caret-up");
        break;
      } else if (
        document.getElementById("autor").classList.contains("fa-caret-up")
      ) {
        libros.sort((a, b) => b.autor.localeCompare(a.autor));

        document.getElementById("autor").classList.remove("fa-caret-up");
        document.getElementById("autor").classList.add("fa-caret-down");
        break;
      }

    case "fecha": // Ordenar por fecha comparando ints
      if (
        document.getElementById("fecha").classList.contains("fa-caret-down")
      ) {
        libros.sort((a, b) => a.fecha - b.fecha);

        document.getElementById("fecha").classList.remove("fa-caret-down");
        document.getElementById("fecha").classList.add("fa-caret-up");
        break;
      } else if (
        document.getElementById("fecha").classList.contains("fa-caret-up")
      ) {
        libros.sort((a, b) => b.fecha - a.fecha);

        document.getElementById("fecha").classList.remove("fa-caret-up");
        document.getElementById("fecha").classList.add("fa-caret-down");
        break;
      }
  }

  // Obtener la tabla y su cuerpo
  const tabla = document.getElementById("tabla");
  const tbody = tabla.getElementsByTagName("tbody")[0];

  // Eliminar todas las filas existentes de la tabla menos la primera
  while (tbody.rows.length > 1) {
    tbody.deleteRow(1);
  }

  // Volver a crear filas con los libros ordenados
  libros.forEach((libro) => {
    const nuevaFila = tbody.insertRow();
    const cTitulo = nuevaFila.insertCell(0);
    const cAutor = nuevaFila.insertCell(1);
    const cFecha = nuevaFila.insertCell(2);

    cTitulo.textContent = libro.titulo;
    cAutor.textContent = libro.autor;
    cFecha.textContent = libro.fecha;
  });
}
