DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million.
// //var DrEvil = function(amount){
//   if (amount > 1000000)
//   {return amount + ' dollars (pinky)';
// }else {
//   return amount + ' dollars';
// };}
// console.log(DrEvil(2974635347))
// console.log(DrEvil(2))

var DrEvil = function(amount){
  if (amount > 1000000)
  {console.log(amount + ' dollars (pinky)');
}else {
  console.log(amount + ' dollars');
};}
DrEvil(2974635347);
DrEvil(2)


//MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

// var mixUp = function (string1) {
//   console.log(string1.[0, 2]);
// }
// mixUp ("abcdef")

var mixUp = function (string1, string2) {
  var updatedString1 = string1.replace(string1.substring(0,2) , string2.substring(0,2));
  console.log(updatedString1);
  var updatedString2 = string2.replace(string2.substring(0,2) , string1.substring(0,2));
  console.log(updatedString2);
}
mixUp('abcdefg', 'zyx');

// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

var verbing = function(stringNew) {
  var checkLastThree = stringNew.substring((stringNew.length - 3),(stringNew.length));
  if (checkLastThree === 'ing') {
    console.log(stringNew + 'ly')}
  else if (stringNew.length > 3){
    console.log(stringNew + 'ing');
  }  else {console.log(stringNew);};
  }
  // else if (stringNew.length >=3) {console.log (stringNew + 'ing')}
verbing('swimming');
verbing('bob');
verbing('test');

// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

var notBad = function(string) {
  var stringLocationNot = string.indexOf("not");
  var stringLocationBad = string.indexOf("bad");
  if (stringLocationNot < stringLocationBad)
    {console.log(string.replace(string.substring((stringLocationNot),(stringLocationBad + 3)) , 'good'));
  } else {console.log(string);}

}
notBad('coding is not so bad')
notBad('eating is fantastic')
// var updatedString1 = string1.replace(string1.substring(0,2) , string2.substring(0,2));
