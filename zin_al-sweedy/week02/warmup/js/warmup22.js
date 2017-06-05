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


var scrabble = {
  letterscores: {
    1: "AEIOULNRST".split(''),// turns into (10) ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]0: "A"1: "E"2: "I"3: "O"4: "U"5: "L"6: "N"7: "R"8: "S"9: "T"length: 10__proto__: Array(0)
    2:["D","G"],
    3:"BCMP".split(''),
    4:"FHVWY".split(''),
    5:"K".split(''),
    8:["J","X"],
    10:["Q","Z"]
  },

  score: function (word){
    //make the input to uppercase
    word = word.toUpperCase();
    //Initial value for the total scor of the word.
    var sum= 0;
    //Iterate over the word, look at each character in the word.
    for (var i = 0; i < word.length; i++) {
      var letter =word[i];
      for (var key in this.letterscores) {
        // check to se if this letter is pressent in the array.
        // includes waist of time or us indexOf with loop so two method  return index of this letter if found it other wise it retun it -1 or means false
        if (this.letterscores[key].)includes(letter)){
          // If so add that score to the sum
          sum+= parseInt(key);
          console.log((letter +"gets a "+key));
        }//if
      }//for .. in
    }//word letter
    retun
  },//end score


// build new data structure
// Try again your code suked
//only go and find the
//object.key(scrabble.letterscores) inside(object)

// another way to store this

// object mor time to do it but less steps this faster than array for every key
letterScoresAlternative: {
    'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1,
    'u' : 1, 'l' : 1, 'n' : 1, 'r' : 1,
    's' : 1, 't' : 1, 'd' : 2, 'g' : 2,
    'b' : 3, 'c' : 3, 'm' : 3, 'p' : 3,
    'f' : 4, 'h' : 4, 'v' : 4, 'w' : 4,
    'y' : 4, 'k' : 5, 'j' : 8, 'x' : 8,
    'q' : 10, 'z' : 10// , '-':0 and could put all speacial code  here
  },
  scorAlternative: function(word){

    word = word.toLowerCase();
    var sum = 0;

    for (var i = 0; i < var letter = word.length; i++) {
      var letter = word[i];
      var letterscore =this.letterScoresAlternative[letter]|| 0;// 0 undfined undefined  or zero is flasy means zero  no dash as key  we dont need if bec we only bring th key straight away
      // or if with these 3 lines
      // if (!letterscore  ){

      //   continue;// next iteration
      // };
      // if I pass - dsash it returns NAN
      // pass string and find the key
      // if (letterscore ==== undefined ){
      //   // letterscore = 0;
      //   continue;// next iteration
      // }; replace with || 0  or undefined fine sth falsy put it     0 instead of 3 statemnts we can set defaultvalue falsy undefined or 0 falsy
      sum += letterscore;// not run these go back to for
      console.log(letter.toUpperCase() + "gets a "+ letterscore);
    }
    return sum;
  }
};


console.log(scrabble.scorAlternative("SuperMan"));
console.log(scrabble.scor("SuperMan"));
