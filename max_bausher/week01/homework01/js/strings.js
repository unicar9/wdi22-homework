// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var drEvil = function(amount){
  if (amount === 1000000) {
    console.log(amount + " dollars (pinky)");
  } else {
    console.log(amount + " dollars");
  };
};

drEvil(10);
drEvil(1000000);



// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function(strOne, strTwo){
    var stringNewOne = strOne.substr(0,2) + strTwo.substr(2);
    var stringNewTwo = strTwo.substr(0,2) + strOne.substr(2)
  console.log(stringNewOne + " " + stringNewTwo);
};

mixUp("Maximus", "Jessica");

// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'
// Verbing

var fixStart = function(strOriginal){
  return(strOriginal.charAt(0));
  for (i = 0; i < strOriginal.length; i++) {
      return(str.replace(/b/gi,'*'));
    }
    var newString = function(str) {
     strOriginal.replace(, "*");
     console.log(newString);
   }
  };
  var newString = strOriginal;
  console.log(newString.replace(strOriginal.charAt(0), "*"));
};

fixStart('babble');

//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function(string){
    if (string.length > 3 && string.endsWith("ing")){
      console.log(string.replace("ing", "ly"));
    } else if (string.length > 3){
      console.log(string.concat("ing"));
    } else {
      console.log(string);
    };
};

verbing('swim');
verbing('swimming');
verbing('go');


// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'


var notBad = function(str){
    if (str.includes("not") && str.includes("bad")){
      var buffer;
      var indexNot = str.indexOf("not");
      var indexBad = str.lastIndexOf("bad");
      for (var i = 0; i < str.length; i++) {
       if (i >= indexNot && i <= indexBad) {}
       else {
         buffer += str[i];
       }
     }
       console.log(buffer);
    };
  };


var notBad = function(str) {
  return(str.replace(/(not.*bad)/gi,'good'));
}
console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
