let quizToDisplay = 1;
let quiz ; // Object to hold the quiz being fetched from json file

// -------------------------------------------------------------------- DOM objects

const quizQuestion = document.getElementById("question-text"); // question dom
const quizAnswer = document.getElementById("quiz-answer"); // quiz answer
const slideNumber = document.getElementById("slide-number"); // fact * of y
const quizContainer = document.querySelectorAll(".quizshow-container");

const nextQuiz = document.querySelector("#next-quiz");  // next button
const prevQuiz = document.querySelector("#prev-quiz"); // previous button
const totalQuiz = Number(quizContainer[0].dataset.totalquiz); // quiz.length;

/**
 * Function to display a quiz data
 * @param {*} quizToDisplay is the question number to display
 */
const displayQuiz = (quizToDisplay) => {
    const holiday = quizContainer[0].dataset.holiday;
    const quesId = `question${quizToDisplay}`;
    quizQuestion.textContent = quiz[holiday][quesId].question;
    quizAnswer.textContent = quiz[holiday][quesId].answer;
    slideNumber.textContent = `Fun Fact: ${quizToDisplay} of ${totalQuiz}`;
};

/**
 * Function to read the quiz data from external json file
 */
const fetchQuiz = async () => {
    try {
        const response = await fetch("assets/json/quizData.json");
        const quizData = await response.json();
        quiz = quizData;
        displayQuiz(1);
    } catch(err) {
        console.error(`Couldn't fetch quiz data: ${err}`);
    }
};

// After document has loaded, call the fetchQuiz to load the quiz data

document.addEventListener("DOMContentLoaded", fetchQuiz);

// Function to respond to next quiz click event

nextQuiz.addEventListener('click', function(){
    let nextNum = ++quizToDisplay;
    if(nextNum > totalQuiz) {
        nextNum = 1;
        quizToDisplay = 1;
    }
    displayQuiz(nextNum);
});

// Function to respond to previous quiz click event
 
prevQuiz.addEventListener('click', function(){
    let prevNum = --quizToDisplay;
    if(prevNum < 1) {
        prevNum = totalQuiz;
        quizToDisplay = totalQuiz;
    }
    displayQuiz(prevNum);
});
