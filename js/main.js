$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnFocus: false,
    });
});


document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__burger span').classList.toggle('active');
    document.querySelector('.menu__list').classList.toggle('animate');
    document.querySelector('body').classList.toggle('vertical__hiden');
})




const elements = document.querySelectorAll('*');

for (let i = 0; i < elements.length; i++) {
    const styles = window.getComputedStyle(elements[i]);
    if (styles.marginRight === '.5em') {
        elements[i].style = '';
    }
}
