const chalk = require('chalk');
var readlineSync = require('readline-sync');


var score = 0;

function welcome() {
  var userName = readlineSync.question("What's your name? ");
  console.log("Welcome " + userName + " to Do You Know Sunil? ")
}


var highScores = [
  {
    name: "Sunil",
    score: 5,
  },

  {
    name: "Rohit",
    score: 3,
  },

  {
    name: "Naveen",
    score: 2,
  },
]

var questions = [
  {
    question: "\nWhere do I live?\n",
    answer: "Ajmer"
  },
  {
    question: "\nIn which year was I born?\n",
    answer: "2001"
  },
  {
    question: "\nWhich is my favourite cricketer?\n",
    answer: "Virat Kohli"
  },
  {
    question: "\nWhich is my favourite TV series?\n",
    answer: "Friends"
  },
  {
    question: "\nWhat is my favourite color?\n",
    answer: "Black"
  }
];

function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("Right!"))
    score = score + 1
  } else {
    console.log(chalk.red("Wrong!"))
  }
  console.log(chalk.blue("Current score : " + score))
  console.log("------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i]
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function displayScores() {
  console.log(chalk.magenta("Yay, you scored: " + score))

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name + ":" + score.score))
}

welcome()
game()
displayScores()

