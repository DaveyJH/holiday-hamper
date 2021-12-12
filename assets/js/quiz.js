// -------------------------------------------------------------------- Quiz

let quizToDisplay = 1;
let quiz = [];

const init = () => {
    fetchQuiz();
    quizToDisplay = 1;
    displayQuiz(0);
}

// after document has loaded, call the init function
document.addEventListener("DOMContentLoaded", init);

const totalQuiz = 5 ; //quiz.length;
const quizQuestion = document.getElementById("question-text");
const quizAnswer = document.getElementById("quiz-answer");
const slideNumber = document.getElementById("slide-number");

const fetchQuiz = async () => {
    try {
        const response = await fetch("../assets/quizData.json");
        const quizData = await response.json();
        quiz = quizData;
    } catch(err) {
        console.error(`Couldn't fetch quiz data: ${err}`)
    }
}

const nextQuiz = document.querySelector("#next-quiz");
const prevQuiz = document.querySelector("#prev-quiz");

nextQuiz.addEventListener('click', function(){
    let nextNum = ++quizToDisplay;
    if(nextNum > totalQuiz) {
        nextNum = 1;
        quizToDisplay = 1;
    }
    displayQuiz(nextNum-1);
})

prevQuiz.addEventListener('click', function(){
    let prevNum = --quizToDisplay;
    if(prevNum < 1) {
        prevNum = totalQuiz;
        quizToDisplay = totalQuiz;
    }
    displayQuiz(prevNum-1);
})
