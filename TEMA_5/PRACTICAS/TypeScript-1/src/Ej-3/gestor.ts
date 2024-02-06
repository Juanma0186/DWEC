const tarea = document.getElementById("tarea") as HTMLInputElement

const agregar = document.getElementById("agregar") as HTMLButtonElement

const lista = document.getElementById("lista") as HTMLUListElement

agregar.addEventListener("click", () => {
  const li:HTMLLIElement = document.createElement("li")
  li.textContent = tarea.value
  lista.appendChild(li)
  tarea.value = ""
})

