

// Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

var word = ['F','O','X'];
var currentGuessedLetters = ['_','_','_'];

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// var alphabet = 'ABCDEFFFFFHIJKLOOOOOXXXXXX'.split('');
// var alphabet = 'FFFFFFFFOOOOOOOOXXXXXXXXXX'.split('');


var inputTracker = [];

var youWin = false;
var youHang = false;
var hangmanCounter =0;

var reward = 0;


//simulate random user input from 26 letters
var userInput = function(){

  var validInput = false;

  while (! validInput) {
    var inputIndex = Math.floor((Math.random() * 26 ));
    var input = alphabet[inputIndex];
    validInput = true;
    for (var i = 0; i < inputTracker.length; i++) {
      if(inputTracker[i] === input){
        validInput = false;
      }
    }
  }

  inputTracker.push(input);
  return input;
}

//return how many times the the guessed letter occurs in the word
var letterInWord = function (letter) {
  var rewardMultiplier = 0;
  for ( var i = 0; i < word.length; i++ ) {
    if ( word[i] === letter && currentGuessedLetters[i] === '_') {
      currentGuessedLetters[i] = letter;
      rewardMultiplier ++;
    }
  }

  return rewardMultiplier;
}

//check if all the letters in the word has been guessed correctly, aka winning the game
var checkForWin = function() {
  for (var i = 0; i < currentGuessedLetters.length; i++) {
    if (currentGuessedLetters[i] === '_') {
      return false;
    }
  }
  return true;
}


var addReward = function(rewardMultiplier) {
  if (rewardMultiplier ==0) {
  reward -= (Math.floor(Math.random()*10 +1));
  } else {
    reward += (Math.floor(Math.random()*10 +1)) * rewardMultiplier;
  }
  return reward;
}

var guessLetter =  function(letter){
  var counter = letterInWord(letter);
  if (counter) {
    if (checkForWin()) {
      console.log("congratulations, you win! ",letter,currentGuessedLetters.join(''));
      console.log("Total Reward: ", addReward(counter));
      youWin = true;
    } else {
    console.log("congratulations, find a match",letter,currentGuessedLetters.join(''));
    }
  } else {
    addReward(counter);
    hangmanCounter ++;
    if (hangmanCounter >=6) {
      console.log("You hang!");
      youHang = true;
    }
    console.log("wrong letter! ",letter, currentGuessedLetters.join(''));
  }
}

//simulate user input until win
while (! youWin && ! youHang) {
  var le = userInput();
  guessLetter(le);
}
