"use strict";

while (true) {
  // get random number
  let number = Math.floor(Math.random() * 6) + 1;
  // check number
  console.log(number);
  for (let i = 0; i < 3; i++) {
    // check number
    console.log(number);
    //get user input
    let guess = Number(prompt("Pick a number between 1 and 6"));
    console.log(number);
    // check guess against number
    // if guess is right
    if (guess === number) {
      alert("Good job you guessed right");
      break;
    }
    // if guess is to low
    else if (guess < number) {
      alert("Too low! Guesses left: " + (2 - i));
    }
    // if guess is to high but lower than 7
    else if (guess > number && guess < 7) {
      alert("Too high! Guesses left: " + (2 - i));
    }
    // if guess is anything everything except 1-6
    else {
      alert("Choose a number between 0 and 6! Guesses left: " + (2 - i));
    }
  }
  //When guess is right or rounds over. Ask to play again.
  let oneMoreGame = confirm("Do you want to play again ?");
  if (oneMoreGame === false) {
    break;
  }
}
