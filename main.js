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



// function updateNavClass() {
//   var navElement = document.getElementById("desktop-nav-ul");

//   if (navElement) {
//     var navHeight = navElement.offsetHeight;

//     if (navHeight <= 100){
//       navElement.classList.remove("flex-column");
//       navElement.classList.add("flex-row");
//     } else {
//       navElement.classList.remove("flex-row");
//       navElement.classList.add("flex-column");
//     }
//   }
// }

// // Execute the function when the window is fully loaded
// window.onload = updateNavClass;

// // Optional: Re-check the height and update the class on window resize
// window.addEventListener("resize", updateNavClass);





document.addEventListener('DOMContentLoaded', function() {
  const logo = document.getElementById('mobile-header-logo');
  const trigger = document.getElementById('logo-text');

  // Create an IntersectionObserver instance
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // When the trigger is in the viewport
              logo.classList.add('logo-hidden');
              logo.classList.remove('logo-shown');
          } else {
              // When the trigger is out of the viewport
              logo.classList.remove('logo-hidden');
              logo.classList.add('logo-shown');
          }
      });
  });

  // Observe the trigger element
  observer.observe(trigger);
});
