// -------------------------------------------------------------------- Quiz

let quizToDisplay = 1;

const quizData = [
    {
        holidayId: 1,  // 1 == christmas
        id: 1,
        question: "Question 1",
        answer: "answer to question 1",
    },
    {
        holidayId: 1,  // 1 == christmas
        id: 2,
        question: "Question 2",
        answer: "answer to question 2",
    },
    {
        holidayId: 1,  // 1 == christmas
        id: 3,
        question: "Question 3",
        answer: "answer to question 3"
    },
    {
        holidayId: 1,  // 1 == christmas
        id: 4,
        question: "Question 4",
        answer: "answer to question 4"
    },
    {
        holidayId: 1,  // 1 == christmas
        id: 5,
        question: "Question 5",
        answer: "answer to question 5"
    },

];

const init = ()=> {
     quizToDisplay = 1;
     displayQuiz(0);
}

// after document has loaded, call the init function
document.addEventListener("DOMContentLoaded", init);

const totalQuiz = quizData.length;
const quizQuestion = document.getElementById("question-text");
const quizAnswer = document.getElementById("quiz-answer");
const slideNumber = document.getElementById("slide-number");


const displayQuiz = function (quizToDisplay){
    quizQuestion.textContent = quizData[quizToDisplay].question;
    quizAnswer.textContent =quizData[quizToDisplay].answer;
    slideNumber.textContent = `Question: ${quizToDisplay+1} of ${totalQuiz}`;
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
