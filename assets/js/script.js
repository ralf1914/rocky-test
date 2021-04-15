const navMenu = document.querySelector(".nav-menu");
const btnHamb = document.querySelector(".menu-burger");
const btnTimes = document.querySelector(".nav-menu-times");

btnHamb.addEventListener("click", function() {
    navMenu.classList.remove("hide");
    btnHamb.style.display = 'none';
});

btnTimes.addEventListener("click", function() {
    navMenu.classList.add("hide");
    btnHamb.style.display = '';
});