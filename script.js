// Une fois que la page est complètement chargée
window.onload = function () {
    // Attendre 2 secondes avant de commencer la transition
    setTimeout(function () {
        // Réduire l'opacité de l'écran de chargement
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 1s ease-out';

        // Supprimer l'écran de chargement et afficher le contenu principal
        setTimeout(function () {
            loader.style.display = 'none'; // Cache le loader
            document.getElementById('main-content').style.display = 'block'; // Affiche le contenu principal
        }, 1000); // Correspond au temps de transition (1s)
    }, 2000); // 2 secondes de délai avant la transition
};
