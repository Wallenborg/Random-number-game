"use strict";

function checkNumberAndGuessesLeft(g, n) {
  if (g === n) {
    messageEl.innerHTML = "Good job you guessed right";
    playAgainEL.innerHTML = "Play Again";
    playAgainEL.classList.add("link--text");
    // eskil code
    let buttonEls = document.querySelectorAll(".num-box");
    for (let buttonEl of buttonEls) {
      buttonEl.disabled = true;
    }
  } else if (tryLeft === 0) {
    messageEl.innerHTML = "You Lost";
    playAgainEL.innerHTML = "Play Again";
    playAgainEL.classList.add("link--text");
    // eskil code
    let buttonEls = document.querySelectorAll(".num-box");
    for (let buttonEl of buttonEls) {
      buttonEl.disabled = true;
    }
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

function lifeCheck() {
  lifecounter -= 1;
  lifeNumEl.innerHTML = lifecounter;
}

let messageEl = document.querySelector("#message");
let guessEl = document.querySelector("#guess");
let playAgainEL = document.querySelector("#playAgain");
let lifeNumEl = document.querySelector("#lifeNum");
let tryLeft = 1;
let lifecounter = 2;
console.log(lifecounter);

lifeNumEl.innerHTML = lifecounter;

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
  checkNumberAndGuessesLeft(guess, number);
  lifeCheck();
});

let button2El = document.querySelector("#button2");
button2El.addEventListener("click", function () {
  guessEl.innerHTML = "2";
  let guess = 2;

  console.log(guess);
  console.log(tryLeft);
  checkNumberAndGuessesLeft(guess, number);
  lifeCheck();
});
let button3El = document.querySelector("#button3");
button3El.addEventListener("click", function () {
  guessEl.innerHTML = "3";
  let guess = 3;
  console.log(guess);
  console.log(tryLeft);

  checkNumberAndGuessesLeft(guess, number);
  lifeCheck();
});
let button4El = document.querySelector("#button4");
button4El.addEventListener("click", function () {
  guessEl.innerHTML = "4";
  let guess = 4;

  console.log(guess);
  console.log(tryLeft);

  checkNumberAndGuessesLeft(guess, number);
  lifeCheck();
});
let button5El = document.querySelector("#button5");
button5El.addEventListener("click", function () {
  guessEl.innerHTML = "5";
  let guess = 5;
  console.log(guess);
  console.log(tryLeft);
  checkNumberAndGuessesLeft(guess, number);
  lifeCheck();
});
let button6El = document.querySelector("#button6");
button6El.addEventListener("click", function () {
  guessEl.innerHTML = "6";
  let guess = 6;
  console.log(guess);
  console.log(tryLeft);
  checkNumberAndGuessesLeft(guess, number);
  lifeCheck();
});

// Move object

document.addEventListener("click", function (e) {
  console.log(e.pageX);
  console.log(e.pageY);
  let handEl = document.querySelector("#hand");

  handEl.style.translate = `${e.pageX - 35}px  ${e.pageY - 715}px`;
});

// change nr in logo flag

let numberDisplayLogoEL = document.querySelector("#number-display-logo");

function showRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  numberDisplayLogoEL.innerHTML = randomNumber;
}

setInterval(showRandomNumber, 800);
