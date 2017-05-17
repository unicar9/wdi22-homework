// Part 1
var squareNum = function(number) {
  var result = number**2;
  console.log("The result of squaring the number " + number + " is " + result + ".")
}

squareNum(9);

var halfNumber = function(number) {
  var result = number/2;
  console.log("Half of " + number + " is " + result + ".");
}

halfNumber(10);

var percentOf = function(num1, num2) {
  var result = (num1/num2)*100;
  console.log(num1 + ' is ' + result + '% of ' + num2 + ".");
}

percentOf(2, 4);

var areaOfCircle = function(radius) {
  var result = Math.PI*radius**2;
  console.log("The area for a circle with radius " + radius + " is " + result);
}

areaOfCircle(5);

// Part 2
var formula = function(number) {
  var halfNumber = number/2;
  var squareNum = halfNumber**2;
  var areaOfCircle = Math.PI*squareNum**2;
  var percentOf = (areaOfCircle/areaOfCircle**2)*100;
  console.log(percentOf + '%');
}

formula(10);
