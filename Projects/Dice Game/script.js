"use strict";

//Selecting Elements
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let totalScores, currentScore, activePlayer, isplaying;
//Initial Conditions
const init = function () {
  totalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isplaying = true;

  current0Element.textContent = 0;
  current1Element.textContent = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;

  diceElement.classList.add("hidden");
  player0Element.classList.remove("player--winner");
  player1Element.classList.remove("player--winner");
  player0Element.classList.add("player--active");
  player1Element.classList.remove("player--active");
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
};
//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (isplaying) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display Dice
    diceElement.classList.remove("hidden");
    diceElement.src = `./resources/dice-${dice}.png`;
    //3. Check for rolled 1
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (isplaying) {
    //1. Add current score to active player's score
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];
    //2. check if player's score is >=100
    //finish the game
    if (totalScores[activePlayer] >= 100) {
      isplaying = false;
      diceElement.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
