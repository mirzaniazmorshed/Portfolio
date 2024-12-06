// all element
const mblBtn = document.getElementById('mbl-btn');
const menuToggler = document.getElementById('toggler');
const menu = document.getElementById('menu');

let menuToggle = false;

//toggling menu
mblBtn.addEventListener('click', () => {
    console.log("Hello")
    menuToggle = !menuToggle
    if (menuToggle) {
        menuToggler.classList.add("fa-times");
        menuToggler.classList.remove("fa-bars");
        menu.classList.add("show");
    } else {
        menuToggler.classList.remove("fa-times");
        menuToggler.classList.add('fa-bars');
        menu.classList.remove("show");
    }
})