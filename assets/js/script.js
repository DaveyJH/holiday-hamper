// -------------------------------------------------------------------- Navbar 
const toggle = document.querySelector("#burger-icon");
let navbar = document.getElementById("menu");
let open = false;
let quixToDisplay = 1;
toggle.addEventListener("click", toggleNavbar);

function toggleNavbar() {
    open = !open;
    open ? closeNavBar() : openNavBar();
    if (navbar.classList.contains("navbar-toggle")) {
        navbar.classList.remove("navbar-toggle");
    } else {
        navbar.classList.add("navbar-toggle");
    }
}

function openNavBar() {
    toggle.innerHTML = 
    `
    <span class="sr-only">Open the navigation menu</span>
    <i class="fas fa-bars fa-2x tap-target bar-icon"></i>
    `;
}

function closeNavBar() {
    toggle.innerHTML = 
    `
    <span class="sr-only">Close the navigation menu</span>
    <i class="fas fa-times fa-2x tap-target bar-icon"></i>
    `;
}

// -------------------------------------------------------------------- Copyright

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();


// QUix 
const quizData = [
    {
        holidayId: 1,  //1 == christmass
        id: 1,
        question: "Question 1",
        answer: "answer to question 1",
    },
    {
        holidayId: 1,  //1 == christmass
        id: 2,
        question: "Question 2",
        answer: "answer to question 2",
    },
    {
        holidayId: 1,  //1 == christmass
        id: 3,
        question: "Question 3",
        answer: "answer to question 3"
    },
    {
        holidayId: 1,  //1 == christmass
        id: 4,
        question: "Question 4",
        answer: "answer to question 4"
    },
    {
        holidayId: 1,  //1 == christmass
        id: 5,
        question: "Question 5",
        answer: "answer to question 5"
    },

];

const init = ()=> {
     quixToDisplay = 1;
     displayQuix(0);
}

//after document has loaded, call the init function
document.addEventListener("DOMContentLoaded", init);

const totalQuix = quizData.length;
const quizQuestion = document.getElementById("question-text");
const quizAnswer = document.getElementById("quiz-answer");
const slideNumber = document.getElementById("slide-number");


const displayQuix = function (quizToDisplay){
    quizQuestion.textContent = quizData[quizToDisplay].question;
    quizAnswer.textContent =quizData[quizToDisplay].answer;
    slideNumber.textContent = `Question: ${quizToDisplay+1} of ${totalQuix}`;
}

const nextQuiz = document.querySelector("#next-quiz");
const prevQuiz = document.querySelector("#prev-quiz");

nextQuiz.addEventListener('click', function(){
    let nextNum = ++quixToDisplay;
    if(nextNum > totalQuix) {
        nextNum = 1;
        quixToDisplay =1;
    }
    displayQuix(nextNum-1);
})

prevQuiz.addEventListener('click', function(){
    let prevNum = --quixToDisplay;
    if(prevNum < 1) {
        prevNum = totalQuix;
        quixToDisplay =totalQuix;
    }
    displayQuix(prevNum-1);
})

// end quiz