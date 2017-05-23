// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10

var scrabble = {
  letterscores: {
    1: "AEIOULNRST".split(''), //turns into ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]
    2: ["D", "G"],
    3: "BCMP".split(''),
    4: "FHVWY".split(''),
    5: "K".split(''),
    8: ["J", "X"],
    10: ["Q", "Z"]
  },

  score: function( word ){
    //make the input ot uppercase
    word = word.toUpperCase();
    // Initial value for the total score of the word.
    var sum = 0;
    //Iterate over the word, look at each character in the word.
    for (var i = 0; i < word.length; i++) {
      var letter = word[i];
      for(var key in this.letterscores){
        //check to see if this letter is pressent in the array.
        if( this.letterscores[key].includes(letter)){
          //If so add that score to the sum
          sum += parseInt(key);
          console.log(letter + " gets a " + key);

        } //if
      } //for .. in
    } //word letter
    return sum;
  }, // end score

  //TRY AGAIN YOUR CODE WILL BE EASIER WITH A DIFFERENT DATA STRUCTURE
  //
  letterScoresAlternative: {
    'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1,
    'u' : 1, 'l' : 1, 'n' : 1, 'r' : 1,
    's' : 1, 't' : 1, 'd' : 2, 'g' : 2,
    'b' : 3, 'c' : 3, 'm' : 3, 'p' : 3,
    'f' : 4, 'h' : 4, 'v' : 4, 'w' : 4,
    'y' : 4, 'k' : 5, 'j' : 8, 'x' : 8,
    'q' : 10, 'z' : 10
  },
  scoreAlternative: function( word ){

    word = word.toLowerCase();
    var sum = 0;

    for (var i = 0; i < word.length; i++) {
      var letter = word[i];
      var letterScore = this.letterScoresAlternative[letter]; //|| 0;
      // if (!letterScore){
      //   continue;
      // };
      sum += letterScore;
      console.log(letter.toUpperCase() + " gets a " + letterScore);
    }
    return sum;
  }
};

console.log( scrabble.scoreAlternative("SuperMan"));
console.log( scrabble.score("SuperMan"));
