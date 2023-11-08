"use strict";

function checkNumber(g, n) {
  if (g === n) {
    messageEl.innerHTML = "Good job you guessed right";
  } else if (tryLeft === 0) {
    messageEl.innerHTML = "You Lost";
  } else if (g < n) {
    messageEl.innerHTML = "Too Low!";
    tryLeft -= 1;
    console.log(tryLeft);
  } else if (g > n) {
    messageEl.innerHTML = "Too High!";
    tryLeft -= 1;
    console.log(tryLeft);
  }
}

let messageEl = document.querySelector("#message");
let guessEl = document.querySelector("#guess");
let tryLeft = 1;

// get random number
let number = Math.floor(Math.random() * 6) + 1;

console.log(number);
console.log(tryLeft);

let button1El = document.querySelector("#button1");
button1El.addEventListener("click", function () {
  guessEl.innerHTML = "1";
  let guess = 1;
  console.log(guess);
  console.log(tryLeft);
  checkNumber(guess, number);
});

let button2El = document.querySelector("#button2");
button2El.addEventListener("click", function () {
  guessEl.innerHTML = "2";
  let guess = 2;

  console.log(guess);
  console.log(tryLeft);
  checkNumber(guess, number);
});
let button3El = document.querySelector("#button3");
button3El.addEventListener("click", function () {
  guessEl.innerHTML = "3";
  let guess = 3;
  console.log(guess);
  console.log(tryLeft);

  checkNumber(guess, number);
});
let button4El = document.querySelector("#button4");
button4El.addEventListener("click", function () {
  guessEl.innerHTML = "4";
  let guess = 4;

  console.log(guess);
  console.log(tryLeft);

  checkNumber(guess, number);
});
let button5El = document.querySelector("#button5");
button5El.addEventListener("click", function () {
  guessEl.innerHTML = "5";
  let guess = 5;
  console.log(guess);
  console.log(tryLeft);
  checkNumber(guess, number);
});
let button6El = document.querySelector("#button6");
button6El.addEventListener("click", function () {
  guessEl.innerHTML = "6";
  let guess = 6;
  console.log(guess);
  console.log(tryLeft);
  checkNumber(guess, number);
});

// Move object

document.addEventListener("click", function (e) {
  console.log(e.pageX);
  console.log(e.pageY);
  let handEl = document.querySelector("#hand");

  handEl.style.translate = `${e.pageX - 30}px  ${e.pageY - 30}px`;
});

// change nr in logo flag

let numberDisplayLogoEL = document.querySelector("#number-display-logo");

function showRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  numberDisplayLogoEL.innerHTML = randomNumber;
}

setInterval(showRandomNumber, 800);

// if (guess === number) {
//   // guessEl.innerHTML = guess;
//   messageEl.innerHTML = "Good job you guessed right";
// }
// // if guess is to low
// else if (guess < number) {
//   // messageEl.innerHTML = `Too low! Guesses left: ${2 - i}`;
//   guessEl.innerHTML = guess;
//   messageEl.innerHTML = "Too Low!";
// }
// // if guess is to high but lower than 7
// else if (guess > number && guess < 7) {
//   // messageEl.innerHTML = `Too high! Guesses left: ${2 - i}`;
//   guessEl.innerHTML = guess;
//   messageEl.innerHTML = "Too High";
// }
// if guess is anything everything except 1-6
// else {
//   // messageEl.innerHTML = `Choose a number between 0 and 6! Guesses left: ${
//   //   2 - i
//   // }`;
//   messageEl.innerHTML = "Choose a number between 0 and 6!";
// }
