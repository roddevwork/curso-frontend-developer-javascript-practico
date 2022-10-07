// .Variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('#menuHamIcon');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
// .Eventos
menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);
// .Funciones
function toogleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}
function toogleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}
function toogleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  aside.classList.toggle('inactive');
}
