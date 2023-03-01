// const startQuizBtn = document.getElementById("start");
// const inputForm = document.getElementById("initials");
// const quizContaier = document.body;

// let timerCount = 75;
// let scoreCount = 30;
// let currentQuestion = 0;
// const displayQuestion = document.createElement("h1");
// let timerEl = document.createElement("h2");

// const score = document.createElement("h2");
// const options = document.createElement("button");
// options.setAttribute("class", "options");


// // Credits: LinkedIn Learning
// const quiz = [
//   {
//     question: "Which method converts JSON to a JavaScript object?",
//     answers: [
//       "JSON.stringify()",
//       "JSON.toObject()",
//       "JSON.parse()",
//       "JSON.fromString()",
//     ],
//     correct: "JSON.parse()",
//   },
//   {
//     question: "Which method do you use to attach one DOM node to another?",
//     answers: ["getNode()", "querySelector()", "attachNode()", "appendChild()"],
//     correct: "appendChild()",
//   },
//   {
//     question: "Which one is NOT a JavaScript data type?",
//     answers: ["number", "string", "null", "int"],
//     correct: "int",
//   },
//   {
//     question: `What will be the output of this code? \nconsole.log(type of 1);`,
//     answers: ["number", "string", "null", "int"],
//     correct: "number",
//   },
//   {
//     question: `What will be the output of this code? \nconsole.log(1 + "5");`,
//     answers: ["6", "NaN", "undefined", "15"],
//     correct: "15",
//   },
// ];

// // Credits: Client-side APIs Mini Project
// function startTimer(timer) {

//   // Sets timer
//   timer = setInterval(function() {
//     timerCount--;
//     quizContaier.appendChild(timerEl);
//     timerEl.textContent = "Time left: " + timerCount;
//     if (timerCount >= 0) {
//       // Tests if win condition is met
//       if (timerCount > 0) {
//         // Clears interval and stops timer
//         clearInterval(timer);
//       }
//     }
//     // Tests if time has run out
//     if (timerCount === 0) {
//       // Clears interval
//       clearInterval(timer);
//       const newH1 = document.createElement("h1");
//       newH1.textContent = "The END! \n Score: " + scoreCount;
//     }
//   }, 1000);
// }


// function scoreKeeper(userAnswer) {
//   startTimer();
//   const button = document.querySelectorAll("button");
//   for (let i = 0, l = button.length; i < l; i++) {
//     userAnswer = button[i].firstChild.nodeValue;
//   }
//   console.log(userAnswer);

//   if (userAnswer == quiz.correct) {
//     scoreCount += 10;
//   } else {
//     scoreCount -= 10;
//     timerCount -= 10;
//   }

//   currentQuestion++;
//   if (currentQuestion === quiz.length || scoreCount == 0 || timerCount == 0) {
//     score.textContent = "Score: " + scoreCount;
//     const newH1 = document.createElement("h1");
//     newH1.textContent = "The END! \n Score: " + scoreCount;
//     quizContaier.appendChild(newH1);
//   } else {
//     nextQuestion();
//     displayQuestions();
//   }
// }

// function displayQuestions() { 

 
//   score.textContent = "Score: " + scoreCount;

//   displayQuestion.textContent =
//     currentQuestion + 1 + "/5" + "\n\n" + quiz[currentQuestion].question;
//   displayQuestion.setAttribute("class", "question");
//   quizContaier.appendChild(displayQuestion);
//   for (let i = 0; i < quiz[currentQuestion].answers.length; i++) {
//     const options = document.createElement("button");
   
   

//     quizContaier.appendChild(options);
//     options.setAttribute("class", "options");
//     options.innerHTML = quiz[currentQuestion].answers[i];

//     options.addEventListener("click", function () {
//       scoreKeeper();
//     });
//   }
// }

// function nextQuestion() {
//   displayQuestion.innerHTML = "";

//   //   for (let i = 0; i < questionButtons.length; i++) {
//   options.addEventListener("click", function () {
//     options.setAttribute("style", "display: none");

//     displayQuestions();
//   });
// }

// startQuizBtn.addEventListener("click", function () {
//   quizContaier.appendChild(score);
//   score.textContent = "Score: " + scoreCount;
//   let userName = inputForm.value;
//   console.log(userName);
//   const rules = document.getElementById("rules");
//   rules.setAttribute('style', "display: none");
//   startQuizBtn.setAttribute("style", "display: none");
//   inputForm.disabled = true;
//   let width = userName.length + 100;
//   inputForm.setAttribute(
//     "style",
//     "width:" + width + "px; position: absolute;left: 50px;top: 10px;"
//   );
  
