// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// // When they guess the word, log their final reward amount.


var answerWord = ["F","O","X"];
var runningResult = ["_","_","_"]
var prize = 100
var prizeRound = Math.random().toFixed(2)*100

var guessLetter = function(guess){
  for (var i = 0; i < answerWord.length; i++) {
    if (guess === answerWord[i]){
      {runningResult[i] = guess;
        prize += prizeRound;
      }
      console.log('Successs: ' + runningResult.join('') + ' Your current balance is $' + prize);
      alert ("You got a letter!");}
} //for
    if (answerWord.toString('') !== runningResult.toString('')){
      prize -= 10;
      console.log("That's not it, keep going. Your current balance is $" + prize);
      alert ('have another go')
    } else {
      console.log('You did it! You won $' + prize);
      alert ('Great work!');
    }
  };
guessLetter('X');
guessLetter('F');
guessLetter('J');
guessLetter('O');
