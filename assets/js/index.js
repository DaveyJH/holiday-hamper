// -------------------------------------------------------------------- Global State

const stars = document.getElementsByClassName("christmas-star");
const currentStars = [];

// -------------------------------------------------------------------- Christmas Cards

function getRandomElement(array) {
    let indexer = Math.floor(Math.random() * array.length);
    return array[indexer];
}

function randomPosition(element) {
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;
    elemHeight = element.offsetHeight + 20;
    headHeight = document.getElementsByClassName("header")[0].offsetHeight + 57;
    range = winHeight - (headHeight + elemHeight);
    element.style.opacity = 1;
    element.style.top = `${Math.random() * range + headHeight}px`;
    element.style.left = `${
        Math.random() * winWidth * 0.775 + winWidth * 0.075}px`;
    if (window.innerWidth < 600) {
        element.style.left = `${Math.random() * 80}vw`;
    }
}

function generateStar() {
    if (currentStars.length > stars.length - 3
        || currentStars.length > 7) // maximum stars for future development
        {
            currentStars.shift();
    }
    const randomStar = getRandomElement(stars);
    if (!currentStars.includes(randomStar.href)){
        randomPosition(randomStar);
        currentStars.push(randomStar.href);
    }
}

generateStar(); // initial star so no delay

(function randomStars() {
    
    setInterval(() => {
        generateStar();
    }, 8000);
})();

/* 
 * Hide stars and reset position to top left.
 * This prevents overflow when resizing window.
 */
window.addEventListener("resize", () => {
    while (currentStars.length > 0) {
        currentStars.shift();
    }
    for (let star of stars) {
        star.style.opacity = 0;
        star.style.left = 0;
        star.style.top = 0;
    }
});
