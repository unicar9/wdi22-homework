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

var letters = {
  first:['A','E','I','O','U','L','N','R','S','T'],
  second:['D','G'],
  third:['B','C','M','P'],
  fourth:['F','H','V','W','Y'],
  fifth:['K'],
  sixth:['J','X'],
  last:['Q','Z']
};

  var clacScores = function(word){
    var len= word.length;
    var scores =0;
    for (var i = 0; i < word.length; i++) {
      var ch= word[i];
      var char = ch.toUpperCase();
      switch(char) {
    if (char)
    case letters.first{
    function isInArray(letters.first, char)
    return days.indexOf(day.toLowerCase()) > -1;
}
}

isInArray(days, "Sunday");  // true

         scores++;
        break;
    case letters.second:
        scores+=2;
        break;
        case letters.third:
             scores+=3;
            break;
        case letters.fourth:
            scores+=4;
            break;
        case letters.fifth:
           scores+=5;
           break;
        case letters.sixth:
          scores+=8;
          break;
        case letters.last:
          scores+=10;
          break;

      default:
      console.log("You didnt enter a valid letter");

    }//switch
  }//for
  };//finc



clacScores("cabbage");
