const burgerBtn = document.querySelector('burger__menu')
const burgerModalMenu = document.querySelector('.modal__burger_menu')
burgerBtn.addEventListener('click', () => {
    burgerModalMenu.classList.toggle('active')
})

window.addEventListener('click', e => {
    if (!burgerModalMenu.contains(e.target) &&
!burgerBtn.contains (e.target)) {
    burgerModalMenu.classList.remove('active')
}
})

// функція показу модального вікна по кліку на кнопку, закриття можально вікна по кліку на кнопку х2, якщо поля інпутів порожні бордери інпутів загоряться червоним і модальне вікно не закриється



const modalTrigger = document.getElementsByClassName("trigger")[0]

const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth)

const bodyElementHTML = document.getElementsByTagName("body")[0]
const modalBackground = document.getElementsByClassName("modalBackground")[0]
const modalClose = document.getElementsByClassName("modalClose")[0]
const modalActive = document.getElementsByClassName("modalActive")[0]
