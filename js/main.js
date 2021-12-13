$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnFocus: false,
        // responsive: [{
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });
});


document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__burger span').classList.toggle('active');
    document.querySelector('.menu__list').classList.toggle('animate');
    document.querySelector('body').classList.toggle('vertical__hiden');
})