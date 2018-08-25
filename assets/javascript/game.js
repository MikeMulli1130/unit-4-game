// GLOBAL VARIABLES (accessible by all functions)
// ==================================================================================================

// Computer selected solution will be held here.
var computerNumber = "";

// Holds a list of guessed numbers 
var guessedNumbers = [];

// Holds all of the wrong guesses.
var wrongGuesses = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

/* first choose a random number this is shown to the player at the beginning of the game */

chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];



randomNumber=crystalNumbers[Math.floor(Math.random()*crystalNumbers.length)];
console.log(randomNumber);

var playerCount =['']
var numberOne, numberTwo, numberThree, numberFour;
numberOne >=1 && <= 49;


/* need four buttons - one for each "Crystal"; when one is clicked the number is shown*/
/* the game keeps going until the player either goes over the original random number or*/
/* or the player hits the number perfectly - if so, they win*/
/* if the player goes OVER the original random number then they lose:*/


document.getElementById("ruby").onclick = function(computerGuess) {
console.log(numberOne)
}


document.getElementById("emerald").onclick = numberTwo;
document.getElementById("sapphire").onclick = numberThree;
document.getElementById("topaz").onclick = numberFour;

if {
    "numberOne + playerCount" = = = randomNumber
    console.log ("You Win!");
}

else if {
  "numberOne + playerCount" > randomNumber
  console.log ("You Lose");
}

else {
  alert("Click another Crystal! You still have a chance!");
}

if {
  numberTwo + playerCount === randomNumber
  console.log ("You Win!");
}

else if {
numberTwo + playerCount > randomNumber
console.log ("You Lose");
}

else {
alert("Click another Crystal! You still have a chance!");
}

if {
  numberThree + playerCount === randomNumber
  console.log ("You Win!");
}

else if {
numberThree + playerCount > randomNumber
console.log ("You Lose");
}

else {
alert("Click another Crystal! You still have a chance!");
}

if {
  numberFour + playerCount === randomNumber
  console.log ("You Win!");
}

else if {
numberFour + playerCount > randomNumber
console.log ("You Lose");
}

else {
alert("Click another Crystal! You still have a chance!");
}

// startGame()
// It's how we we will start and restart the game.
// (Note: It's not being run here. Function declarations like this are made for future use.)
function startGame() {

  // Reset the guesses back to 0.
  numGuesses = 9;


  // CRITICAL LINE
  // Here we *reset* the wrong guesses from the previous round.
  wrongGuesses = [];

  // Fill up the blanksAndSuccesses list with appropriate number of blanks.
  // This is based on number of letters in solution.
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  // Print the initial blanks in console.
  console.log(blanksAndSuccesses);


    // Log the current blanks and successes for testing.
    console.log(blanksAndSuccesses);
  }

  // If the letter doesn't exist at all...
  else {

    // Then we add the letter to the list of wrong letters.
    wrongGuesses.push(letter);

    // We also subtract one of the guesses.
    numGuesses--;

  }

}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made.
function roundComplete() {

  // First, log an initial status update in the console
  // telling us how many wins, losses, and guesses are left.
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  // HTML UPDATES
  // ============

  // Update the HTML to reflect the new number of guesses.
  document.getElementById("guesses-left").innerHTML = numGuesses;

  // This will print the array of guesses and blanks onto the page.
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  // This will print the wrong guesses onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  // If our Word Guess string equals the solution.
  // (meaning that we guessed all the letters to match the solution)...
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

    // Add to the win counter
    winCounter++;

    // Give the user an alert
    alert("You win!");

    // Update the win counter in the HTML
    document.getElementById("win-counter").innerHTML = winCounter;

    // Restart the game
    startGame();
  }

  // If we've run out of guesses
  else if (numGuesses === 0) {

    // Add to the loss counter
    lossCounter++;

    // Give the user an alert
    alert("You lose");

    // Update the loss counter in the HTML
    document.getElementById("loss-counter").innerHTML = lossCounter;

    // Restart the game
    startGame();

  }

}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================

// Starts the Game by running the startGame() function
startGame();

// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {

  // Converts all key clicks to lowercase letters.
  letterGuessed = String.fromCharCode(event.which).toLowerCase();

  // Runs the code to check for correct guesses.
  checkLetters(letterGuessed);

  // Runs the code that ends each round.
  roundComplete();
};

