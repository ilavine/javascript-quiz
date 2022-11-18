const startQuizBtn = document.getElementById("start");
const quizContaier = document.getElementById("quiz-container");


// Credit: LinkedIn Learning
const questions = [{

    question: "Which method converts JSON to a JavaScript object?",
    answers: {a: "JSON.stringify()", b: "JSON.toObject()", c: "JSON.parse()", d: "JSON.fromString()"},
    correct: "c"

},
{

    question: "Which method do you use to attach one DOM node to another?",
    answers: {a: "getNode()", b: "querySelector()", c: "attachNode()", d: "appendChild()"}, 
    correct: "d"

}, 
{
    question: "Which one is NOT a JavaScript data type?",
    answers: {a: "number", b: "string", c: "null", d: "int"},
    correct: "d"
}, 
{
    question: `What will be the output of this code? \nconsole.log(type of 1);`,
    answers: {a: "number", b: "string", c: "null", d: "int"},
    correct: "a"
}, 
{
    question: `What will be the output of this code? \nconsole.log(1 + "5");`,
    answers: {a: "6", b: "NaN", c: "undefined", d: "15"},
    correct: "d"
}]

function displayQuestions() {
    const quiz = questions[Math.floor(Math.random() * questions.length)];
    const displayQuestion = document.createElement("h1");
    displayQuestion.innerHTML = quiz.question;
    quizContaier.appendChild(displayQuestion);

    const displayAnswer = document.createElement("button");
    quizContaier.appendChild(displayAnswer);

    displayAnswer.forEach(function(element, index){
        element.innerHTML = quiz.answers[index];
    });

};



startQuizBtn.addEventListener('click', function() {
    displayQuestions();
    startQuizBtn.setAttribute("style", "display: none;");
});

