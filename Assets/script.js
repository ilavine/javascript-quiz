const startQuizBtn = document.getElementById("start");
const quizContaier = document.getElementById("quiz-container");

let timerCount = 0;
let scoreCount = 10;
let currentQuestion = 0;


// Credit: LinkedIn Learning
const questions = [{

    question: "Which method converts JSON to a JavaScript object?",
    answers: [{a: "JSON.stringify()", b: "JSON.toObject()", c: "JSON.parse()", d: "JSON.fromString()"}],
    correct: "c"

},
{

    question: "Which method do you use to attach one DOM node to another?",
    answers: [{a: "getNode()", b: "querySelector()", c: "attachNode()", d: "appendChild()"}], 
    correct: "d"

}, 
{
    question: "Which one is NOT a JavaScript data type?",
    answers: [{a: "number", b: "string", c: "null", d: "int"}],
    correct: "d"
}, 
{
    question: `What will be the output of this code? \nconsole.log(type of 1);`,
    answers: [{a: "number", b: "string", c: "null", d: "int"}],
    correct: "a"
}, 
{
    question: `What will be the output of this code? \nconsole.log(1 + "5");`,
    answers: [{a: "6", b: "NaN", c: "undefined", d: "15"}],
    correct: "d"
}]

function startTimer() {
    const timer = document.createElement("h2");
    timer.textContent = "Timer: " + timerCount;
    quizContaier.appendChild(timer);
};

function scoreKeeper () {
    const score = document.createElement("h2");
    score.textContent = "Score: " + scoreCount;
    quizContaier.appendChild(score);
};


function displayQuestions() {
    currentQuestion = 0;
    const quiz = questions[Math.floor(Math.random() * questions.length)];
    const displayQuestion = document.createElement("h1");
    displayQuestion.innerHTML = currentQuestion + "/5"+ "\n" + quiz.question;
    quizContaier.appendChild(displayQuestion);
    currentQuestion++;


    for (let i = 0; i < 4; i++) {
        const options = document.createElement("button");
        quizContaier.appendChild(options); 
        for (let j = 0; j < questions.length; j++) {
            options.textContent = questions[j].answers.length;
        }

    }
    

};


startQuizBtn.addEventListener('click', function() {
    startQuizBtn.setAttribute("style", "display: none");
    displayQuestions();
});

