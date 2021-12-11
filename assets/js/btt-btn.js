// -------------------------------------------------------------------- Global State

const scroll = document.querySelector('.btt-btn');

// -------------------------------------------------------------------- Go To Top Button

window.addEventListener('scroll', function () {
    scroll.classList.toggle('active', window.scrollY > 500);
});
