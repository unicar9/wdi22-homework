//Part 1

//- Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function(number) {
  square = number**2;
  console.log("The result of squaring the number " + number + " is " + square + ".");
  return square;
}

squareNumber(3)

//- Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function(number) {
  half = number / 2;
  console.log("Half of " + number + " is " + half + ".");
  return half;
}

halfNumber(8)

//- Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function(number1, number2) {
  percent = (number1 / number2) * 100;
  percentRound = percent.toFixed(2);
  console.log(number1 + " is " + percentRound + "% of " + number2 + ".");
  return percentRound;
}

percentOf(2,6)

//- Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

var areaOfCircle = function(radius) {
  area = Math.PI * radius**2;
  areaRounded = area.toFixed(2);
  console.log("The area of a circle with radius of " + radius + " is " + areaRounded + ".");
  return areaRounded;
}

areaOfCircle(4);

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

var numberWang = function(v) {
  var x = halfNumber(v);
  var y = squareNumber(x);
  var z = areaOfCircle(y);
  var result = percentOf(z,y);
}

numberWang(4);

// # Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// ## DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return
//'<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```

var drEvil = function(amount) {
  if (amount === 1000000) {
    console.log(amount + " dollars (pinky)");
  } else {
    console.log(amount + " dollars");
  }
}

drEvil(1000000);

// ## MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space)
// slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function(input1, input2) {
  firstTwoInput1 = input1[0] + input1[1];
  firstTwoInput2 = input2[0] + input2[1];
  remainderInput1 = input1.slice(2,100);
  remainderInput2 = input2.slice(2,100);
  new1 = firstTwoInput1 + remainderInput2;
  new2 = firstTwoInput2 + remainderInput1;
  console.log(new1, new2)
}

mixUp("Andy", "Brown");


// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version
// where all occurences of its first character have been replaced with '*', except for the first character
// itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

/*
var fixStart = function(string) {
  character = string[0];
  console.log(character);
  for (var i = 0; i < string.length; i++) {
  if (string[i] === character) {
    var word = string.replace(character, "*");
    console.log(word);
  } else {
    console.log("Error");
  }
}

fixStart("babble");
*/


// var fixStart = function(string) {
//     var character = string[0];
//     console.log(character);
//     var newWord = [];
//     for(var i = 0; i < string.length; i++) {
//       if (string[i] === "character") newWord.push(i+1);
//       console.log(newWord);
//     }
//
//
// fixStart("scissors")



// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least
// 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly'
// instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

var verbing = function(string) {
  if (string.length >= 3) {
    if (string.slice(-3) === "ing") {
      string = string.substring(0, string.length - 3);
      result = string + "ly";
    } else {
      result = string + "ing";
    }
  } else {
    result = string;
  }
  console.log(result);
}

verbing("pant");


// ## Not Bad
//
// Create a function called notBad that takes a single argument, a string.
// https://www.w3schools.com/jsref/jsref_indexof.asp
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good'
// and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original
// sentence.
//
// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```


var notBad = function(string) {
  // Check to find the index of the substrings within the string
  var notPosition = string.indexOf("not");
  var badPosition = string.indexOf("bad");
  // console.log(notPosition);
  // console.log(badPosition);
  // console.log(string.length);

  // Run function if the phrase has a 'not' as it is the first substring required see: http://stackoverflow.com/questions/3480771/how-do-i-check-if-string-contains-substring
  if (string.indexOf("not") >= 0) {
    // Determine whether the not comes before the bad
    if (notPosition < badPosition) {
      // Create a substring, eliminating the portion of the string from 'not' onwards
      result = string.substring(0, string.length - (string.length - notPosition) - 1);
      result = result + " good!";
    } else {
      result = string;
    }
  } else {
    result = string;
  }
  console.log(result);
}

notBad("This dinner is not that bad!");
