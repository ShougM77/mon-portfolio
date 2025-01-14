// Écran de chargement avec fondu
window.onload = function () {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('accueil'); // ID à afficher après le loader

    if (loader && mainContent) {
        // Afficher le loader pendant 2 secondes
        setTimeout(function () {
            loader.style.opacity = '0'; // Fade out du loader
            loader.style.transition = 'opacity 1s ease-out'; // Transition en douceur pour l'opacité

            // Après 1 seconde (le temps de la transition), masquer le loader
            setTimeout(function () {
                loader.style.display = 'none'; // Masquer le loader
                mainContent.style.display = 'block'; // Afficher le contenu principal
            }, 1000);
        }, 2000); // Le loader est visible pendant 2 secondes avant de commencer à disparaître
    } else {
        console.error("L'élément avec l'ID 'loader' ou 'accueil' est introuvable.");
    }
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
// Récupérer tous les projets
const projets = document.querySelectorAll('.projet');

// Ajouter un événement au clic sur chaque projet
projets.forEach((projet) => {
    projet.addEventListener('click', () => {
        // On ajoute ou enlève la classe 'is-flipped' à l'élément 'project-inner' du projet
        const projectInner = projet.querySelector('.project-inner');
        projectInner.classList.toggle('is-flipped');
    });
});

// Initialisation de Particles.js
document.addEventListener('DOMContentLoaded', function () {
    const particlesContainer = document.getElementById('particles-js');

    if (particlesContainer) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    }
                },
                "modes": {
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    } else {
        console.error("Le conteneur 'particles-js' est introuvable.");
    }
});
