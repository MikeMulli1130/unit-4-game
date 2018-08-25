//var list = ""; not sure what to do with this//

//computerNumber is the number under the buttons//
var computerNumber = "";

//crystalNumbers are the back end; var numberOne, etc., what to output when the buttons are pushed//
var crystalNumbers = "";
var numberOne, numberTwo, numberThree, numberFour;

//value range for the outputs//

numberOne >=1 && <= 49;
numberTwo >=1 && <=49;
numberThree >=1 && <=49;
numberFour >=1 && <=49;

//what the player selects//
var playerCount =['']


// Holds a list of guessed numbers 
var guessedNumbers = [];

// Holds all of the wrong guesses.
var wrongGuesses = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

/* random number this is shown to the player at the beginning of the game */

chosenNumber = computerNumber[Math.floor(Math.random() * list.length)];

//random number for the crystals//

randomNumber=crystalNumbers[Math.floor(Math.random()*crystalNumbers.length)];
console.log(randomNumber);


/* the game keeps going until the player either goes over the original random number or*/
/* or the player hits the number perfectly - if so, they win*/
/* if the player goes OVER the original random number then they lose:*/


document.getElementById("ruby").onclick = function(computerNumber) {
console.log(numberOne)
}

document.getElementById("emerald").onclick = function(computerNumber) {
  console.log(numberTwo)
  }

  document.getElementById("sapphire").onclick = function(computerNumber) {
    console.log(numberThree)
    }

    document.getElementById("topaz").onclick = function(computerNumber) {
      console.log(numberFour)
      }
      


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

function startGame() {

  // Reset the guesses back to 0.
  numGuesses = 9;


  //reset the wrong guesses from the previous round.
  wrongGuesses = [];


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

  // This will print the wrong guesses onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");


    // Add to the win counter
    winCounter++;

    

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

