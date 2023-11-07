"use strict";

// while (true) {
//   // get random number
//   let number = Math.floor(Math.random() * 6) + 1;
//   // check number
//   console.log(number);
//   for (let i = 0; i < 3; i++) {
//     // check number
//     console.log(number);
//     //get user input
//     let guess = Number(prompt("Pick a number between 1 and 6"));
//     console.log(number);
//     // check guess against number
//     // if guess is right
//     if (guess === number) {
//       alert("Good job you guessed right");
//       break;
//     }
//     // if guess is to low
//     else if (guess < number) {
//       alert("Too low! Guesses left: " + (2 - i));
//     }
//     // if guess is to high but lower than 7
//     else if (guess > number && guess < 7) {
//       alert("Too high! Guesses left: " + (2 - i));
//     }
//     // if guess is anything everything except 1-6
//     else {
//       alert("Choose a number between 0 and 6! Guesses left: " + (2 - i));
//     }
//   }
//   //When guess is right or rounds over. Ask to play again.
//   let oneMoreGame = confirm("Do you want to play again ?");
//   if (oneMoreGame === false) {
//     break;
//   }
// }

// new

// select element
let messageEl = document.querySelector("#message");
// let formEl = document.querySelector("#form");
let guessEl = document.querySelector("#guess");

// get random number
let number = Math.floor(Math.random() * 6) + 1;
// check number
console.log(number);
// for (let i = 0; i < 3; i++) { }
// check number
console.log(number);
//get user input
// let guess = Number(prompt("Pick a number between 1 and 6"));
// console.log(number);
// check guess against number
// if guess is right
if (guess === number) {
  guessEl.innerHTML = guess;
  messageEl.innerHTML = "Good job you guessed right";
}
// if guess is to low
else if (guess < number) {
  // messageEl.innerHTML = `Too low! Guesses left: ${2 - i}`;
  guessEl.innerHTML = guess;
  messageEl.innerHTML = "Too Low!";
}
// if guess is to high but lower than 7
else if (guess > number && guess < 7) {
  // messageEl.innerHTML = `Too high! Guesses left: ${2 - i}`;
  guessEl.innerHTML = guess;
  messageEl.innerHTML = "Too High";
}
// if guess is anything everything except 1-6
else {
  // messageEl.innerHTML = `Choose a number between 0 and 6! Guesses left: ${
  //   2 - i
  // }`;
  messageEl.innerHTML = "Choose a number between 0 and 6!";
}

let button1El = document.querySelector("#button1");
button1El.addEventListener("click", function () {
  guessEl.innerHTML = "1";
  console.log("1");
});
let button2El = document.querySelector("#button2");
button2El.addEventListener("click", function () {
  guessEl.innerHTML = "2";
  console.log("2");
});
let button3El = document.querySelector("#button3");
button3El.addEventListener("click", function () {
  guessEl.innerHTML = "3";
  console.log("3");
});
let button4El = document.querySelector("#button4");
button4El.addEventListener("click", function () {
  guessEl.innerHTML = "4";
  console.log("4");
});
let button5El = document.querySelector("#button5");
button5El.addEventListener("click", function () {
  guessEl.innerHTML = "5";
  console.log("5");
});
let button6El = document.querySelector("#button6");
button6El.addEventListener("click", function () {
  guessEl.innerHTML = "6";
  console.log("6");
});

// Move object

document.addEventListener("click", function (e) {
  console.log(e.clientX);
  console.log(e.clientY);
  let handEl = document.querySelector("#hand");

  handEl.style.translate = `${e.clientX}px  ${e.clientY}px`;
});
