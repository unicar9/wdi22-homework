// var letterValues = {
//
// "A":[1],
// "E":[1],
// "I":[1],
// "O":[1],
// "U":[1],
// "L":[1],
// "N":[1],
// "R":[1],
// "S":[1],
// "T":[1],
// "D":[2],
// "G":[2],
// "B":[3],
// "C":[3],
// "M":[3],
// "P":[3],
// "F":[4],
// "H":[4],
// "V":[4],
// "W":[4],
// "Y":[4],
// "K":[5],
// "J":[8],
// "X":[8],
// "Q":[10],
// "Z":[10]
// };
//
//
//
// var playedWord = function (l1,l2,l3,l4,l5,l6,l7) {
//
// var played1 = letterValues[l1];
//
// for (var playedWord in letterValues) {
// console.log( played1 );
// }
//
// };
//
// playedWord("C","A");

//solution
var scrabble = {
  // letterScores:{
  //   1: "AEIOULNRST".split(''),
  //   2: ["D","G"],
  //   3: "BCMP".split(''),
  //   4: "FHVWY".split(''),
  //   5: ["K"],
  //   8: ["J,X"],
  //   10:["Q","Z"]
  // }
  //
  // score: function (word) {
  // // can't control what people are going to parse into this function (in terms of case)
  // word = word.todoupperCase();
  // //initial value for the total score of the word
  // var sum = 0;
  // //itterate over the word that is input and then look at each character
  //   for (var i = 0; i < word.length; i++) {
  //   var letter = word[i];
  //   //use of this below, figure out
  //     for(var key in this.letterScores){
  //     //includes gives back boolean
  //       if (this.letterScores[key].includes(letter)){
  //         sum += parseInt(key);
  //         console.log(letter +" gets a "+ key);
  //
  //       }//if
  //     }//for...in
  //   }//word letter
  //   return sum;
  // },//end score
  //better solution. diff data structure try i.e. what i tried first:
  letterScoresAlternative: {
"A":1,
"E":1,
"I":1,
"O":1,
"U":1,
"L":1,
"N":1,
"R":1,
"S":1,
"T":1,
"D":2,
"G":2,
"B":3,
"C":3,
"M":3,
"P":3,
"F":4,
"H":4,
"V":4,
"W":4,
"Y":4,
"K":5,
"J":8,
"X":8,
"Q":10,
"Z":10
  },

  scoreAlternative: function (word){

    word = word.toUpperCase();
    var sum = 0;

    for (var i = 0; i < word.length; i++) {
      var letter = word[i];
      var letterScore = this.letterScoresAlternative[letter];

      sum += letterScore;
      console.log(letter.toUpperCase()+ " gets a " + letterScore + sum);
    }
return sum;
  }



};

console.log(scrabble.scoreAlternative("superman"));

//better solution:




// Scrabble
//,"A","B","D","F","G","N"
// Write a program that will replicate the scoring system in Scrabble. The function should take a single argument (the word, comprised of letters/tiles) and return a score.
//
// Letter Values
//
// You'll need these:
//
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// So now that you've got those letter values, consider what data structure is good for mapping keys to values?
//
// Examples
//
// "cabbage" should be scored as worth 14 points:
//
// 3 points for C
// 1 point for A, twice
// 3 points for B, twice
// 2 points for G
// 1 point for E
// And to total:
//
// 3 + 2*1 + 2*3 + 2 + 1
// = 3 + 2 + 6 + 3
// = 5 + 9
// = 14
