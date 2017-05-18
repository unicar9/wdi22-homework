// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
//     Take half of the number and store the result.
//     Square the result of #1 and store that result.
//     Calculate the area of a circle with the result of #2 as the radius.
//     Calculate what percentage that area is of the squared result (#3).


var squareNumber = function(num) {

    return Math.pow(num,2);
};

var halfNumber = function(num) {
    return num / 2;
};

var percentOf = function(num1,num2) {
    return (num1/num2) * 100;
};

var areaOfCircle = function(radius) {

  return Math.round(Math.PI * radius**2);
};


var data = 100;

result1 = halfNumber(data);
console.log('halfNumber: ' + result1);

result2 = squareNumber(result1);
console.log('squareNumber: ' + result2);

result3 = areaOfCircle(result2);
console.log('areaOfCircle: ' + result3);

console.log('percentOf: '+ percentOf(squareNumber(result2), areaOfCircle(result3)));
