var squareNumber = function(number){
   var result = number**2;
  console.log('The result of squaring the number ' + number + ' is ' + result);
}

squareNumber(3);






var halfNumber = function(numberTwo){
  var result = numberTwo/2;

  console.log('Half of ' + numberTwo + ' is ' + result);
  return result;
}

halfNumber(5);



var percentOf = function(numberA,numberB){
  var result =numberA/numberB*100;//% another way to do it ?
  console.log(numberA + ' is '+ result + '% of ' + numberB);
  return result;

}
percentOf(2,4)


var areaOfCircle = function(radius){
  var area = Math.PI*radius**2;
  console.log('The area for a circle with radius '+radius +
  ' is ' + area);
  return area;

}

areaOfCircle(2);


var areaOfCircle = function(radius){
  var area = Math.PI*radius**2;
  area = area.toFixed(2);
  console.log('The area for a circle with radius '+radius +
  ' is ' + area);
  return area;

}
areaOfCircle(2);




var calucation = function(radius){
  var half = radius/2;
  var area = Math.PI*radius**2;
  var percentage=area/(radius**2)*100;

  console.log( 'half of the number is ' + half
  +' And the Square the result is '+ area
  +'percentage area is'+percentage+'% of the squared result'

  );
}

calucation(10);
