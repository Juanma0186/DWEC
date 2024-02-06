const titulo = document.getElementById("titulo") as HTMLInputElement

const anno = document.getElementById("anno") as HTMLInputElement

const genero = document.getElementById("genero") as HTMLInputElement

const agregar2 = document.getElementById("agregar") as HTMLButtonElement

const lista2 = document.getElementById("lista") as HTMLUListElement



const peliculasFavs: [string, number, string][] = [
  ["El Padrino", 1972, "Drama"],
  ["El Padrino II", 1974, "Drama"],
  ["El Padrino III", 1990, "Drama"],
]
function mostrarPeliculas() {
  lista2.innerHTML = ""
  peliculasFavs.forEach(peli => {
    const li:HTMLLIElement = document.createElement("li")
    li.textContent = `Titulo: ${peli[0]} - Año: ${peli[1]} - Género: ${peli[2]}`
    lista2.appendChild(li)
  })
}

agregar2.addEventListener("click", () => {
  const peli:[string,number,string] = [titulo.value, parseInt(anno.value), genero.value]
  peliculasFavs.push(peli)
  titulo.value = ""
  anno.value = ""
  genero.value = ""
  mostrarPeliculas()
})

window.onload = () => {
  mostrarPeliculas()
}
