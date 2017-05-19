// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').



var rewardCalculator = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
//
// var rewardAnalyzer = function() {
//   for (var i = 0; i < guessedLetters.length; i++) {
//       if (guessedLetters[i].toString == lettersOfWord[i].toString) {
//         reward += 1;
//         console.log("Great job, you found one and get 1 points!")
//         // console.log(reward.toString);
//   } else if (guessedLetters[i].toString != lettersOfWord[i].toString){
//         reward -= 1;
//         console.log("Sorry, bad guess! You lose your last points")
//   } else if (lettersOfWord.toString == guessedLetter.toString){
//         // var finalScore = reward.reduce(function(a, b){
//         //   return a + b; }, 0)
//           console.log("You're taking home the money! Which is " + reward + "dollars");
//         }
//       };
//     };

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.

var lettersOfWord = ['F', 'O', 'X'];
var guessedLetters = ['_', '_', '_'];
var reward = 0;



// var guessLetters = function(guess) {
//     var letterMatch = false;
//     for (var i = 0; i < lettersOfWord.length; i++) {
//
//        if (guess === lettersOfWord[i]){
//             var letterMatch = true;
//          // If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
//             guessedLetters[i] = guess;
//             reward += 1;
//          // When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
//             console.log(guessedLetters);
//             console.log("You guessed one, keep going!");
//
//          // It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
//        } else /*(guess != lettersOfWord[i])*/ {
//             i = lettersOfWord.length
//             console.log("No match, keep trying!");
//             reward -= 1;
//           }
//         // } if (lettersOfWord.toString == guessedLetters.toString){
//         //     console.log("You're taking home the money! Which is " + reward + "dollars");
//         // }
//       }
//     };
//

// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

var guessLetters = function(guess) {

    var letterMatch = false;
    for (var i = 0; i < lettersOfWord.length; i++) {

      console.log('guess:' + guess + ', lettersOfWord[' + i + ']:' + lettersOfWord[i] );
      console.log('guess === lettersOfWord[i]', guess === lettersOfWord[i]);
       if (guess === lettersOfWord[i]){
            var letterMatch = true;
         // If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
            guessedLetters[i] = guess;
            reward += rewardCalculator(1,10);
         // When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
            console.log(guessedLetters);
            console.log("You guessed one, keep going!");

         // It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.

       }

      } // for

      if( letterMatch === false ){
         console.log("No match for " + guess + ", keep trying!");
         reward -= rewardCalculator(1,10);
       }

      if (lettersOfWord.toString() == guessedLetters.toString()){
          console.log("You're taking home the money! Which is " + reward + " dollars");
      }

    };

    guessLetters("F");
    guessLetters("M");
    guessLetters("O");
    guessLetters("X");


// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
