// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

// var num0 = 4

var halfNumber = function (num0) {

  var num1 = num0 / 2
  console.log (num1);
  // return num1

};

halfNumber (6);


var squareNumber = function (halfNumber){

  var num2 = halfNumber ** 2;
  console.log (num2);

};

squareNumber (3);

var areaOfCircle = function (squareNumber){

  var num3 = Math.PI * (squareNumber ** 2)
  console.log (num3);

}

areaOfCircle (4);

var percentOfCircle = function (areaOfCircle){

  var num4 = areaOfCircle / squareNumber * 100

  console.log(num4);

}
