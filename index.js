var readlineSync = require("readline-sync");

var score = 0;

function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right!");
    score = score + 1;
  } else {
    console.log("You are wrong!");
    score = score - 1;
  }
}

play("where is my hometown? ", "kharagpur");
play("What is my pet name? ", "sonu");
play("what is my mobile brand? ", "redmi");
play("where do I live currently? ", "kharagpur");
console.log("Your score is ", score)