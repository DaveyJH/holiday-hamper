// -------------------------------------------------------------------- Quiz

let quizToDisplay = 1;
let quiz ;
const quizQuestion = document.getElementById("question-text");
const quizAnswer = document.getElementById("quiz-answer");
const slideNumber = document.getElementById("slide-number");
const quizContainer = document.querySelectorAll(".quizshow-container");
const totalQuiz = Number(quizContainer[0].dataset.totalquiz); //quiz.length;

// const quizData = [
//     {
//         holidayId: 1,  // 1 == christmas
//         id: 1,
//         question: "Question 1",
//         answer: "answer to question 1",
//     },
//     {
//         holidayId: 1,  // 1 == christmas
//         id: 2,
//         question: "Question 2",
//         answer: "answer to question 2",
//     },
//     {
//         holidayId: 1,  // 1 == christmas
//         id: 3,
//         question: "Question 3",
//         answer: "answer to question 3"
//     },
//     {
//         holidayId: 1,  // 1 == christmas
//         id: 4,
//         question: "Question 4",
//         answer: "answer to question 4"
//     },
//     {
//         holidayId: 1,  // 1 == christmas
//         id: 5,
//         question: "Question 5",
//         answer: "answer to question 5"
//     },
// ];

const init = () => {
    fetchQuiz();
    // quizToDisplay = 1;
    // displayQuiz(0);
}

// after document has loaded, call the init function
document.addEventListener("DOMContentLoaded", init);




const displayQuiz = function (quizToDisplay) {
    const holiday = quizContainer[0].dataset.holiday;
    const quesId = `question${quizToDisplay}`;
    quizQuestion.textContent = quiz[holiday][quesId].question;
    quizAnswer.textContent =quiz[holiday][quesId].answer;
    slideNumber.textContent = `Fun Fact: ${quizToDisplay} of ${totalQuiz}`;
}

const fetchQuiz = async () => {
    try {
        const response = await fetch("../assets/quizData.json");
        const quizData = await response.json();
        quiz = quizData;
        displayQuiz(1);
    } catch (err) {
        console.error(`Couldn't fetch quiz data: ${err}`)
    }
}
// quiz.Christmas.question1.answer

const nextQuiz = document.querySelector("#next-quiz");
const prevQuiz = document.querySelector("#prev-quiz");

nextQuiz.addEventListener('click', function(){
    let nextNum = ++quizToDisplay;
    console.log("nexthum==="+nextNum);
    if(nextNum > totalQuiz) {
        nextNum = 1;
        quizToDisplay = 1;
    }
    displayQuiz(nextNum);
})

prevQuiz.addEventListener('click', function(){
    let prevNum = --quizToDisplay;
    if(prevNum < 1) {
        prevNum = totalQuiz;
        quizToDisplay = totalQuiz;
    }
    displayQuiz(prevNum);
})
