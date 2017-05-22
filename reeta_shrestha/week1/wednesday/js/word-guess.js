// var arrayOfWords = ["Kangaroo", "Rhino", "Wallaby", "Echidna", "Owl"];
//
// for (var w = 0; w < arrayOfWords.length; w++) {
//
//   console.log(arrayOfWords[w]);
//
//   for (var l = 0; l < arrayOfWords[w].length; l++) {
//     console.log(arrayOfWords[w][l]);
//   }
// }

var word = "kangaroo".split("");
var guessed = "________".split("");

var guessLetter = function(input) {
  var found = false;
  for (var i = 0; i < word.length; i++) {
    if (word[i] == input) {
      guessed[i] = input;
      found = true;
    }
  }
  if (found == true) {
    console.log("Congratulations, you found a new letter.");
  } else {
    console.log("Sorry, try again.");
  }
  console.log(guessed);

  var remaining = false;
  for (var i = 0; i < guessed.length; i++) {
    if (guessed[i] == "_") {
      remaining = true;
    }
  }
  if (remaining == false) {
    console.log("Congratulations, you won the game!");
  }
}

guessLetter('l');
guessLetter('o');
guessLetter('a');
guessLetter('z');
guessLetter('k');
guessLetter('r');
guessLetter('g');
guessLetter('n');
