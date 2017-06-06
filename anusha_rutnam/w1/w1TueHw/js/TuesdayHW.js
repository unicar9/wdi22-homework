// // The Calculator
// //
// // Part 1
// //
// // Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// // Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// // Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// // Bonus: Round the result so there are only two digits after the decimal.
// //
//
var squareNumber = function (x) {
  var xsq = x**2;
  console.log("The result of squaring the number "+ x +" is "+ xsq + ".");
  return xsq;
 };
squareNumber(3);
//
// //Circle
// // Part 2
// //
// // Write a function that will take one argument (a number) and
// //perform the following operations, using the functions you wrote earlier1:
// //
// // 1 Take half of the number and store the result.
// // 2 Square the result of #1 and store that result.
// // 3 Calculate the area of a circle with the result of #2 as the radius.
// // 4 Calculate what percentage that area is of the squared result (#3).
//
var hw2 = function (x) {
  var half = (x/2);
  var oneSq = (half**2);
  var circle = (Math.PI*oneSq**2);
  var test = console.log("1 (x halfed) is " + half
  + ". 2 (#1 squared) is " + oneSq + ". 3 (area of circle with #2 as its radius) is "
  + circle + ". 4 is ");

};

hw2(4);
// // return comes last line in function mostly
// //why does cheat sheet refer to arguments as parameters
//
//
//
//
//
// //
// // var drEvil = function (x) {
// //   return "name" + x;
// //
// // };
// //
// // drEvil(20);
//
// // 3 DrEvil
// //
// // Create a function called DrEvil. It should take a single argument, an amount,
// //and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// //
// //   DrEvil(10): 10 dollars
// //   DrEvil(1000000): 1000000 dollars (pinky)
//
// var drEvil = function (money) {
// 	if (money === 1000000)
// 		return  money + " dollars (pinky)";
// 		else if  (money !== 1000000)
//
//       return money + " dollars";
//
// };
//
//
// drEvil();
//
// //how do i show result in console/ anywhere if it's only a return
//
//
// // 4 MixUp
// //
// // Create a function called mixUp. It should take in two strings,
// //and return the concatenation of the two strings (separated by a space)
// //slicing out and swapping the first 2 characters of each.
// //You can assume that the strings are at least 2 characters long. For example:
// //
// //   mixUp('mix', 'pod'): 'pox mid'
// //   mixUp('dog', 'dinner'): 'dig donner'
// // Look up the JavaScript string reference to find methods which may be useful!
//
// var mixUp = function (x,y) {
//   var xStr = x;
//   var yStr = y;
//   var xLength = xStr.length;
//   var yLength = yStr.length;
//   var xInt = xStr.slice(0, 2);
//   var yInt = yStr.slice(0, 2);
//   var xRestAmount = (xLength);
//   var yRestAmount = (yLength);
//   var xRest = xStr.slice(2, xRestAmount);
//   var yRest = yStr.slice(2, yRestAmount);
//   // var xRest = xstr.slice(2, 13);
//
//
//
//   var test = console.log(yInt+xRest + " " + xInt+yRest);
//
// };
//
// mixUp('dog','dinner');
//
// // 5 FixStart
//strings are not immutable so you can't just split em. so change it to array, split ,t hen turn back into string
//.join is reverse of .split. join at the point of returning i.e return arr.join('');
var fixStart = function (str) {

  var firstChar = str[0];

  varr arr = str.split('';)

  console.log('first char is:'+ firstChar);

  for (var i = 0; i < arr; i++) {

    var currentChar = str[i];

    if(currentChar === firstChar){
      str[i] = '*';

    } //if

  } //for
  return arr.join('');
};




//
// Create a function called fixStart. It should take a single argument,
//a string, and return a version where all occurences of its first character
//have been replaced with '*', except for the first character itself.
//You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

//NOPE



// 6 Verbing
//
// Create a function called verbing. It should take a single argument,
//a string. If its length is at least 3, it should add 'ing' to its end,
//unless it already ends in 'ing', in which case it should add 'ly' instead.
//If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'


// var verbing = function (x) {
//
// 	// if (x.length <= 3) {
// 	// 	output = x ;};
//
// var lastThree = x.slice(x.length-3, x.length);
//
// if (lastThree === "ing") {
//   console.log (x+"ly");}
//
// // console.log (x+output);
// // if (lastThree === ing) {
// // 	output+"ly"}
// };
//
//
// verbing('swimming');

// 7 Not Bad
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
