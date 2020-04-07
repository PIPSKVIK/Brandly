'use strict';

let btn = document.querySelector('#header-menuToggle')
let menu = document.querySelector('.burger-menu')


btn.addEventListener('click', function() {
  menu.classList.toggle('active');
})

