let menu = document.getElementById('menu');

document.addEventListener('click', (e) => {

    if(e.target.matches(".burger, .burger--wrapper")) {
        menu.classList.toggle("show-menu");
    }
})