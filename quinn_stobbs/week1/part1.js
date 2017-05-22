// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."


// SECTION 1
// var squareNumber = function (num1) {
//
//   var num2 = num1 ** 2
//   console.log ("The result of squaring the number " + num1 + " is " + num2)
// };
//
// squareNumber (9);

// SECTION 2
// var halfNumber = function (num1) {
//
//   var num2 = num1 / 2
//   console.log ("Half of  " + num1 + " is " + num2)
// };
//
// halfNumber (10);

// SECTION 3

// var percentOf = function (num1, num2) {
//
//   var percent = num1 / num2 * 100
//
//   console.log (num1 + " is " + percent + "% " + " of " + num2)
//
// };
//
// percentOf (4, 10);


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

// SECITON 4
// var areaOfCircle = function (radius) {
//
//   var area = Math.PI * (radius **2)
//
//   console.log ("The area for a circle with radius " + radius + " is " + area);
//
// };
//
// areaOfCircle (2);

//BONUS
var areaOfCircle = function (radius) {

  var area = Math.Round (2) (Math.PI * (radius **2)

  console.log ("The area for a circle with radius " + radius + " is " + area);

};

areaOfCircle (2);
