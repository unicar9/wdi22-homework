// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var squareNumber = function(num){
  var squared = num * num;
  console.log("The result of squaring the number " + num + " is " + squared);
};

squareNumber(3);

var halfNumber = function(num){
  var halfNum = num / 2;
  console.log("Half of " + num + " is " + halfNum + ".")
  return halfNum;
};

halfNumber(6);

var percentOf = function(num1, num2){
  var newNum = ((num1/num2) * 100);
  console.log(num1 + " is " + newNum + "% of " + num2 + ".");
  return newNum;
};

percentOf(4, 5);

var areaOfCircle = function (radius){
  var area = ((radius * radius) * Math.PI);
  var roundedArea = Math.round(area);
  console.log("The area for a circle with radius " + radius + " is " + roundedArea + ".");
  return roundedArea;
};

areaOfCircle(4);

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
