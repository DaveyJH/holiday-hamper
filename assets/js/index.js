// -------------------------------------------------------------------- Global State

const stars = document.getElementsByClassName("christmas-star");

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
    element.style.left = `${Math.random() * winWidth * 0.775 + winWidth * 0.075}px`;
    if (window.innerWidth < 600) {
        element.style.left = `${Math.random() * 80}vw`;
    }
}

(function randomStars() {
    setInterval(() => {
        const randomStar = getRandomElement(stars);
        randomPosition(randomStar);
    }, 5000);
})();
