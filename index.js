document.addEventListener("DOMContentLoaded", function () {
    const texto = document.getElementById('bienvenido-texto');
    const textoContent = texto.innerHTML;
    texto.innerHTML = '';

    let i = 0;
    function typeWriter() {
        if (i < textoContent.length) {
            // Si encontramos un <br>, lo añadimos y no incrementamos el índice
            if (textoContent.charAt(i) === '<' && textoContent.charAt(i + 1) === 'b' && textoContent.charAt(i + 2) === 'r' && textoContent.charAt(i + 3) === '>') {
                texto.innerHTML += '<br>';
                i += 4; // Saltamos el <br>
            } else {
                texto.innerHTML += textoContent.charAt(i);
                i++;
            }
            setTimeout(typeWriter, 100); // Ajusta la velocidad aquí
        }
    }

    typeWriter();
});

let cards = document.querySelectorAll('.card');
let currentIndex = 0; // El índice de la tarjeta en foco

function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.remove('focus');
        if (index === currentIndex) {
            card.classList.add('focus');
        }
    });
}

function prev() {
    currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
    updateCarousel();
}

function next() {
    currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}

document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function (question) {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const isVisible = answer.style.display === 'block';

            // Hide all other answers
            document.querySelectorAll('.faq-answer').forEach(function (ans) {
                ans.style.display = 'none';
            });

            // Toggle current answer
            if (!isVisible) {
                answer.style.display = 'block';
            }
        });
    });
});


// Mostrar la flecha cuando se hace scroll hacia abajo
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Redirigir a la parte superior cuando se hace clic en la flecha
document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});

// Usamos Intersection Observer para detectar cuando la sección entra en el viewport
document.addEventListener("DOMContentLoaded", () => {
    const seccion = document.querySelector('.segunda-seccion' );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Añadir clase visible cuando entra en el viewport
            }
        });
    });

    observer.observe(seccion);
});

document.addEventListener("DOMContentLoaded", () => {
    const seccion = document.querySelector('.quinta-seccion' );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Añadir clase visible cuando entra en el viewport
            }
        });
    });

    observer.observe(seccion);
});
