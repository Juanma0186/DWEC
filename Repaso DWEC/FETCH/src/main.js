const datos = document.querySelector("#datos");
const get = document.querySelector("#get");

function getDitto() {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.json())
    .then((dato) => {
      console.log(dato);
      datos.innerHTML = `
      <h2>${dato.name}</h2>
      <img src="${dato.sprites.front_default}" alt="${dato.name}">
    `;
    });
}

get.addEventListener("click", getDitto);

function crearTarea() {
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ descripcion: "Comprar pan", estado: "todo" }),
  })
    .then((res) => res.json())
    .then((tarea) => {
      console.log(tarea);
    });
}

const post = document.querySelector("#post");

post.addEventListener("click", crearTarea);
