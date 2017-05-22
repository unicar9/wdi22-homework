// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

var arrWord = ['F', 'O', 'X'];
var arrGuess = [];

var guessLetter = function (n) {
  var letterFound = false;
  var reward = 0

  for (var i = 0; i < arrWord.length; i++) {
    if (n === arrWord[i] ) {
      letterFound = true;
      arrGuess.push(n);
      arrGuess[i] = arrWord[i];
    }
  }

  if (letterFound) {
    reward += Math.floor(Math.random() * 100) + 1;
  }

  if (!letterFound) {
  	console.log('Sorry, try again.')
    reward -= Math.floor(Math.random() * 100) + 1;
  }

  if (arrGuess.length !== 0) {
    console.log('Congratulations, you found a new letter ' + String(n));
    console.log('Now you reward amount is $' + reward + '.');
  }
  var remain = arrWord.length - arrGuess.length;
  if (remain !== 0) {
    console.log(remain + ' more letter(s) to be guessed!');
  } else {
    console.log('Congratulations, you win the game! The word is ' + arrGuess.join('') + '.');
    console.log('Your final reward amount is $' + reward + '.');
  }
};


guessLetter('F');
guessLetter('M');
guessLetter('O');
guessLetter('X');
