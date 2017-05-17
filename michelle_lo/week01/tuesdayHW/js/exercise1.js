// The Calculator
//
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
//
// CODE WITH CONSOLE log
var num;
var squareNumber = function(num){
  return num*num;
  }
num = 3
console.log('The result of squaring the number ' + num + " is " + squareNumber(num))
//
// CODE CALLING FUNCTION BUT CANNOT REFERENCE 'num'
var num;
var squareNumber = function(num) {
    return num*num;
};
var result = squareNumber(3);
console.log('The result of squaring the number ' + num + ' is ' + result);
// the above console.log only works because num is declared in the alternate answer)

// console.log('The result of squaring the number ' + num + ' is ' + result);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function(num){
return num/2;}
num = 5;
console.log('Half of ' + num + " is " + halfNumber(num))

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function (num1, num2) {
  return num1/num2
}
num1 = 5;
num2 = 10;
console.log(num1 + " is " + percentOf(num1,num2) + " of " + num2);
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
var areaOfCircle = function(radius) {
  return Math.PI * radius **2
}
radius = 2;
console.log('The area for a circle with radius ' + radius + ' is '+ areaOfCircle(radius));

// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var calc = function(num) {
  x = num/2;
  x = x**2;
  y = Math.PI * x **2;
  return y;
  z = y/x;
  return z;
}
console.log(calc(5));
