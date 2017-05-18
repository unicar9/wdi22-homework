// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

var lettersOfWord = ['F', 'O', 'X'];
var guessedLetters = ['', '', ''];
var reward = [];
var finalScore;

var rewardCalculator = function() {
  function getRandomInt(min,max) {
    console.log("initialize");
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  };
};

var rewardAnalyzer = function() {
  for (var i = 0; i < guessedLetters.length; i++) {
      if (guessedLetters[i].toString == lettersOfWord[i].toString) {
        reward[i] = (rewardCalculator(1,100));
        console.log("Great job, you found one and get points!")
        console.log(reward.toString);
  } else if (guessedLetters[i].toString != lettersOfWord[i].toString){
        reward.pop();
        console.log("Sorry, bad guess! You lose your last points")
  } else if (lettersOfWord.toString == guessedLetter.toString){
        var finalScore = reward.reduce(function(a, b){
          return a + b; }, 0)
          console.log("You're taking home the money!");
        }
      };
    };

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
var guessLetters = function(guess) {
    for (var i = 0; i < lettersOfWord.length; i++) {
       if (guess == lettersOfWord[i]){
         // If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
         guessedLetters[i] = guess;
         // When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
         console.log(guessedLetters);
          alert("You guessed one, keep going!");
          rewardAnalyzer();
         // It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
           if (lettersOfWord.toString() == guessedLetters.toString()){
              alert("You got it!");
          } else {
            console.log("No match, keep trying!");
          }
        }
      };
    };


// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
guessLetters("M");
guessLetters("F");
guessLetters("O");
guessLetters("X");

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
