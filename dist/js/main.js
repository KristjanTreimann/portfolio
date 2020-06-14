// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item'); // use querySelectorAll to select multiple elements

// Set Inital State Of Menu
let showMenu = false; // Use let to reassing value

// Use eventlistener to use click
menuBtn.addEventListener('click', toggleMenu); // Once clicked function toggleMenu fires off

function toggleMenu() {
  console.log('test');
  if (!showMenu) {
    // first check the state of shoe menu. If the menu(overlay with nav items) is not shown
    // When we click hamburger we want overlay menu to be shown, so we add 'show' classes
    // We also want to add 'close' class to menu button to make it look like a 'X'
    menuBtn.classList.add('close'); // In VanillaJS we can use classList.add to add classes
    menu.classList.add('show');
    menuBranding.classList.add('show');
    menuNav.classList.add('show');
    // Nav links are different, because there is more than one. So we need to loop through each item and add class to each item.
    navItems.forEach((item) => item.classList.add('show')); // forEach takes in a variable that presents each item in array

    // Set Menu state (reset)
    showMenu = true; // Because now it should be open
  } else {
    // If the menu is shown and we click it, we want to remove all these classes.
    // highlight name then cmd + d to select other same name
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuBranding.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show')); // forEach takes in a variable that presents each item in array

    // Set Menu state
    showMenu = false; // Because now it should be closed
  }
}
