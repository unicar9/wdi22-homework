// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

var arrWord = ['F', 'O', 'X'];
var arrGuess = [];
var arrGuessAll = [];
var hangman = 0;
var hangmanPic = ['______',
                  '  |   ',
                  '  O   ',
                  ' -|-  ',
                  ' | |  ',
                  '______']

var guessLetter = function (n) {

  var letterFound = false;
  arrGuessAll.push(n);

  for (var j = 0; j < (arrGuessAll.length - 1); j++) {
    if (arrGuessAll[arrGuessAll.length - 1] === arrGuessAll[j]) {
      arrGuessAll.pop(arrGuessAll.length - 1);
    }
  }

  for (var i = 0; i < arrWord.length; i++) {
    if (n === arrWord[i] ) {
      arrGuess.push(n);
      arrGuess[i] = arrWord[i];
      letterFound = true;
      hangman -= 1;
    }
  }

  if (arrGuess.length !== 0) {
    console.log('Congratulations, you found a new letter ' + String(n));
  }
  var remain = arrWord.length - arrGuess.length;
  if (remain > 0) {
    console.log(remain + ' more letter(s) to be guessed!');
  } else if (remain === 0) {
    console.log('Congratulations, you win the game! The word is ' + arrGuess.join('') + '.');
  } else {
    console.log('Please try again.');
  }

  if (!letterFound) {
    hangman += 1;
    for (var i = 0; i < hangman; i++) {
      console.log(hangmanPic[i]);
    }
    if (hangman === 6) {
      for (var i = 0; i < hangmanPic.length; i++) {
        console.log(hangmanPic[i]);
      }
      hangman = 0;
      console.log('You lost the game, please try again.');

    }

    return;
  }
};

guessLetter('M');
guessLetter('B');
guessLetter('N');
guessLetter('P');
guessLetter('W');
guessLetter('L');

guessLetter('M');
guessLetter('F');
guessLetter('O');
guessLetter('X');
guessLetter('X');
