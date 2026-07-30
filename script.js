// Select the burger menu icon and the navigation links list
const burger = document.getElementById('burger-menu');
const nav = document.querySelector('.nav-links');

// Add a click event listener to the burger menu
burger.addEventListener('click', () => {
    // Toggle the 'nav-active' class to show or hide the menu on mobile devices
    nav.classList.toggle('nav-active');
});

// Close the mobile menu automatically when a link is clicked
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
        }
    });
});