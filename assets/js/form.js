// Emailjs init
(function () {
    emailjs.init("user_JAGMkrNyg1q1wyi3jR0xJ");
})();

const suggestionForm = document.querySelector('#suggestion-content');
const howCelebrated = document.querySelector('#how-celebrated');
const textAreas = document.getElementsByTagName('textarea');


// SEnd email when user clicks submit button
suggestionForm.addEventListener('submit', function (e) {
    e.preventDefault();
    emailjs.sendForm('service_polycarp', 'polycarp_template', this)
        .then(function () {
            console.log('EMAIL SUCCESS!');
        }, function (error) {
            console.log('EMAIL FAILED...', error);
        });
});

const init = ()=> {
    textAreas.forEach(txt => txt.textContent = '');
}

//after document has loaded, call the init function
document.addEventListener("DOMContentLoaded", init);
