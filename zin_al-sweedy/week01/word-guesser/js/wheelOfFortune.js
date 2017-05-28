var wordLetters = ['F','O','X'];
var guessedLetters =['_','_','_'];
var rewardAmount = 0;
var guessLetter = function (letter){
  for (var i = 0; i < wordLetters.length; i++) {
    if (wordLetters[i] === letter){
      guessedLetters[i] = letter;
      rewardAmount =rewardAmount * (Math.random())*100;
      console.log("Congratulation you guesseed the right letter "+' your reward amount is '+ rewardAmount);
    }
    else {
      rewardAmount =rewardAmount - ((Math.random())*100);
      console.log(" your guessis not the right letter "+' your reward amount is desrease and become  '+ rewardAmount);
    }

  }
    var guess= false;
    for (var i = 0; i < guessedLetters.length; i++) {
    //  if (guessedLetters[i] === '_')
    if (wordLetters[i]===guessedLetters[i]){
        // console.log('the letter'+i+'is true');
        guess=true;
      }
       else {
         console.log('this letter is incorrect');
      //   guess=false;

       }
      }
      if (guess) {
        console.log('Congratulation, you found  a word Letters!');
        console.log(guessedLetters.join(''));
        console.log('Your reward amount is '+ rewardAmount);
      } else {
        console.log('not good, try again guesses!');
      }
};


guessLetter('F');
guessLetter('O');
guessLetter('X');
guessLetter('A');
guessLetter('T');
guessLetter('X');
