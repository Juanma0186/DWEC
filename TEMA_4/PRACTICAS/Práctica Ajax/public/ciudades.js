const lista = document.getElementById("lista");
const input = document.getElementById("ciudadInput");
const xhr = new XMLHttpRequest();

function mostrarSug(value) {
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const ciudades = JSON.parse(this.responseText);
      lista.innerHTML = "";
      ciudades.forEach((ciudad) => {
        if (ciudad.nombre.toLowerCase().startsWith(value.toLowerCase())) {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.setAttribute("target", "_blank");
          a.href = ciudad.web;
          a.innerHTML = ciudad.nombre;
          li.appendChild(a);
          lista.appendChild(li);
        }
      });
    } else {
      lista.innerHTML = "";
    }
  };
  xhr.open("GET", "/ciudades", true);
  xhr.send();
}

function getData() {
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const ciudades = JSON.parse(this.responseText);
      ciudades.forEach((ciudad) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("target", "_blank");
        a.href = ciudad.web;
        a.innerHTML = ciudad.nombre;
        li.appendChild(a);
        lista.appendChild(li);
      });
    }
  };
  xhr.open("GET", "/ciudades", true);
  xhr.send();
}

const anadirCiudad = document.getElementById("anadirCiudad");
anadirCiudad.addEventListener("click", addCity);

function addCity() {
  const newCiudad = document.getElementById("newCiudad").value;
  const newWeb = document.getElementById("newWeb").value;
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const ciudades = JSON.parse(this.responseText);
    }
  };
  xhr.open("POST", "/", true);
  xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify({ nombre: newCiudad, web: newWeb }));
}

window.onload = getData;

// xhr.open("POST", "/ciudades", true);
// xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
// xhr.send(JSON.stringify({ dosLetras: dosLetras }));
