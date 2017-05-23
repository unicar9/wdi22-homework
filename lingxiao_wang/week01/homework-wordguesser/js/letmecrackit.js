//Come on
var answer = ['S', 'K', 'Y'];
var guess = ['_', '_', '_'];
var wordGuessed = [];

var hp = 6;
var rew = 0;
var letterFound = false;

// guessLetter the main function
// checkLetter check if the letter matches the answer
// checkFinal check if the player wins or loses
// win: guess = answer
// lose: life runs out

// welcome
console.log("Welcome to Word Guesser. This word contains " + answer.length + " letters.");
// start status hp:6 $0
console.log("HP " + hp + " , $" + rew);

//fortune
var randRange = function(min, max) {
  var range = max - min;
  var result = min + (Math.random() * range);
  result = Math.floor(result);
  // console.log(result);
  return result;

var fortuneWheel = function(){

  var rewWheel = randRange(20,50);


};

var checkLetter = function(g){

  for (var i = 0; i < answer.length; i++) {
    if (g.toUpperCase() === answer[i]){
      letterFound = true;
      guess[i] = answer[i];
      rew
      console.log('You got one.');
    } else {



    }
  }//for

  console.log(guess.join(''));

};

var winOrLose = function(){

  if (guess.join('') === answer.join(''){
    console.log("You win");
  }

  if (hp === 0){
    console.log("You Lose");
    drawHangman();
  }

};

//main function here

var guessLetter( g ) {






winOrLose();

};

// var

//draw hangmen here
var drawHangman = function(){
  var hang =[ "  ____________" ,
              "  |    |      " ,
              "  |    |..O   " ,
              "  |      -|-  " ,
              "  |      /|   " ,
              "  |___________" ];

  for (var i = 0; i < hang.length; i++) {
    console.log(hang[i]);
  }
  console.log('You lose.');
};


//test here
guessLetter('S');
guessLetter('s');
guessLetter('a');
guessLetter('k');
guessLetter('y');
