// go to the Top Button
window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.btt-btn');
    scroll.classList.toggle('active', window.scrollY >500)
})
