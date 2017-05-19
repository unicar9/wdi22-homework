// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function(number){
  var result = number**2;
  result=Math.round(result*100) /100;
  console.log("The result of squaring the number " +
      number +" is "+ result);
  return result;
}

var halfNumber = function(number){
  var result = number/2;
  result=Math.round(result*100) /100;
  console.log("Half of " + number +" is " + result);
  return result;
}

var percentOf = function(number1,number2){
  var result = number1/number2*100;
  result=Math.round(result*100) /100;
  console.log(number1 +" is " + result +"% of "+ number2);
  return result;
}

var areaOfCircle = function(radius){
  var result = Math.PI * radius**2;
  result=Math.round(result*100) /100;
  console.log("The area for a circle with radius " +
    radius + " is " + result);
  return result;
}

var complexFunction = function(number){
  var step1 = halfNumber(number);
  var step2 = squareNumber(step1);
  var step3 = areaOfCircle(step2);
  var step4 = percentOf(step3,squareNumber(step3));
  step4=Math.round(step4*100) /100;
  return step4;
}

squareNumber(3);
halfNumber(5);
percentOf(2,4);
areaOfCircle(2);

complexFunction(5);
