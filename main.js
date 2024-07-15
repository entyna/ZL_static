const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width > 40em)');
const navMenu = document.querySelector('.nav__menu');
const main = document.querySelector('main');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav__link');

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

navLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

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

// LOGO Animation
var animation = bodymovin.loadAnimation({
  container: document.getElementById('logo-anim'), // the DOM element to contain the animation
  renderer: 'svg',
  loop: true, // Set to false because we want to control the playback
  autoplay: true, // Set to false to play on hover
  path: 'assets/ZL_logo_anim.json' // the path to the animation JSON file
});
