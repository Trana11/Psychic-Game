//word generator
const letterDatabase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

//wins
let win = 0;
//losses
let losses = 0;
//guesses left
let guessesLeft = 16;

//guessesSoFar
let lettersG = [];
//changing html
let directions = document.getElementById("directions");
let wins = document.getElementById("wins");
let loses = document.getElementById("loses");
let guessLeft = document.getElementById("guessesLeft");
let lettersGuess = document.getElementById("guessesSoFar");
function playgame() {
  document.onkeyup = function(event) {
    event.preventDefault();

    if (event.keyCode >= 65 && event.keyCode <= 90) {
      let guess = event.key;
      //generating random word from array
      let randomLetter =
        letterDatabase[Math.floor(Math.random() * letterDatabase.length)];

      if (guess === randomLetter) {
        alert("you have won, play again");
        win++;
        guessesLeft = 16;
        lettersG = [];
      } else if (guess !== randomLetter) {
        guessesLeft--;
        if (guessesLeft === 0) {
          alert("you lose, try again");
          losses++;
          guessesLeft = 16;
          lettersG = [];
        }
        lettersG.push(guess);
      }

      directions.textContent = "";
      wins.textContent = "wins: " + win;
      loses.textContent = "loses: " + losses;
      guessLeft.textContent = "Guesses left: " + guessesLeft;
      guessesSoFar.textContent = "You have Guessed " + lettersG;
    }
  };
}

playgame();
