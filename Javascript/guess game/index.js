const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');

const low0rHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    validateGuess(guess);
    if (guess < 0 || guess > 100 || isNaN(guess)) {
      alert('Please enter valid value');
    } else {
      prevGuess.push(guess);
    }
  });
}

function validateGuess() {}
function checkGuess() {}
function displayMessage() {}
