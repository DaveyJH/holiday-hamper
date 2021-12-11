// -------------------------------------------------------------------- Global State

const toggle = document.getElementById("burger-icon");
const navbar = document.getElementById("menu");
const scroll = document.querySelector('.btt-btn');
let open = false;

// -------------------------------------------------------------------- NavBar Toggle

toggle.addEventListener("click", toggleNavbar);

function toggleNavbar() {
    open = !open;
    open ? closeNavBar() : openNavBar();
}

function openNavBar() {
    navbar.classList.remove("navbar-toggle");
    toggle.innerHTML = 
    `
    <span class="sr-only">Open the navigation menu</span>
    <i class="fas fa-bars fa-2x tap-target bar-icon"></i>
    `;
}

function closeNavBar() {
    navbar.classList.add("navbar-toggle");
    toggle.innerHTML = 
    `
    <span class="sr-only">Close the navigation menu</span>
    <i class="fas fa-times fa-2x tap-target bar-icon"></i>
    `;
}

// -------------------------------------------------------------------- Got To Top Button

window.addEventListener('scroll', function () {
    scroll.classList.toggle('active', window.scrollY > 500);
});

// -------------------------------------------------------------------- Copyright

(function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
})();
