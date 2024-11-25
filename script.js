"use strict";
// document.body.innerHTML +=
//   '<a href="https://ewebalsms.com" style="color: #fff; text-decoration: none;">Click here</a>';

/*
const title = document.querySelector(".title");
const containerEl = document.querySelector(".container");
const labelMessage = document.querySelector(".message");
// title.textContent = "Guess Game";
labelMessage.textContent = "🤔 Start guessing...";
// Display an alert
// alert("I love coding!!! ⚡");
*/

/////////////////////////////////////
// Guess Game

// Selecting the elements.
const labelTitle = document.querySelector(".title");
const labelSecret = document.querySelector(".secret");
const labelMessage = document.querySelector(".message");
const labelAttempt = document.querySelector(".attempt");
const labelHighscore = document.querySelector(".highscore");

const guessInput = document.querySelector(".guess");

const btnCheck = document.querySelector(".btn-check");
const btnReset = document.querySelector(".btn-reset");

// Working with the prompt: Players input their name.
// const personName = prompt("Give us your name");
// labelTitle.textContent = `Guess my number, ${personName ?? "John"}`;

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Using the addEventListener to listen to events on the check button.
btnCheck.addEventListener("click", function () {
  // Get the guess
  const guess = Number(guessInput.value);

  // Check if there was no input and display a message
  if (!guess) labelMessage.textContent = "🚫 There's no number!";
  // Check if guess matches the generated secret number
  else if (guess === secretNumber) {
    // Display a message
    labelMessage.textContent = "🥳 Your guess is correct!";

    // Change the background
    document.body.style.backgroundColor = "green";

    // Display the secret number
    labelSecret.textContent = secretNumber;

    // Update the highscore
    if (score > highScore) {
      highScore = score;
      labelHighscore.textContent = highScore;
    }

    // Disable the check button
    btnCheck.disabled = true;
  } else if (guess !== secretNumber) {
    // Display message
    if (guess > secretNumber) {
      labelMessage.textContent = "👆 Your guess is high!";
    } else {
      labelMessage.textContent = "👇 Your guess is low!";
    }

    // Decrement the score / trial
    score--;
    labelAttempt.textContent = score;
    console.log(score);

    if (score <= 0) {
      // Display a message
      labelMessage.textContent = "😭 Oops! You lost!";
      // Change the background
      document.body.style.backgroundColor = "crimson";

      // Set score to zero
      score = 0;
      labelAttempt.textContent = score;

      // Disable the check button
      btnCheck.disabled = true;
    }
  }
});

btnReset.addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  guessInput.value = "";
  labelSecret.textContent = "?";
  labelMessage.textContent = "🤔 Start guessing...";
  labelAttempt.textContent = score;
  document.body.style.backgroundColor = "#313131";
  btnCheck.disabled = false;
});
