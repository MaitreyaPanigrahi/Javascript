let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let p = document.createElement('p');
let prev = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess < 1 || guess > 100) {
    // displayGuess(guess);
    alert(`Please Enter a number between 1 - 100`);
  } else if (isNaN(guess)) {
    alert(`Entered value is Not a Number`);
  } else {
    prev.push(guess);
    // displayGuess(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMsg(`Game Over. The Number was ${guess}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    // displayGuess(guess);
    displayMsg(`Congo. You guessed it right`);
    endGame();
  } else if (guess > randomNumber) {
    // displayGuess(guess);
    displayMsg(`Guessed Number is High`);
  } else {
    // displayGuess(guess);
    displayMsg(`Guessed Number is Low`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMsg(msg) {
  //
  lowOrHi.innerHTML = `<h3>${msg}</h3>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>Start new Game<h2>`;
  startOver.appendChild(p);
  playGame = false;

  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    // userInput.value='';
    numGuess = 1;
    prev = [];
    userInput.removeAttribute('disabled');
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    startOver.removeChild(p);
    displayMsg('');
    playGame = true;
  });
}
