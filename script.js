const openButton = document.getElementById('idOpen');
const closeButton = document.getElementById('idClose');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.links .item .link'); // Select all menu links

let isMenuOpen = false;

function openMenu() {
    menu.style.transition = 'transform 0.5s ease-in-out';
    menu.style.transform = 'translate(0, 0)';
    isMenuOpen = true;
}

function closeMenu() {
    menu.style.transition = 'transform 0.5s ease-in-out';
    menu.style.transform = 'translate(100vw, 0)';
    isMenuOpen = false;
}

openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

// Close the menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen && window.innerWidth < 800) { // Checks if the menu is open and the screen width is less than 800px
            closeMenu();
        }
    });
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 800 && isMenuOpen) {
        menu.removeAttribute('style');
        isMenuOpen = false; // Reset the menu state
    }
});
