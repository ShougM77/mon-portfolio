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
