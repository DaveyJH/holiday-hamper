// --------------------------------------------------------------- Global State

const scrollBtn = document.querySelector('.btt-btn');

// ------------------------------------------------------------------ Go To Top Button

scrollBtnOrigin = window.getComputedStyle(scrollBtn).getPropertyValue("bottom");
scrollBtnWidthOrigin = window.
    getComputedStyle(scrollBtn).getPropertyValue("right");

window.addEventListener('scroll', function () {
    const winHeight = window.innerHeight;
    const footHeight = document.getElementsByTagName("footer")[0].offsetHeight;
    const headHeight = document.getElementsByTagName("header")[0].offsetHeight;
    const mainHeight = document.getElementsByTagName("main")[0].offsetHeight;
    const totalHeight = mainHeight + footHeight + headHeight;
    // scroll point at which button should move
    let scrollTrigger = mainHeight - winHeight;
    // position to move button to (dynamic)
    let scrollAdjuster = window.scrollY + winHeight - totalHeight + footHeight;
    if (document.getElementsByClassName("quizshow-container").length !== 0) {
        quizSect = document.getElementsByClassName("quizshow-container")[0];
        scrollTrigger = mainHeight - quizSect.offsetHeight - winHeight;
        scrollAdjuster = scrollAdjuster + quizSect.offsetHeight;
    }
    scrollBtn.classList.toggle('active', window.scrollY > 1);
    if (window.scrollY > scrollTrigger) {
        scrollBtn.style.bottom = `
            ${scrollAdjuster + 2 * scrollBtn.offsetHeight}px`;
    } else {
        scrollBtn.style.bottom = scrollBtnOrigin;
    }
});
