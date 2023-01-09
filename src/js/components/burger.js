const burger = document.querySelector('.burger')
const closeBurger = document.querySelector('.burger__close')
const menu = document.querySelector('.top-header__list')

burger.addEventListener('click', () => {
  burger.classList.add('active')
  menu.classList.add('open')
})

closeBurger.addEventListener('click', () => {
  burger.classList.remove('active')
  menu.classList.remove('open')
})
