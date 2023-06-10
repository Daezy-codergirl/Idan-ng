const menu = document.querySelector('.menu')
const nav = document.getElementById('navbar')
const close = document.querySelector('.close')

menu.addEventListener('click', (e) => {
  nav.classList.add('showmenu')
})

close.addEventListener('click', (e) => {
  nav.classList.remove('showmenu')
})




