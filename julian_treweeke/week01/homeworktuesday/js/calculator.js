
var squareNumber = function(x){
  var squared = x * x;
  console.log("The result of squaring the number " + x + " is " + squared);
}

// squareNumber(5);


var halfNumber = function(x){
  var result = x / 2
  console.log("The result of halfing the number " + x + " is " + result);
}

var percentOf = function(x,y){
  var result = x / y * 100;
  console.log(x + " is " + result + "% of " + y);
}

// percentOf(2,4);

var areaOfCircle = function(radius){
  var result = (radius*radius) * Math.PI;
  var finalResult = Math.round(result)
  console.log("The area for a circle with radius " + radius + " is " + finalResult);

}

// areaOfCircle(2);

var calculator = function(x){
  var resultOne = halfNumber(x);
  // console.log(resultOne);
  var resultTwo = squareNumber(resultOne);
  // console.log(resultTwo);
  var resultThree = areaOfCircle(resultTwo);
  // console.log(resultThree);
  var resultFour = percentOf(resultThree,resultTwo);
}
