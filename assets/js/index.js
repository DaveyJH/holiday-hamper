// go to the Top Button
window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.goToTop');
    scroll.classList.toggle('active', window.scrollY >500)
})
