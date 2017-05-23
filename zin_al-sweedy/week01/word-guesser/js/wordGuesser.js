var wordLetters = ['F','O','X'];
var guessedLetters =['_','_','_'];

var guessLetter = function (letter){
  for (var i = 0; i < wordLetters.length; i++) {
    if (wordLetters[i] === letter){
      guessedLetters[i] = letter;
      console.log("Congratulation you guesseed the right letter ");
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
