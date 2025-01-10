const hamburgerButtom = document.querySelector('.menu-button');
const hamburger = document.getElementById('hamburger');
const headerMenu = document.querySelector('.header-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  headerMenu.classList.toggle('active');
});