//   displayQuestions();
// });

const quizContainer = document.body;
const startQuizBtn = document.getElementById("start");
const inputForm = document.getElementById("initials");

let timerCount = 75;
let scoreCount = 20;
let currentQuestion = 0;
const displayQuestion = document.createElement("h1");


const score = document.createElement("h2");

// Credits: LinkedIn Learning
const quiz = [
  {
    question: "Which method converts JSON to a JavaScript object?",
    answers: [
      "JSON.stringify()",
      "JSON.toObject()",
      "JSON.parse()",
      "JSON.fromString()",
    ],
    correct: "JSON.parse()",
  },
  {
    question: "Which method do you use to attach one DOM node to another?",
    answers: ["getNode()", "querySelector()", "attachNode()", "appendChild()"],
    correct: "appendChild()",
  },
  {
    question: "Which one is NOT a JavaScript data type?",
    answers: ["number", "string", "null", "int"],
    correct: "int",
  },
  {
    question: `What will be the output of this code? \nconsole.log(typeof 1);`,
    answers: ["number", "string", "null", "int"],
    correct: "number",
  },
  {
    question: `What will be the output of this code? \nconsole.log(1 + "5");`,
    answers: ["6", "NaN", "undefined", "15"],
    correct: "15",
  },
];

// Credits: Client-side APIs Mini Project
function startTimer() {
  // Sets timer

  const timerEl = document.createElement("div");
  quizContainer.appendChild(timerEl);
  timerEl.setAttribute("id", "timer");
 
  const timer = setInterval(function() {
    timerCount--;
    timerEl.innerHTML = `Time Left: ${timerCount}`;
  
   
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  const newH1 = document.createElement("h1");
  newH1.textContent = "The END! \nScore: " + scoreCount;
  quizContainer.innerHTML = "";
  quizContainer.appendChild(newH1);
  
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.addEventListener("click", function() {
    const initials = inputForm.value.trim().toUpperCase();
    if (initials) {
      localStorage.setItem(initials, scoreCount);
      const highscores = getHighscores();
      displayHighscores(highscores);
    }
  });
  quizContainer.appendChild(submitBtn);
}

function scoreKeeper(userAnswer) {
  
  if (userAnswer === quiz[currentQuestion].correct) {
    scoreCount += 10;
    score.textContent = "Score: " + scoreCount;
  } else {
    timerCount -= 10;
    scoreCount = Math.max(0, scoreCount - 10);
    score.textContent = "Score: " + scoreCount;
  }

  currentQuestion++;
  if (currentQuestion === quiz.length || scoreCount === 0 || timerCount === 0) {
    endQuiz();
  } else {
    displayQuestions();
  }
}

function displayQuestions() {

 
  //Clear previous question and answer options
  displayQuestion.textContent = "";
  while (quizContainer.lastChild) {
    quizContainer.removeChild(quizContainer.lastChild);
  }

  // Add question and answer options to quiz container
  startTimer();
  score.textContent = "Score: " + scoreCount;
  displayQuestion.textContent = `${currentQuestion + 1}/${quiz.length} ${quiz[currentQuestion].question}`;
  displayQuestion.setAttribute("class", "question");
  quizContainer.appendChild(displayQuestion);
  for (let i = 0; i < quiz[currentQuestion].answers.length; i++) {
    const option = document.createElement("button");
    option.setAttribute("class", "options");
    option.textContent = quiz[currentQuestion].answers[i];
    quizContainer.appendChild(option);

    option.addEventListener("click", function() {
      scoreKeeper(option.textContent);
    });
  }
}


startQuizBtn.addEventListener("click", function () {
    quizContainer.appendChild(score);
    score.textContent = "Score: " + scoreCount;
    let userName = inputForm.value;
    console.log(userName);
    const rules = document.getElementById("rules");
    rules.setAttribute('style', "display: none");
    startQuizBtn.setAttribute("style", "display: none");
    inputForm.disabled = true;
    let width = userName.length + 100;
    inputForm.setAttribute(
      "style",
      "width:" + width + "px; position: absolute;left: 50px;top: 10px;"
    );
    
    displayQuestions();
   
});
