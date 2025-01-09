// Loader
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

// Menu Burger
document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.menu-icon');
    const menu = document.getElementById('menu');
    burgerIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

// Flip Projects
const projets = document.querySelectorAll('.projet');
projets.forEach((projet) => {
    projet.addEventListener('click', () => {
        const projectInner = projet.querySelector('.project-inner');
        projectInner.classList.toggle('is-flipped');
    });
});

// Background Animation
function setupCanvas() {
    const canvas = document.getElementById('background');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const lines = [];
    for (let i = 0; i < 100; i++) {
        lines.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            angle: Math.random() * Math.PI * 2,
            length: Math.random() * 50 + 50,
            speed: Math.random() * 0.5 + 0.5,
        });
    }

    function drawLines() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'white';
        lines.forEach((line) => {
            line.x += Math.cos(line.angle) * line.speed;
            line.y += Math.sin(line.angle) * line.speed;
            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(line.x + Math.cos(line.angle) * line.length, line.y + Math.sin(line.angle) * line.length);
            ctx.stroke();
        });
        requestAnimationFrame(drawLines);
    }
    drawLines();
}
setupCanvas();
