// .Variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('#menuHamIcon');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
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
// .Pruductos
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Reloj',
  price: 60,
  image:
    'https://images.pexels.com/photos/1198264/pexels-photo-1198264.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
  name: 'Compu',
  price: 620,
  image:
    'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
});
// .Funcion renderizar productos
function renderProdcts(array) {
  for (product of array) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    // product={name, price, image} -> product.image
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    // product={name, price, image} -> product.image
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}
renderProdcts(productList);
