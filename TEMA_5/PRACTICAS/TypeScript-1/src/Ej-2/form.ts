const nombre:HTMLInputElement  = document.getElementById('nombre') as HTMLInputElement;


const edad = document.getElementById('edad') as HTMLInputElement;
const submit = document.getElementById('submit') as HTMLButtonElement;
const mensaje = document.getElementById('mensaje') as HTMLParagraphElement;
submit.addEventListener('click', (e) => {
  e.preventDefault();
  mensaje.textContent = `Hola ${nombre.value}, tu edad es ${edad.value}`;
});


