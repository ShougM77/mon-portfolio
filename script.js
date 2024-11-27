window.onload = function () {
    setTimeout(function () {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 1s ease-out';

        setTimeout(function () {
            loader.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 1000);
    }, 2000);
};
// Script pour basculer l'affichage du menu
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Ajoute un écouteur d'événements pour le bouton burger
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active'); // Bascule la classe active pour afficher/masquer le menu
});
