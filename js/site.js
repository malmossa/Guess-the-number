import { startConfetti } from "./confetti.js";

const guessedNumber = document.querySelector(".number-input");
const button = document.querySelector(".btn");
const guesses = document.querySelector(".previous-guesses");
const result = document.querySelector(".alert");
const hightLow = document.querySelector(".hight-low");
const playAgainButton = document.querySelector(".play-again");

button.addEventListener("click", gamePlay);
playAgainButton.addEventListener("click", gameReset);

const randomNumber = Math.floor(Math.random() * 100);

let turnsCount = 0;

function gamePlay(e) {
  e.preventDefault();
  const guessValue = Number(guessedNumber.value);

  turnsCount++;

  if (turnsCount === 10) {
    gameLost();
  } else if (randomNumber === guessValue) {
    gameWin();
  } else {
    guesses.textContent += ` ${guessValue}`;
    result.classList.remove("d-none");
    result.classList.add("alert-danger");
    result.textContent = "WRONG! Try again.";
    if (guessValue < randomNumber) {
      hightLow.textContent = "LOW!";
    } else {
      hightLow.textContent = "HIGHT!";
    }
    guessedNumber.value = "";
  }
}

function gameWin() {
  guessedNumber.setAttribute("disabled", "");
  const lastGuess = document.querySelector(".last-guess");
  lastGuess.classList.add("d-none");

  if (result.classList.contains("alert-danger")) {
    result.classList.remove("alert-danger");
  }

  result.textContent = `CONGRATULATIONS YOU WIN.. in ${turnsCount} guesses`;

  result.classList.add("alert-success");

  playAgainButton.classList.remove("d-none");
  startConfetti();

  // Play Sound
  const audio = new Audio("sound/sound_applause.mp3");
  audio.play();
}

function gameLost() {
  guessedNumber.setAttribute("disabled", "");

  const lastGuess = document.querySelector(".last-guess");
  lastGuess.classList.add("d-none");

  result.textContent = `SORRY YOU LOST.. in ${turnsCount} guesses`;
  result.classList.add("alert-danger");

  playAgainButton.classList.remove("d-none");
}

function gameReset() {
  location.reload();
}
