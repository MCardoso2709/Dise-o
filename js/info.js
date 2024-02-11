function mostrarInfo(elemento) {
    elemento.querySelector('.info').style.display = 'block';
}

function ocultarInfo(elemento) {
    elemento.querySelector('.info').style.display = 'none';
}
// tuarchivo.js

document.getElementById('botonPlanos').addEventListener('click', function() {
    // Cambia 'nuevaPagina.html' por la URL de la página a la que deseas redirigir
    window.location.href = 'galleryPlanos.html';
});
document.getElementById('botonModelos').addEventListener('click', function() {
    // Cambia 'nuevaPagina.html' por la URL de la página a la que deseas redirigir
    window.location.href = 'galleryModelos.html';
});

