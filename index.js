var readlineSync = require("readline-sync");
const chalk = require('chalk');

questionTranslatorOne = {
  question: "Translate 'Are you there?' to German ",
  answer: "Sind sie da?"
}

questionTranslatorTwo = {
  question: "Translate 'Never meant to let you down' to German ",
  answer: "Wollte dich nie im Stich lassen"
}

questionTranslatorThree = {
  question: "Translate 'You know that I say that I am better now' to German",
  answer: "Du weißt dass ich sage dass es mir jetzt besser geht"
}

var questionsTranslator = [questionTranslatorOne,questionTranslatorTwo,questionTranslatorThree];

questionQuizOne= {
  question: "Last movie I watched? ",
  answer: "Shershaah"
}

questionQuizTwo = {
  question: "What can you see once in a minute, twice in a moment and never in a thousand years? ",
  answer: "M"
}

questionQuizThree = {
  question: "What sleeps through the day and cries through the night. The more it cries, the more it creates light? ",
  answer: "Candle"
}

var questionsQuiz = [questionQuizOne,questionQuizTwo,questionQuizThree];

var scores = [
  {
      name: "Gautham",
      highestScore: "3"
  },
  {
      name: "Sam",
      highestScore: "2"
  }
]

var score =0;

function checkKnowledge(questionToAsk,answer)
{
  var userAnswer = readlineSync.question(questionToAsk);

  if(userAnswer.toUpperCase() == answer.toUpperCase())
  {
    console.log("You are right");
    score = score +1;
    
  }
  else
  {
    console.log("You are wrong");
  }
  console.log(chalk.bold.green("Score is: "+score));
}

function checkLanguageSkills()
{
  for(var i=0;i<questionsTranslator.length;i++)
  {
  //console.log("Entered for loop");
    checkKnowledge(questionsTranslator[i].question,questionsTranslator[i].answer);
  }
}

function checkIntelligence()
{
  for(var i=0;i<questionsQuiz.length;i++)
  {
  //console.log("Entered for loop");
    checkKnowledge(questionsQuiz[i].question,questionsQuiz[i].answer);
  }
}

choices = ['Language Test', 'Check intelligence'];
index = readlineSync.keyInSelect(choices, 'Choice?');

//var userChoice = readlineSync.question("1. Language Test 2. Check intelligence Type 1 or 2 ");

if(index == "0")
{
  checkLanguageSkills();
}
else if(index == "1")
{
  checkIntelligence();
}
else
{
  console.log('Exited');
}

console.log(chalk.red("Highest Scores: "));
for(var j = 0;j< scores.length;j++)
{
  console.log(chalk.red(scores[j].name, ":", scores[j].highestScore));
  if(score > scores[j].highestScore)
  {
    console.log(chalk.green("Congratulations, you have a new high score, kindly send a screenshot of this to me!"));
  }
}


