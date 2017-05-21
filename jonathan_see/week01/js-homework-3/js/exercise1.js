//Homework: The Word Guesser

//You'll create a simple word guessing game where the user gets
//infinite tries to guess the word (like Hangman without the hangman,
//or like Wheel of Fortune without the wheel and fortune).

//Create two global arrays: one to hold the letters of the word
//(e.g. 'F', 'O', 'X'), and one to hold the current guessed letters
//(e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

//Write a function called guessLetter that will:
//Take one argument, the guessed letter.
//Iterate through the word letters and see if the guessed letter is
//in there.
//If the guessed letter matches a word letter, changed the guessed
//letters array to reflect that.
//When it's done iterating, it should log the current guessed letters
//('F__') and congratulate the user if they found a new letter.
//It should also figure out if there are any more letters that need
//to be guessed, and if not, it should congratulate the user for
//winning the game.
//Pretend you don't know the word, and call guessLetter multiple
//times with various letters to check that your program works.

// var correctLetters = ['F', 'O', 'X'];
// var guessedLetters = ['_', '_', '_'];
//
// var guessLetter = function(guessedLetter) {
//
// // loop the guessed letter to see if it is a correct letter
//     for (var i = 0; i < guessedLetters.length; i++) {
//
// // if guessed letter is correct letter
//       if (guessedLetters[i] === correctLetters[0] || correctLetters[1] || correctLetters[2]) {
// // change guessed letters array to reflect correct letter
//       guessedLetters.push(correctLetters[i]);
// // congratulate for guessing a correct letter
//       console.log(guessedLetters + "Congratulations you've got one letter!");
// // if guessed letter is not correct
//       } else {
// // remove wrong guessed letter
//       guessedLetters.shift()
// // log the current guessed letters (join the letters)
//     };
// }
// //guessedLetters(box);
// guessLetter('B');

var correctLetters = ['F', 'O', 'X'];
var guessedLetters = ['_', '_', '_'];

var guessLetter = function(guess) {
  for (var i = 0; i < correctLetters.length; i++) {
    if (guess === correctLetters[i]) {
      guessedLetters[i] = guess;
    }
    console.log(guessedLetters.join(''));
    alert ("You got a letter");
  }
  if (correctLetters.toString('') !== guessedLetters.toString('')) {
    console.log("Keep going");
    alert ("Have another go");
    }
    else (correctLetters.toString('') === guessedLetters.toString('')) {
    console.log("You did it");
    alert ("Great Work!");
    }

  guessLetter('X');
