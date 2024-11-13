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

const secretNumber = Math.floor(Math.random() * 20) + 1;
labelSecret.textContent = secretNumber;

// Using the addEventListener to listen to events.
btnCheck.addEventListener("click", function () {
  const guess = guessInput.value;
  console.log(Number(guess), typeof guess);
});
