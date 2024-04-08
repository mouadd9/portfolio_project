const openButton = document.getElementById('idOpen');
const closeButton = document.getElementById('idClose');
const menu = document.querySelector('.menu');
let b = 0;
openButton.addEventListener('click',function (){
    menu.style.transition = 'transform 0.5s ease-in-out'
    menu.style.transform = 'translate(0, 0)';
    b = 1;
});
closeButton.addEventListener('click',function (){
    menu.style.transition = 'transform 0.5s ease-in-out';
    menu.style.transform = 'translate(100vw, 0)';
    b=1;
});
window.addEventListener('resize', function () {
    if (window.innerWidth > 800 && b === 1) {
        menu.removeAttribute('style'); 
    }
});