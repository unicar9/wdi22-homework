var wordLetters = ['F','O','X'];
var guessedLetters =['_','_','_'];
var rewardAmount = 0;
var rightCounter = 0;
var wrongCounter = 6;
var i=0;
var guess= false;
var guessLetter = function (letter){
 if(wrongCounter > 0){
  //  for (var i = 0; i < wordLetters.length; i++) {
    //  if (wordLetters === letter){
    if (wordLetters.includes(letter)){
      guessedLetters[i] = letter;
      // push in array guessedLetters.push [i];
      i++;
      rewardAmount =rewardAmount+ (Math.round((Math.random()*100).toFixed(0)));
      console.log("Congratulation you guesseed the right letter "+' your reward amount is increase and become '+ rewardAmount);
      rightCounter+=1;
      guess=true;
    }else {
      rewardAmount = rewardAmount - 5;
      // rewardAmount - ((Math.random())*100);
      console.log(" your guess is not the right letter "+' your reward amount is desrease and become  '+ rewardAmount);
      wrongCounter = wrongCounter - 1;
      guess=false;
     }
  // }
}else {
  console.log("You hanged. try again");
  }
  if (guessedLetters===wordLetters){
    console.log("Congratulation you won rewdrd"+ rightCounter);
  }
    //
    // for (var i = 0; i < guessedLetters.length; i++) {
    // //  if (guessedLetters[i] === '_')
    // if (wordLetters[i]===guessedLetters[i]){
    //     // console.log('the letter'+i+'is true');
    //     guess=true;
    //   }
    //    else {
    //      console.log('this letter is incorrect');
    //   //   guess=false;
    //
    //    }
    //   }
      // if (guess) {
      //   console.log('Congratulation, you found  a word Letters!');
      //   console.log(guessedLetters.join(''));
      //   console.log('Your reward amount is '+ rewardAmount);
      // } else {
      //   console.log('not good, try again guesses!');
      // }

//return wrongCounter;
};


 guessLetter('Z');
 guessLetter('F');// guessLetter('B');
 guessLetter('o');
 guessLetter('T');
 guessLetter('X');
guessLetter('C');
guessLetter('T');
// guessLetter('X');
