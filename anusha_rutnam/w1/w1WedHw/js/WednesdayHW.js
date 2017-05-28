var word = ['F', 'O', 'X'];
var guessed = ['_', '_', '_'];

//
var guessLetter = function (letter) {
  for (var i = 0; i < word.length; i++){
if (letter == word[i]);
{guessed[0] = (guessLetter);}

console.log(guessed);

  }

}
guessLetter('F');

// michelle's pres
var word = ['F', 'O', 'X'];
var guessed = ['_', '_', '_'];
//here var guessed really means 'correctly guessed'. if a letter that the user enters is the same as one of the values in the variable word's array, it should replace ne of the underscores in the guessed array
//
var guessLetter = function (guess) {
  // a function called guessLetter. Its parameter is the letter that the guesser guesses and so is called guess.

  for (var i = 0; i < word.length; i++){{

//iterates through each value of var word's array, as many times as there are letters/items/values

if ({guessed[0] = word[i];}{
  //if the user inputs
}

  letter == word[i]);
{guessed[0] = (guessLetter);}
//the make the first guessed value the same as what was inputed
console.log(guessed);

  }

}
guessLetter('F');


// how to do case insensitive guess letter compare to word, does double equals do it
// why isn't f being pushed to position 0 in guessed


// Homework: The Word Guesser
//
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
//
// var guessLetter = () {}
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

// Array and Functions Bonus Material
//
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// Bonus
//
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
// Raw
//  js-homework-3.md

// var maxOfTwoNumbers = function (num1,num2){
// if (num1 > num2); {console.log(num1)};
// else {console.log (num2)};
//
//
// };
//
// maxOfTwoNumbers(5,3);

var wordLetters     = ['G', 'O', 'A', 'T'];
var guessedLetters  = ['_', '_', '_', '_'];
//here var guessedLetters really means 'correctly guessed'. if a letter that the user inputs is the same as one of the values in the var wordLetters' array, it should replace one of the underscores in the guessed array

function guessLetter(letter) {
// a function called guessLetter. Its parameter is the letter that the guesser inputs and so is called 'letter'
    var goodGuess = false;
    var moreToGuess = false;
    // what do these do, why start these false *these variables are the basis upon which the final console logs issue. the for thing below decides two things 1) whether these two vars will switch to true (i guess so the default is not prompting the console logs) and 2)they do the behind the scenes pushing of letters to the guessedletters var array
    for (var i = 0; i < wordLetters.length; i++) {
//iterates through each value of var wordLetters' array, as many times as there are letters/items/values, one at a time
        if (wordLetters[i] == letter) {
          //if wordLetters[i] i.e. either g,o,a or t matches letters which is the parameter of this function, i.e. the letter the user inputs
            guessedLetters[i] = letter;
//if true, change one of the values of guessed letter to that correctly inputed letter
            goodGuess = true;
            //if true then now goodGuess is true
        }
        if (guessedLetters[i] == '_') {
//why not else if. is this responding to that last line of code? i.e had letter been correct then guessedLetters [i] would not be _
//i think it is. so if first block of guess letter as caused this on to be true.
            moreToGuess = true;

        }//so by this point all the populating of guessedLetters with correctly guessed values has happen. it just hasn't been shown to user yet
    }
    if (goodGuess) {
        console.log('Yay, you found a letter!');
        console.log(guessedLetters.join(''));
        //joins the elements of an array into a string, and returns the string. The elements will be separated by a specified separator. The default separator is comma (,).


        if (!moreToGuess) {
            console.log('YOU WON!');
        }
    } else {
        console.log('Oh noes, thats not right!');
    }
}

guessLetter('G');
guessLetter('I');
guessLetter('O');
guessLetter('A');
guessLetter('T');
