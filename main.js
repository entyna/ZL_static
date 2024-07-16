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


function updateNavClass() {
  var navElement = document.getElementById("desktop-nav-ul");

  if (navElement) {
    var navHeight = navElement.offsetHeight;

    if (navHeight <= 130) {
      navElement.classList.remove("flex-column");
      navElement.classList.add("flex-row");
    } else {
      navElement.classList.remove("flex-row");
      navElement.classList.add("flex-column");
    }
  }
}

// Execute the function when the document is fully loaded
document.addEventListener("DOMContentLoaded", updateNavClass);

// Optional: Re-check the height and update the class on window resize
window.addEventListener("resize", updateNavClass);