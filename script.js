window.onload = function(){
    var nav = document.getElementById('nav_wrapper');
    var hamburger = document.getElementById('js_hamburger');
    var blackBg = document.getElementById('js_black_bg');
    var hamburgerMenu = document.getElementById('js_hamburger_menu');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });

    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
    });

    hamburgerMenu.addEventListener('click', function () {
        nav.classList.remove('open');
    });
}