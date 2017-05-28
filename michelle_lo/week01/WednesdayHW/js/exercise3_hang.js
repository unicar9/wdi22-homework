// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.


var answerWord = ["F","O","X"];
var runningResult = ["_","_","_"]
var lives = 6

var guessLetter = function(guess){
  for (var i = 0; i < answerWord.length; i++) {{
    if (guess === answerWord[i] && guess !== runningResult[i]){
        {runningResult[i] = guess;
                  }
        console.log('Successs: ' + runningResult.join('') + " You have " + lives + " lives left");
        alert ("You got a letter!");}
      };
    }
    {
     if (lives>1 && answerWord.toString('') !== runningResult.toString('')){
       lives = lives - 1;
        console.log("That's not it, keep going. You have " + lives + " lives left");
        alert ('have another go')}{
        if (lives < 1)
      {console.log("You're dead!")};} //code stops when lives = 1, so can't show that you
    }
    {
     if (answerWord.toString('') === runningResult.toString('')){
        console.log("You did it! You're alive");
        alert ('Great work!')}
    ;}

guessLetter('X');
guessLetter('F');
guessLetter('J');
guessLetter('F');
guessLetter('D');
guessLetter('W');
guessLetter('Q');
guessLetter('P');
guessLetter('B');
guessLetter('B');
guessLetter('B');
