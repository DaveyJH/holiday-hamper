// -------------------------------------------------------------------- Global State

const scrollBtn = document.querySelector('.btt-btn');

// -------------------------------------------------------------------- Go To Top Button

window.addEventListener('scroll', function () {
    scrollBtn.classList.toggle('active', window.scrollY > 300);
});
