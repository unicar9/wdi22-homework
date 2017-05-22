// The Calculator
//
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
//





// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.


// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).


// var calc = function(xy) {
//   var x = halfNumber(xy);
//   var y = squareNumber(x);
//   var z = areaOfCircle(y);
//   var result = percentRound(z,y)
// }
//
// calc(4);
//








//fixStart

var fixStart = function (str) {
  var firstChar = str[0];
  console.log('first char is: ' + firstChar);
  for (var i =1; i< str.length; i++) {
    var currentChar = str[i];
    if(currentChar === firstChar) {
      console.log('Yes, ' + currentChar + ' ==== ' + firstChar);
      arr[i] = '*';
      console.log('str[' + i '] = ' + arr[i]'');
    }
  } // for
  return str;
}; // to close function (identiable by ; afterwards)

console.log( fixStart('babble') );
