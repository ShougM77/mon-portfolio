// Une fois que la page est complètement chargée, on affiche le contenu principal
window.onload = function() {
    // Cache l'écran de chargement après 2 secondes (tu peux ajuster ce délai)
    setTimeout(function() {
        // Applique une transition d'opacité au loader pour le rendre invisible
        document.getElementById('loader').style.opacity = '0';
        document.getElementById('loader').style.transition = 'opacity 1s ease-out';

        // Affiche le contenu principal après un petit délai pour la transition
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';  // Masque le logo
            document.getElementById('main-content').style.display = 'block';  // Affiche le contenu principal
        }, 1000); // Correspond au temps de transition
    }, 2000);  // 2000ms = 2 secondes de délai avant la transition
};
