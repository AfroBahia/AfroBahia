let currentIndex = 0;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100 + '%';
    carouselInner.style.transform = 'translateX(' + offset + ')';

    updateIndicators();
}

function changeSlide(offset) {
    showSlide(currentIndex + offset);
}

function updateIndicators() {
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    indicatorsContainer.innerHTML = '';

    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => showSlide(i));
        indicatorsContainer.appendChild(indicator);
    }

    const activeIndicator = document.querySelector('.indicator.active');
    if (activeIndicator) {
        activeIndicator.classList.remove('active');
    }

    const currentIndicator = indicatorsContainer.children[currentIndex];
    if (currentIndicator) {
        currentIndicator.classList.add('active');
    }
}



// Initial setup
showSlide(currentIndex);


document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        // Mostra ou oculta o botão dependendo da posição de rolagem
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        // Rola suavemente para o topo da página
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});


// Exibe ou oculta o botão de volta ao topo dependendo da posição da rolagem
window.onscroll = function() {
    verificarRolagem();
};

function verificarRolagem() {
    var botaoTopo = document.getElementById("botaoTopo");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
}

// Faz a rolagem suave para o topo
function rolarParaTopo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}