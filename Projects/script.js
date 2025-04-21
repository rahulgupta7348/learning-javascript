"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
    //when guessing number is equal to secret number
  } else if (guess === secretNumber) {
    score = score + 10;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct Number👍";
    document.querySelector("body").style.backgroundColor = "rgb(4, 44, 105)";
    document.querySelector(".number").style.width = "20rem";
    //when guessing number is not equal to secret number.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector(".message").textContent =
        guess > secretNumber
          ? "Guessing number is too high"
          : "Guessing number is too low";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
});
