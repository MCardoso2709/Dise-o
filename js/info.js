function mostrarInfo(elemento) {
    elemento.querySelector('.info').style.display = 'block';
}

function ocultarInfo(elemento) {
    elemento.querySelector('.info').style.display = 'none';
}
function paginaPlanos(){
    console.log('Redireccionando a galleryPlanos.html');
    window.location.href = 'galleryPlanos.html';
}

function paginaModelos(){
    console.log('Redireccionando a galleryModelos.html');
    window.location.href = 'galleryModelos.html';
}
