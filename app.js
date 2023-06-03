const menu = document.querySelector('.menu')
const nav = document.getElementById('navbar')
const close = document.querySelector('.close')

menu.addEventListener('click', (e) => {
  nav.classList.add('showmenu')
})

close.addEventListener('click', (e) => {
  nav.classList.remove('showmenu')
})


let mainImg = document.getElementById('mainImg')
let smallImg = document.getElementsByClassName('smallImg')

for (let i = 0; i <= smallImg.length; i++) {
  smallImg[i].onclick = (e) => {
    mainImg.src = smallImg[i].src
  }
}

const btn = document.querySelector('#btn')
const shopping = document.getElementById('shopping')
let currentShoppingCount = 0

btn.addEventListener('click', (e) => {
  currentShoppingCount = currentShoppingCount + 1;
  document.getElementById('demo').innerHTML = currentShoppingCount;
  document.getElementById('demo').style.color = 'white';
})

const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')

option1.addEventListener('click', (e) => {
  if (option1.checked) {

    box1.style.border = '1px solid orange'
  }
})
option2.addEventListener('click', (e) => {
  if (option2.checked) {
  
    box2.style.border = '1px solid orange'
  }
})


