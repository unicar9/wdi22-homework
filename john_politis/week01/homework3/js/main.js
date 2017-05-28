//
// Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess
//    the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
//     Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the
//     current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
//
//     Write a function called guessLetter that will:
//     Take one argument, the guessed letter.
//     Iterate through the word letters and see if the guessed letter is in there.
//     If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
//     When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a
//     new letter.
//
//     It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate
//     the user for winning the game.
//
//     Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
//
// Bonus: Make it more like Wheel of Fortune:
//
//     Start with a reward amount of $0
//     Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
//     When they guess the word, log their final reward amount.
//
// Bonus: Make it like Hangman:
//
//     Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a
//     letter twice, do nothing.
//
//     Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time
//     they make a wrong guess.
//
//     Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and
//    show a hangman on the log.


/**
* Author: John Politis
* Date: 17/05/2017
* Description : Set up some global storage
*/
var CONST_HANGMAN           = 6;
var wordToGuess             = "FOX".split('');      //convert to array
var guessedWords            = "___".split('');     //convert to array
var maxLettersToGuess       = wordToGuess.length;   //store the max letters
var remainingLettersToGuess = maxLettersToGuess;    //store the max letters
var attemptsMade            = 0;                    //store the attempts made
var reward                  = 0;                    //reward the user
var hangmanScore            = 0;                    //

console.log('=========================== Homework: The Word Guesser =============================');

/**
 * Author: John Politis
 * Date: 17/05/2017
 * Description : Game loop
 */
var gameStart = function() {

  while( hangmanScore !== CONST_HANGMAN && remainingLettersToGuess !== 0) {
    guessLetter( generateRandomLetter() );
    console.log("");
    console.log("_____ R E W A R D   $" + reward + "_______");
    console.log("");

  }

  console.log( hangmanScore === CONST_HANGMAN ? "_____H A N G M A N !!!!______" : "_________DONE!!!!!!!_________________");
  console.log("");
  console.log("");

}

/**
 * Author: John Politis
 * Date: 17/05/2017
 * Description :
 */
var guessLetter = function(letterToFind) {
  attemptsMade++;
  var matched = false;
  ++hangmanScore;           //assume by default we did not find a match

  for (var i = 0; i < wordToGuess.length; i++) {
      if ( guessedWords[i] === '_' && wordToGuess[i] === letterToFind ) {
          guessedWords[i] = letterToFind;
          remainingLettersToGuess--;
          matched = true;
          reward = Math.round(Math.random() * 1000);    //reward the user for a correct guess
          --hangmanScore;                               //flip it as found
      }
  }
  console.log( letterToFind + "    " + guessedWords + "    attemps: " + attemptsMade + (matched === true ? "  <<<===" :"") );
}

/**
 * Author: John Politis
 * Date: 17/05/2017
 * Description : Generates a random Character from the alphabet...
 */
var generateRandomLetter = function () {
  var alphaSet = "abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRESTUVWXYZ";    //only use this character stream.

  return alphaSet[Math.round(Math.random() * 100) % 52 ];
}

/**
 * Author: John Politis
 * Date: 17/05/2017
 * Description : kick off the game
 */
gameStart();
