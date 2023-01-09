const btn = document.querySelectorAll('.guests-accordion__name')

btn.forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('opened')
  })
})
