//Letter Bank of available choices
var letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Declaring values to Zero from the start of the game
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//Generates Random Letter
var randomLetter = letterBank[Math.floor(Math.random() * letterBank.length)];

//Allow Player 9 Guesses
var functionGuessesLeft = function() {
  // GuessesLeft to be displayed in the HTML
  document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var functionLetterGuess = function() {
  this.letterToGuess = this.letterBank[Math.floor(Math.random() * this.letterBank.length)];
};

var functionLettersGuessed = function() {
  // Displays players guesses 
  document.querySelector('#guessesSoFar').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Reset Function
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  functionLetterGuess();
  functionGuessesLeft();
  functionLettersGuessed();
}

functionLetterGuess();
functionGuessesLeft();

//Key Press = Player Guess
document.onkeyup = function(event) {
    guessesLeft--;
  var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(playerGuess);
  functionGuessesLeft();
  functionLettersGuessed();

        if (guessesLeft > 0){
            if (playerGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("You're a psychic!");
                reset();
            }
        }else if(guessesLeft == 0){ 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Work hard every day to become a psychic!");
            reset();
        }
};

