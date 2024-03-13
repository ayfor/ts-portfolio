const multiColScreenSize = 1300;

// Get the side-menu-button element
const sideMenuButton = document.getElementById('side-menu-button');

// Get the mobile-menu element
const mobileMenu = document.getElementById('mobile-menu');

const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

var isOpen = false;

const toggleMobileMenu = () => {

  // Toggle the visibility of the mobile-menu element
  mobileMenu.classList.toggle('hidden');

  // Swap the icon in the side-menu-button
  if (mobileMenu.classList.contains('hidden')) {
    // If the mobile-menu is hidden, show the hamburger icon
    hamburgerIcon.classList.remove('hidden');
    hamburgerIcon.classList.add('block');

    closeIcon.classList.add('hidden');
    closeIcon.classList.remove('block');
  } else {
    // If the mobile-menu is shown, show the close icon
    hamburgerIcon.classList.add('hidden');
    hamburgerIcon.classList.remove('block');

    closeIcon.classList.remove('hidden');
    closeIcon.classList.add('block');
  }

  isOpen = !isOpen;
}

// Event Listeners

sideMenuButton.addEventListener('click', toggleMobileMenu);

window.addEventListener('resize', () => {
  if (window.innerWidth > multiColScreenSize && isOpen) toggleMobileMenu();
});