var readlineSync = require("readline-sync");
const chalk = require('chalk');

riddleOne = {
  question: "I can't be used until I'm broken, what am I? ",
  answer1: "Egg",
  answer2: "An Egg"
}

riddleTwo = {
  question: "I have a head and a tail, but no arms and legs. What am I? ",
  answer1: "Coin",
  answer2: "A Coin"
}

var riddles = [riddleOne, riddleTwo];

mathQuizOne = {
  question: "Find the missing number - 1,4,9,16,25,36,49,? ",
  answer: "64",
  reason: "64. 1^2,2^2,3^2,4^2,5^2,6^2,7^2,.. hence the next term is 8^2=64"
}

mathQuizTwo = {
  question: "If 1=3, 2=3, 3=5, 4=4, 5=4 then 6=? ",
  answer: "3",
  reason: "3 because 'six' has three letters"
}

var mathQuiz = [mathQuizOne, mathQuizTwo];

bonusQuestion = {
  question: "You have 100 chocolates. You can return 4 wrappers and get one more chocolate. How many chocolates would you have at the end? ",
  answer: "133",
  reason: "Return all 100 wrappers and get 25 more chocolates. Return all 25 wrappers and get 6 more chocolates, 1 left over wrapper. Return all 6 wrappers and get 1 more chocolate, 2 left over wrappers. Return 1 wrapper and get that wrapper. Return 1+2+1 wrappers and get 1 chocolate. 100 + 25+ 6 + 1 + 1 = 133 chocolates"
}

var scores = [
  {
    name: "Gautham",
    highestScore: "2"
  },
  {
    name: "Sam",
    highestScore: "2"
  }
]

var score = 0;

function checkRiddleKnowledge(questionToAsk, answer1, answer2, reason) {
  var userAnswer = readlineSync.question(questionToAsk);

  if ((userAnswer.toUpperCase() == answer1.toUpperCase()) ||
    (userAnswer.toUpperCase() == answer2.toUpperCase())) {
    console.log(chalk.green("You are right"));
    score = score + 1;
  }
  else {
    console.log(chalk.red("You are wrong."));
    console.log("Solution: " + answer1);
  }
  console.log(chalk.bold.green("Score is: " + score));
}

function doRiddleTest() {
  for (var i = 0; i < riddles.length; i++) {
    checkRiddleKnowledge(riddles[i].question, riddles[i].answer1, riddles[i].answer2, riddles[i].reason);
  }
}

function checkMathKnowledge(questionToAsk, answer, reason) {
  var userAnswer = readlineSync.question(questionToAsk);

  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log(chalk.green("You are right"));
    score = score + 1;
  }
  else {
    chalk.red
    console.log(chalk.red("You are wrong."));
    console.log("Solution: " + reason);
  }
  console.log(chalk.bold.green("Score is: " + score));
}

function doMathQuiz() {
  for (var i = 0; i < mathQuiz.length; i++) {
    checkMathKnowledge(mathQuiz[i].question, mathQuiz[i].answer, mathQuiz[i].reason);
  }
}

var username = readlineSync.question('Enter your name: ');

console.log(chalk.bold.green("Welcome " + username));
choices = ['Riddle test', 'Check your Math IQ'];
index = readlineSync.keyInSelect(choices, 'Choice?');

if (index == "0") {
  doRiddleTest();
}
else if (index == "1") {
  doMathQuiz();
}
else {
  console.log('Exited');
}

// console.log(chalk.blue("Highest Scores: "));
for (var j = 0; j < scores.length; j++) {
  if (score == scores[j].highestScore) {
    console.log(chalk.green("Congratulations " + username + ", you have equalled the highest scores, please answer a bonus question and top the leaderboard !"));

    checkMathKnowledge(bonusQuestion.question, bonusQuestion.answer, bonusQuestion.reason);
    if (score > (scores[j].highestScore)) {
      console.log(chalk.green("Congratulations " + username + ", you have a new high score, please send a screenshot to the admin!"));
    }
    else {
      break;
    }
  }

}
for (var j = 0; j < scores.length; j++) {
  console.log(chalk.blue(chalk.underline("High Score " + (j + 1)) + " " + scores[j].name, ":", scores[j].highestScore));

}