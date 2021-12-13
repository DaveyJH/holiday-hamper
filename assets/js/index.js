// -------------------------------------------------------------------- Global State

const stars = document.getElementsByClassName("christmas-star");

// -------------------------------------------------------------------- Christmas Cards

function getRandomElement(array) {
    let indexer = Math.floor(Math.random() * array.length);
    return array[indexer];
}

function randomPosition(element) {
    element.style.opacity = 1;
    element.style.top = `${Math.random() * 90 + 10}vh`;
    element.style.left = `${Math.random() * 80}vw`;
}

(function randomStars() {
    setInterval(() => {
        const randomStar = getRandomElement(stars);
        randomPosition(randomStar);
    }, 5000);
})();
