const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width > 40em)');
const navMenu = document.querySelector('.nav__menu');
const main = document.querySelector('main');
const body = document.querySelector('body');

function openMobileMenu(){
  btnOpen.setAttribute('aria-expanded', 'true');
  navMenu.removeAttribute('inert');
  navMenu.removeAttribute('style');
  main.setAttribute('inert', '');
  bodyScrollLockUpgrade.disableBodyScroll(body);
  btnClose.focus();
}

function closeMobileMenu(){
  btnOpen.setAttribute('aria-expanded', 'false');
  main.removeAttribute('inert');
  bodyScrollLockUpgrade.enableBodyScroll(body);
  btnOpen.focus();

  setTimeout(() => {
    navMenu.style.transition = 'none';
  }, 500);
}

function setupMobileNav(e) {
  if (e.matches) {
    // is desktop/tablet
    console.log('is desktop');
    closeMobileMenu();
    navMenu.setAttribute('inert', '');
    navMenu.style.transition = 'none';
  } else {
    // is mobile
    console.log('is mobile');
    navMenu.removeAttribute('inert');
  }
}

setupMobileNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
  setupMobileNav(e);
});