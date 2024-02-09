document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = [...carousel.children];
    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

    // Ajuste del número total de imágenes
    const totalImages = 38;
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const cardPerView = totalImages;

    // Insertar copias de las últimas tarjetas al principio del carrusel para el desplazamiento infinito
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    // Insertar copias de las primeras tarjetas al final del carrusel para el desplazamiento infinito
    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Desplazamiento automático del carrusel cada 2 segundos
    const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return;
        // Autoplay del carrusel cada 2 segundos (2000 milisegundos)
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2000);
    }
    autoPlay();

    // Event listeners para las flechas del carrusel
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });
    

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const popup = document.createElement('div');
            popup.classList.add('popup');
            const imgSrc = card.getAttribute('data-popup-image'); // Obtener la ruta de la imagen para la ventana emergente
            const name = card.querySelector('h2').innerText;
            const role = card.querySelector('span').innerText;

            // Aquí se utiliza la ruta relativa para la imagen
            popup.innerHTML = `
                <div class="popup-content">
                    <img src="${imgSrc}" alt="${name}">
                    <h2>${name}</h2>
                    <p>${role}</p>
                </div>
            `;
            
            document.body.appendChild(popup);

            popup.addEventListener('click', function() {
                popup.remove();
            });
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }

    const infiniteScroll = () => {
        if(carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
        else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        clearTimeout(timeoutId);
        if(!wrapper.matches(":hover")) autoPlay();
    }

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
});
