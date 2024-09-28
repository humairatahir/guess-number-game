let randomNumber = Math.floor(Math.random() * 100) + 1;
let previousGuesses = [];
const feedback = document.getElementById('feedback');
const previousGuessesDisplay = document.getElementById('previousGuesses');
const guessInput = document.getElementById('guessInput');
const submitGuessButton = document.getElementById('submitGuess');
const resetButton = document.getElementById('resetGame');

submitGuessButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);

function checkGuess() {
    let userGuess = Number(guessInput.value);
    previousGuesses.push(userGuess);

    if (userGuess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed it right! The number was ${randomNumber}`;
        feedback.style.color = "green";
        endGame();
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Too high! Try again.';
        feedback.style.color = "red";
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
        feedback.style.color = "red";
    }
    
    previousGuessesDisplay.textContent = `Previous guesses: ${previousGuesses.join(', ')}`;
    guessInput.value = '';
    guessInput.focus();
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    previousGuesses = [];
    feedback.textContent = '';
    previousGuessesDisplay.textContent = '';
    guessInput.value = '';
    guessInput.focus();
}

function endGame() {
    guessInput.disabled = true;
    submitGuessButton.disabled = true;
}