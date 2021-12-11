// -------------------------------------------------------------------- Global State
const toggle = document.getElementById("burger-icon");
const navbar = document.getElementById("menu");
const stars = document.getElementsByClassName("christmas-star");
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
    const scroll = document.querySelector('.btt-btn');
    scroll.classList.toggle('active', window.scrollY > 500);
});

// -------------------------------------------------------------------- Christmas Stars

function getRandomElement(array) {
    let indexer = Math.floor(Math.random() * array.length);
    return array[indexer];
}

function randomPosition(element) {
    element.style.opacity = 1;
    element.style.top = `${Math.random() * 90 + 10}vh`;
    element.style.left = `${Math.random() * 90}vw`;
}

(function randomStars() {
    setInterval(() => {
        const randomStar = getRandomElement(stars);
        randomPosition(randomStar);
    }, 5000)
})();

// -------------------------------------------------------------------- Copyright

(function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
})();
