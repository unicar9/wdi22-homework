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



var answer = ['f','o','x'];
var guess = ['_','_','_'];

console.log('Guess this word!\n' + guess);

var guessLetter = function(x){

        for ( var i = 0; i<= answer.length ; i++ ){
          if ( x === answer[i]){
            var position = answer[i];
            guess.splice(i, 1, x);
            alert('you found a new letter! ' + x + '!' );
            console.log(guess.join());


                if (answer.join() === guess.join()){
                  alert('you won the game! ' + 'The word was ' + answer.join('') + '!');
                }

              return;

            }




        }




    }





guessLetter('f');
guessLetter('o');
guessLetter('x');
