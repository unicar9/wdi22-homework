// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


var answer = ['S','T','A','R'];
var attempt = ['_','_','_','_'];
console.log("Welcome to Word Guess. This word contains " + answer.length + " letters. Use guess('[put any letter here]') to play.");


var guess = function( g ) {

  for( var i = 0; i < answer.length; i++ ){

    if ( g.toUpperCase() === answer[i]) {
      attempt[i] = answer[i];

      console.log("Yes! '_' ");
    }
  } //for

  console.log(attempt.join(''));

  if ( attempt.join('') === answer.join('') ) {
    console.log('Oh no. You win.');
  }
};

guess('n');
guess('s');
guess('r');
guess('t');
