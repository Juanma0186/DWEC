// Cambiar el icono del titulo de la web

export function cambiarTitulo() {
  const titulo = document.querySelector('#titulo');
  const icono = document.querySelector('#icono-titulo');
  const check = "bi-check-square";
  const square = "bi-square";

  titulo.addEventListener("mouseenter", () => {
    icono.classList.replace(square, check);
  })

  titulo.addEventListener("mouseleave", () => {
    icono.classList.replace(check, square);
  })

}
