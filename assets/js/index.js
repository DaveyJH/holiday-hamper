// ---------------------------------------------------------------- Global State

const stars = [
    `
    <a href="christmas.html" class="christmas-star">
        <span class="sr-only">Christmas</span>
        <div class="star tap-target tooltip">
            <span class="tooltiptext">Christmas</span>
        </div>
    </a>
    `,
    `
    <a href="hanukkah.html" class="christmas-star">
        <span class="sr-only">Hanukkah</span>
        <div class="star tap-target tooltip">
            <span class="tooltiptext">Hanukkah</span>
        </div>
    </a>
    `,
    `
    <a href="diwali.html" class="christmas-star">
        <span class="sr-only">Diwali</span>
        <div class="star tap-target tooltip">
            <span class="tooltiptext">Diwali</span>
        </div>
    </a>
    `,
    `
    <a href="chinese-new-year.html" class="christmas-star">
        <span class="sr-only">Chinese New Year</span>
        <div class="star tap-target tooltip">
            <span class="tooltiptext">Chinese New Year</span>
        </div>
    </a>
    `,
    `
    <a href="new-year.html" class="christmas-star">
        <span class="sr-only">New Year's Eve</span>
        <div class="star tap-target tooltip">
            <span class="tooltiptext">New Year's Eve</span>
        </div>
    </a>
    `,
    `
    <a href="yuletide.html" class="christmas-star">
        <span class="sr-only">Yuletide</span>
        <div class="star tap-target tooltip">
            <span class="tooltiptext">Yuletide</span>
        </div>
    </a>
    `
];
const currentStars = []; // href values of current displayed stars
const starsHTML = document.getElementsByClassName("christmas-star");
const welcomeGrid = document
    .getElementsByClassName("grid-container-welcome")[0];

// ------------------------------------------------------------- Christmas Cards

/**
 * Retrieves a single, random star HTML template literal
 * @param {array} array template literal HTML star templates
 * @returns {str} template literal of random star HTML
 */
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Randomly positions a star within the main welcome section
 * @param {HTMLElement} element star anchor
 */
function randomPosition(element) {
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;
    elemHeight = element.offsetHeight + 20;
    // minimum top position
    headHeight = document.getElementsByClassName("header")[0].offsetHeight + 57;
    // available y position
    range = winHeight - (headHeight + elemHeight);
    element.style.opacity = 1;
    element.style.top = `${Math.random() * range + headHeight}px`;
    // prevent stars appearing too close to edges with + 60
    element.style.left = `${
        Math.random() * winWidth * 0.72 + 60}px`;
    if (window.innerWidth < 600) {
        element.style.left = `${Math.random() * winWidth * 0.45 + 60}px`;
    }
}

/**
 * Generate a new star anchor and position randomly
 * Maximum stars displayed is current number of
 * holidays minus 1
 */
function generateStar() {
    if (currentStars.length > stars.length - 2
        // maximum stars for future development
        || currentStars.length > 7) {
        currentStars.shift();
        starsHTML[0].parentNode.removeChild(starsHTML[0]);
    }
    let randomStarTemplate = getRandomElement(stars);
    let randomStar = document.createElement('a');
    welcomeGrid.append(randomStar);
    randomStar.outerHTML = randomStarTemplate;
    newStar = starsHTML[starsHTML.length - 1];
    if (!currentStars.includes(newStar.href)){
        randomPosition(newStar);
        currentStars.push(newStar.href);
    } else {
        welcomeGrid.removeChild(newStar);
    }
}

generateStar(); // initial star so no delay

(function randomStars() {
    setInterval(() => {
        generateStar();
    }, 8000);
    // remove star after 3 animations
    setInterval(() => {
        currentStars.shift();
        starsHTML[0].parentNode.removeChild(starsHTML[0]);
    }, 24000);
})();

/* 
 * Hide stars and reset position to top left.
 * This prevents overflow when resizing window.
 */
window.addEventListener("resize", () => {
    while (currentStars.length > 0) {
        currentStars.shift();
    }
    while (starsHTML.length > 0) {
        starsHTML[0].parentNode.removeChild(starsHTML[0]);
    }
    for (let star of starsHTML) {
        star.style.opacity = 0;
        star.style.left = 0;
        star.style.top = 0;
    }
});
