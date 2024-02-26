const btnMenu = document.querySelector('.mobile__menu-btn')// Кнопка меню
// const btnCloseMenu = document.querySelector('.menu__close-btn')// Кнопка закривання меню
// const menuList = document.querySelector('.header__nav-list')  // Мобільне меню
// const menuClose = document.querySelector('.menu-close')//  div для створення фону при відкритому меню 

const mobileMenuList = document.querySelector('.mobile__menu-list')





btnMenu.addEventListener('click', (e) => {
    btnMenu.classList.toggle('active')
    mobileMenuList.classList.toggle('active')
})

// btnCloseMenu.addEventListener('click', (e) => {
//     menuList.classList.remove('nav-list-open')
//     menuClose.classList.remove('is-open')
// })

// document.addEventListener('click', (e) => {
//     if(e.target === menuClose) {
//         menuList.classList.remove('nav-list-open')
//         menuClose.classList.remove('is-open')
//     }
// })

