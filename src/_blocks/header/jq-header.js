$(document).ready(function() {
  var $btn = document.querySelector('.header-burger');
  var $nav = document.getElementById('nav');

  $btn.addEventListener('click', function() {
      $nav.classList.toggle('active');
  });
});

