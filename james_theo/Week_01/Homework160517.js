
var squareNumber = function (number) {
  var result = number * number;
  console.log("The result of squaring " + number + " is " + result);
}

var halfNumber = function (number) {
  var result = number / 2;
  console.log("The result of halving " + number + " is " + result);
}

var percentOf = function (num1, num2) {
  var result = num1 / num2 * 100;
  console.log(num1 + " is " + result + "% of " + num2);
}

var areaOfCircle = function (radius) {
  var result = Math.PI * radius * radius ;
  console.log( "The area for a circle with radius " + radius + " is " + result.toFixed(2) );
}

var calculator = function (number) {

}

squareNumber(12);
halfNumber(20);
percentOf(10, 1000);
areaOfCircle(10);
calculator(100);

// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
// It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result.
// It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number,
// and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
// It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

// Bonus: Round the result so there are only two digits after the decimal.
//
//
// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
//
var drEvil = function (number){
  if (number === 1000000) {
    console.log(number + ' dollars pinky');
  } else {
    console.log(number + ' dollars');
  }
}

drEvil(1000000);

var mixUp = function (s1, s2) {

  result = s1 + ' ' + s2
}

var fixstart = function (string) {
  string.includes(string.charAt(0))
}

var notBad = function (string) {
  if (string.includes('not bad')) {
//
//   }
// }
//
// drEvil(1000000);
// drEvil(1000);
// mixUp();

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)




// MixUp
//
// // Create a function called mixUp.
// It should take in two strings, and return the concatenation of the two strings (separated by a space)
// slicing out and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long. For example:
// //
// //   mixUp('mix', 'pod'): 'pox mid'
// //   mixUp('dog', 'dinner'): 'dig donner'
// // Look up the JavaScript string reference to find methods which may be useful!
//


// // FixStart
// // // Create a function called fixStart.
// It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*',
// except for the first character itself. You can assume that the string is at least one character long. For example:
// // // fixStart('babble'): 'ba**le'
//


// // Verbing
// //
// // Create a function called verbing. It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
// If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

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
