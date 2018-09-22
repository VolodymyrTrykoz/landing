'use strict';

document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('.footer__link');

    //Language toggle
    links.forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            links.forEach(function (el) {
                el.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    //slider initialisation
    $('.onze__wrapper').slick({
        infinite: true,
        speed: 500,
        cssEase: 'linear'
    });
});