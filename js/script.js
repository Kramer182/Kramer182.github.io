const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const choseElem1 = document.querySelector('.menu__link1');
const choseElem2 = document.querySelector('.menu__link2');
const choseElem3 = document.querySelector('.menu__link3');
const choseElem4 = document.querySelector('.menu__link4');
const choseElem5 = document.querySelector('.menu__link5');

hamburger.addEventListener('click', ()=> {
    menu.classList.add('active');
});

closeElem.addEventListener('click', ()=> {
    menu.classList.remove('active');
});

choseElem1.addEventListener('click', ()=> {
    menu.classList.remove('active')
});
choseElem2.addEventListener('click', ()=> {
    menu.classList.remove('active')
});
choseElem3.addEventListener('click', ()=> {
    menu.classList.remove('active')
});
choseElem4.addEventListener('click', ()=> {
    menu.classList.remove('active')
});
choseElem5.addEventListener('click', ()=> {
    menu.classList.remove('active')
});

const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})