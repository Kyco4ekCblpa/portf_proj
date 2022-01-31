const
    hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menuClose = document.querySelector('.menu__close'),
    menuOverlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});


// scales

const
    counters = document.querySelectorAll('.scales__item-counter'),
    scales = document.querySelectorAll('.scales__item-progress-front');

counters.forEach((item, i) => {
    scales[i].style = `width:${item.innerHTML}`;
});
