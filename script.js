"use strict";

// ----------------
// Variables
// ----------------

let messageEl = document.querySelector("#message");
let guessEl = document.querySelector("#guess");
let playAgainEL = document.querySelector("#playAgain");
let lifeNumEl = document.querySelector("#lifeNum");
let linkBoxEl = document.querySelector("#linkBox");

let lifecounter = 2;
let tryLeft = 1;

// -----------------
// get random number
// -----------------

let number = Math.floor(Math.random() * 6) + 1;

console.log("Num", number);
console.log("try left", tryLeft);

lifeNumEl.innerHTML = lifecounter;

console.log("life left", lifecounter);

// ----------------
// Logic
// ----------------
function checkNumberAndGuessesLeft(g, n) {
  if (g === n) {
    messageEl.innerHTML = "Good job you guessed right";
    playAgainEL.innerHTML = "Play Again";
    playAgainEL.classList.add("link--text");
    linkBoxEl.classList.add("animation-link");
    lifecounter += 1;
    let buttonEls = document.querySelectorAll(".num-box");
    setTimeout(function () {
      for (let buttonEl of buttonEls) {
        buttonEl.disabled = true;
      }
    }, 1600);
  } else if (tryLeft === 0) {
    messageEl.innerHTML = "You Lost";
    playAgainEL.innerHTML = "Play Again";
    playAgainEL.classList.add("link--text");
    linkBoxEl.classList.add("animation-link");
    let buttonEls = document.querySelectorAll(".num-box");
    setTimeout(function () {
      for (let buttonEl of buttonEls) {
        buttonEl.disabled = true;
      }
    }, 1600);
  } else if (g < n) {
    messageEl.innerHTML = "Too Low!";
    tryLeft -= 1;
    console.log("try left", tryLeft);
  } else if (g > n) {
    messageEl.innerHTML = "Too High!";
    tryLeft -= 1;
    console.log("try left", tryLeft);
  }
}

function lifeCheck() {
  //a delay
  setTimeout(function () {
    lifecounter -= 1;
    lifeNumEl.innerHTML = lifecounter;
  }, 1000);
}

function addAnimation() {
  messageEl.classList.add("animation-message");
  guessEl.classList.add("animation-guess");
}

// -----------------
// All Buttons
// -----------------

for (let i = 1; i <= 6; i++) {
  let buttonEl = document.querySelector("#button" + i);

  buttonEl.addEventListener("click", function () {
    guessEl.innerHTML = i.toString();
    let guess = i;

    console.log("g", guess);
    console.log("try left", tryLeft);

    checkNumberAndGuessesLeft(guess, number);
    addAnimation();
    lifeCheck();
  });
}

// ----------------
// Event listeners
// ----------------

messageEl.addEventListener("animationend", () => {
  messageEl.classList.remove("animation-message");
});

guessEl.addEventListener("animationend", () => {
  guessEl.classList.remove("animation-guess");
});

linkBoxEl.addEventListener("animationend", () => {
  linkBoxEl.classList.remove("animation-link");
});

// -------------
// Move object
// -------------

document.addEventListener("click", function (e) {
  console.log(e.pageX);
  console.log(e.pageY);
  let handEl = document.querySelector("#hand");

  handEl.style.translate = `${e.pageX - 30}px  ${e.pageY - 715}px`;
});
// ----------------------
// change nr in logo flag
// -----------------------

let numberDisplayLogoEL = document.querySelector("#number-display-logo");

function showRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  numberDisplayLogoEL.innerHTML = randomNumber;
}

setInterval(showRandomNumber, 800);
