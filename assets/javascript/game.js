//var list = ""; not sure what to do with this//

//computerNumber is the number under the buttons//
//var computerNumber  = Math.floor(Math.random() * 100);

//function randomWholeNum() {

 
//  return Math.random();
//}

var crystal = {
ruby: {
  name: "ruby",
  value: 0,
//how to call the object (line 15) - name of object, crystal
//crystal.ruby.value will give us the value
//crystal.sapphire.value will call the value for sapphire within the
//crystal object


//all four will go inside startGame fxn and equal to 
  //add the remaining colors here, sapphire, emerald, topaz
}, 
sapphire: {
  //etc...
}
}

var startGame = function (){
//current score = zero, so we can reset the score to zero
//here we are starting and resetting the game on line 26
//targetScore = getRandomNumber;
//start game fxn is bulk of logic; targetscre = randomnumber. every time the game starts
//we want game to be diffrernt
//in same fxn we want to set crystal values to be different
//by calling this fxn we values to be different every time
//last thing in this fxn will associate score with currentScore and targetScore with html - 
//resets current and target score to be reset every time
//now use jqury to associate $(“#your-score”).text(currentScore);
}

//must create a function called checkWin

//if current + target > random, we lost and we want to increase the loss count
//need to associate variable with loss count ID 
//need if statement - need to call the start function as well. 
//all inside the first statement: 
//$(“#loss-count”).text(lossCount);


else if (currentScore === targetScore) {
  alert("Congratulations! You Won!");
  
  winCount++;

  $("#win-count").text(winCount);

  startGame();
}



Collapse 

3:00 PM
Untitled 
var checkWin = function() {

// Check if currentScore is larger than targetScore
if (currentScore > targetScore) {
  alert("Sorry. You lost!");
  console.log("You Lost");

  // Add to Loss Counter
  lossCount++;

  $("#loss-count").text(lossCount);

  startGame();
}

else if (currentScore === targetScore) {
  alert("Congratulations! You Won!");
  console.log("You Won!");

  winCount++;

  $("#win-count").text(winCount);

  startGame();
}

};








//crystalNumbers are the back end; var numberOne, etc., what to output when the buttons are pushed//
var numb}erOne = 0, numberTwo = 0, numberThree = 0, numberFour = 0;
var crystalNumbers = [numberOne, numberTwo, numberThree, numberFour];

for(var  i = 0; i < crystalNumbers.length; i++){
  crystalNumbers[i] = getRandomNumber()
}

//value range for the outputs//

var getRandomNumber = function(){
  var result = 0

  result = Math.floor(Math.random()*49)

  return result
}
/*
numberOne >=1 && <= 49;
numberTwo >=1 && <=49;
numberThree >=1 && <=49;
numberFour >=1 && <=49;
*/
//what the player selects//
//var playerCount =['']


//var guessedNumbers = [];

// Holds all of the wrong guesses.
//var wrongGuesses = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

var currentScore =0;
var targetScore = 0;

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
  /*    
if(condition){
  then behavior
}else if(condition){
  
}
*/
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

