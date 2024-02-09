function mostrarInfo(elemento) {
    elemento.querySelector('.info').style.display = 'block';
}

function ocultarInfo(elemento) {
    elemento.querySelector('.info').style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón por su id
    var botonPlanos = document.getElementById("botonPlanos");

    // Agrega un evento de clic al botón que llama a la función paginaPlanos
    botonPlanos.addEventListener("click", function() {
        paginaPlanos();
    });
});
function paginaPlanos(){
    console.log('Redireccionando a galleryPlanos.html');
    window.location.href = 'galleryPlanos.html';
}

function paginaModelos(){
    console.log('Redireccionando a galleryModelos.html');
    window.location.href = 'galleryModelos.html';
}
