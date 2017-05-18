// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var drEvil = function(amount) {
  if(amount === 1000000) {
    console.log(amount + ' dollars (pinky)');
  } else {
    console.log(amount + ' dollars');
  }
};

drEvil(1000000);

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function(string1, string2) {
  var part1 = string2.slice(0, 2) + string1.slice(2);
  var part2 = string1.slice(0, 2) + string2.slice(2);

  var whole = part1 + ' ' + part2;

  console.log(whole);
}

mixUp('dog', 'dinner');

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

var fixStart = function(str) {
  var array = str.split('');
  var i = 1
  while (i <= array.length, i++) {
    if(array[i] === array[0])
      array[i] = '*';
  };

  var str1 = array.join('');
  console.log(str1);
  return str1;
};

fixStart('google');
fixStart('gooogle');

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function(str) {
  if(str.length >= 3 && !(str.substr(-3) === 'ing')) {
    console.log(str + 'ing');
  } else if (str.substr(-3) === 'ing') {
    console.log(str + 'ly');
  } else {
    console.log(str);
  }
};

verbing('swim');
verbing('swimming');
verbing('do');

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


var notBad = function(str) {
  var wordNot = str.indexOf('not');
  var wordBad = str.indexOf('bad');
  var re = str.substring(wordNot);

  if (wordNot && wordBad && (wordBad > wordNot)) {
    console.log(str.replace(re, 'good'));
  } else {
    console.log(str);
  }
};

notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');

var notBad1 = function(str) {
  console.log(str.replace(/(not.*bad)/gi, 'good'));
};

notBad1('This dinner is bad!');
