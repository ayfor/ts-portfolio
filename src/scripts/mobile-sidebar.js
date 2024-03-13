

// Get the side-menu-button element
const sideMenuButton = document.getElementById('side-menu-button');

// Get the mobile-menu element
const mobileMenu = document.getElementById('mobile-menu');

const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

var isOpen = false;

// Add click event listener to the side-menu-button
sideMenuButton.addEventListener('click', () => {

  isOpen = !isOpen;

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
});

document.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    mobileMenu.classList.add('hidden');
  }
});