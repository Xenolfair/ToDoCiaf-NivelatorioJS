const userLocal = localStorage.getItem('loggedInUser');

const h2Username = document.getElementById('Header_Title-Username2');

h2Username.textContent = userLocal || 'Usuario';
h2Username.style.color = '#6e91fc';
function guardarEnlace() {
    const enlaceImagen = document.getElementById('enlaceImagen').value;
    
    document.getElementById('enlaceImagen').value = '';
    
    let imagenesGuardadas = JSON.parse(localStorage.getItem('imagenes')) || [];
    const contenedorImagenes = document.getElementById('imagenesGuardadas');
    contenedorImagenes.innerHTML = '';

    imagenesGuardadas = [enlaceImagen];
    localStorage.setItem('imagenes', JSON.stringify(imagenesGuardadas));
    mostrarImagenesGuardadas();
}

function mostrarImagenesGuardadas() {
  const contenedorImagenes = document.getElementById('imagenesGuardadas');
  const imagenesGuardadas = JSON.parse(localStorage.getItem('imagenes')) || [];

  contenedorImagenes.innerHTML = '';

  if (imagenesGuardadas.length > 0) {
      const imagen = document.createElement('img');
      imagen.src = imagenesGuardadas[imagenesGuardadas.length - 1];
      contenedorImagenes.appendChild(imagen);
  } else {
      const imagenDefecto = document.createElement('img');
      imagenDefecto.src = 'https://jobsaca.com.cy/wp-content/uploads/2015/05/icon-user-default.png';
      imagenDefecto.alt = 'Enlace por defecto';
      contenedorImagenes.appendChild(imagenDefecto);
  }
}

mostrarImagenesGuardadas();

function mostrarImagenesGuardadas2() {
    const contenedorImagenes = document.getElementById('imgUserP');
    const imagenesGuardadas = JSON.parse(localStorage.getItem('imagenes')) || [];

    contenedorImagenes.innerHTML = '';

    if (imagenesGuardadas.length > 0) {
        const imagen = document.createElement('img');
        imagen.src = imagenesGuardadas[imagenesGuardadas.length - 1];
        contenedorImagenes.appendChild(imagen);
    } else {
        const imagenDefecto = document.createElement('img');
        imagenDefecto.src = 'https://jobsaca.com.cy/wp-content/uploads/2015/05/icon-user-default.png'; 
        imagenDefecto.alt = 'Enlace por defecto';
        contenedorImagenes.appendChild(imagenDefecto);
    }
}

mostrarImagenesGuardadas2();

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numeroAleatorio = generarNumeroAleatorio(1, 1000);
var numeroAleatorio2 = generarNumeroAleatorio(1, 1000);
var numeroAleatorio3 = generarNumeroAleatorio(1, 1000);

const ph3Amigos = document.getElementById('ph3Amigos');
const ph3Publiciones = document.getElementById('ph3Publiciones');
const ph3Seguidores = document.getElementById('ph3Seguidores');

ph3Amigos.textContent = numeroAleatorio;
ph3Publiciones.textContent = numeroAleatorio2;
ph3Seguidores.textContent = numeroAleatorio3;