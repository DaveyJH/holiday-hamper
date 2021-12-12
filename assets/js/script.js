// -------------------------------------------------------------------- Global State

const toggle = document.getElementById("burger-icon");
const navbar = document.getElementById("menu");
let navbarOpen = false;

// -------------------------------------------------------------------- NavBar Toggle

toggle.addEventListener("click", toggleNavbar);

function toggleNavbar() {
    navbarOpen = !navbarOpen;
    if (navbarOpen) {
        closeNavbar();
    } else {
        openNavbar();
    }
}

function openNavbar() {
    navbar.classList.remove("navbar-toggle");
    toggle.innerHTML = 
    `
    <span class="sr-only">Open the navigation menu</span>
    <i class="fas fa-bars fa-2x tap-target bar-icon"></i>
    `;
}

function closeNavbar() {
    navbar.classList.add("navbar-toggle");
    toggle.innerHTML = 
    `
    <span class="sr-only">Close the navigation menu</span>
    <i class="fas fa-times fa-2x tap-target bar-icon"></i>
    `;
}

// -------------------------------------------------------------------- Copyright

(function copyrightYear() {
    let year = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = year;
})();
