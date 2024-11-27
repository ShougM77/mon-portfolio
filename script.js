// Écran de chargement avec fondu
window.onload = function () {
    // Afficher le loader pendant 2 secondes
    setTimeout(function () {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0'; // Fade out du loader
        loader.style.transition = 'opacity 1s ease-out'; // Transition en douceur pour l'opacité

        // Après 1 seconde (le temps de la transition), masquer le loader et afficher le contenu principal
        setTimeout(function () {
            loader.style.display = 'none'; // Masquer le loader
            document.getElementById('main-content').style.display = 'block'; // Afficher le contenu principal
        }, 1000);
    }, 2000); // Le loader est visible pendant 2 secondes avant de commencer à disparaître
};

document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.menu-icon');
    const menu = document.getElementById('menu');
    const menuItems = document.querySelectorAll('#menu li a');

    // Toggle du menu lorsqu'on clique sur le bouton burger
    burgerIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Fermer le menu lorsqu'un élément du menu est cliqué
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menu.classList.remove('active');
        });
    });
});
