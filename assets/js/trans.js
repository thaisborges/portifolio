
// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Ajuste o valor conforme necessário
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});
