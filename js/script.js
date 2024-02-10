const btnMenu = document.querySelector('.menu-open__btn')// Кнопка меню
const btnCloseMenu = document.querySelector('.menu__close-btn')// Кнопка закривання меню
const menuList = document.querySelector('.header__nav-list')  // Мобільне меню
const menuClose = document.querySelector('.menu-close')//  div для створення фону при відкритому меню 


btnMenu.addEventListener('click', (e) => {
    menuList.classList.add('nav-list-open')
    menuClose.classList.add('is-open')
})

btnCloseMenu.addEventListener('click', (e) => {
    menuList.classList.remove('nav-list-open')
    menuClose.classList.remove('is-open')
})

document.addEventListener('click', (e) => {
    if(e.target === menuClose) {
        menuList.classList.remove('nav-list-open')
        menuClose.classList.remove('is-open')
    }
})