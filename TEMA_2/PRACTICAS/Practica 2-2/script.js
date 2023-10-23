function cargarImagenes(nImagenes) {
  const container = document.getElementById("container");

  for (let i = 0; i < nImagenes; i++) {
    const imageContainer = document.createElement("div");
    imageContainer.className = "imagen";
    const img = document.createElement("img");
    img.src = `https://picsum.photos/1280/720?random=${i}`;
    img.alt = `Imagen ${i}`;
    img.addEventListener("click", () => openImage(img.src, img.alt));
    imageContainer.appendChild(img);
    container.appendChild(imageContainer);
  }
}

function openImage(src, alt) {
  const imgFull = document.querySelector(".img-full");
  const imgScreen = imgFull.querySelector(".img-screen");
  const imgElement = imgScreen.querySelector("img");
  imgElement.src = src;
  imgElement.alt = alt;
  imgFull.style.display = "block";
}

function closeImg() {
  const imgFull = document.getElementById("full");
  imgFull.style.display = "none";
}

window.onload = function () {
  cargarImagenes(15);
};

function refresh() {
  location.reload();
}
