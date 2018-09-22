document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.footer__link');





    //Language toggle
    links.forEach((el) => {
        el.addEventListener('click', function(e){
            e.preventDefault();
            links.forEach((el) => {
                el.classList.remove('active');
            });
            this.classList.add('active');
        });

    });


    //slider initialisation
    $('.onze__wrapper').slick({
        infinite: true,
        speed: 500,
        cssEase: 'linear',
    });
});



