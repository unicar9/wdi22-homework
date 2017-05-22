// Part 1
var squareNum = function(number) {
  var result = number**2;
  console.log("The result of squaring the number " + number + " is " + result + ".");
}

squareNum(9);

var halfNumber = function(number) {
  var result = number/2;
  console.log("Half of " + number + " is " + result + ".");
}

halfNumber(10);

var percentOf = function(num1, num2) {
  var percent = (num1/num2)*100;
  var percentRound = percent.toFixed(2);
  console.log(num1 + ' is ' + percentRound + '% of ' + num2 + ".");
}

percentOf(2, 4);

var areaOfCircle = function(radius) {
  var area = Math.PI*radius**2;
  var areaRounded = area.toFixed(2);
  console.log("The area for a circle with radius " + radius + " is " + areaRounded);
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

// Andy's answer
var numberWang = function(number) {
  var halfNumber = number/2;
  var squareNum = halfNumber**2;
  var areaOfCircle = Math.PI*squareNum**2;
  var percentOf = (areaOfCircle/areaOfCircle**2)*100;
  console.log(percentOf + '%');
