// -------------------------------------------------------------------- Global State

const toggle = document.getElementById("burger-icon");
const menuIcon = toggle.children[1];
const navbar = document.getElementById("menu");
let navbarOpen = false;

// -------------------------------------------------------------------- NavBar Toggle

toggle.addEventListener("click", toggleNavbar);

function toggleNavbar(event) {
    navbarOpen = !navbarOpen;
    if (navbarOpen) {
        openNavbar();
    } else {
        closeNavbar();
    }
}

function closeNavbar() {
    navbar.classList.remove("navbar-toggle");
    // closeIcon.classList.toggle("hide");
    menuIcon.classList.toggle("fa-times");
    menuIcon.classList.toggle("fa-bars");
    toggle.children[0].outerHTML = 
    `
    <span class="sr-only">Open the navigation menu</span>
    `;
}

function openNavbar() {
    navbar.classList.add("navbar-toggle");
    menuIcon.classList.toggle("fa-times");
    menuIcon.classList.toggle("fa-bars");
    toggle.children[0].outerHTML = 
    `
    <span class="sr-only">Close the navigation menu</span>
    `;
}

function outsideClick(event) {
    if (navbarOpen && 
        (event.target.id !== "menu" && !toggle.contains(event.target))) 
        {
            navbarOpen = false;
            closeNavbar();
    }
}

document.addEventListener('click', outsideClick);

// -------------------------------------------------------------------- Copyright

(function copyrightYear() {
    let year = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = year;
})();
