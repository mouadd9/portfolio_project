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
    menu.style.transform = 'translate(-100vw, 0)';
    isMenuOpen = false;
}

openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

// Close the menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen && window.innerWidth <= 800) { // Assumes 800px is the breakpoint for your hamburger menu
            closeMenu();
        }
    });
});

window.addEventListener('resize', function () {
    // Check if the window is resized to a width greater than your mobile breakpoint
    if (window.innerWidth > 800) {
        // Reset the menu state and style
        menu.style.transition = '';
        menu.style.transform = '';
        isMenuOpen = false;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.getElementById('contactLink');
    const contactFooter = document.getElementById('contactFooter');
  
    contactLink.addEventListener('click', function(event) {
      event.preventDefault();
      contactFooter.classList.add('footer-active'); // Add the active class to make the footer pop up
    });
  
    // Event listener to hide the footer when clicking outside of it
    document.addEventListener('click', function(event) {
      var isClickInsideFooter = contactFooter.contains(event.target);
      var isClickOnContactLink = contactLink.contains(event.target);
  
      if (!isClickInsideFooter && !isClickOnContactLink) {
        contactFooter.classList.remove('footer-active'); // Hide the footer
      }
    });
  });
document.addEventListener('DOMContentLoaded', function() {
  const modeToggleButton = document.getElementById('toggleMode');
  const bodyElement = document.body;

  modeToggleButton.addEventListener('click', function() {
    bodyElement.classList.toggle('night-mode');
    if (bodyElement.classList.contains('night-mode')) {
      modeToggleButton.textContent = 'Day Mode';
    } else {
      modeToggleButton.textContent = 'Night Mode';
    }
  });
});
  

