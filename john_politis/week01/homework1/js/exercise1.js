    //
    // Write a function called squareNumber that will take one argument (a number),
    //         square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
    //
    // Write a function called halfNumber that will take one argument (a number),
    //                    divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
    //
    // Write a function called percentOf that will take two numbers,
    //              figure out what percent the first number represents of the second number,
    //              and return the result. It should also log a string like "2 is 50% of 4."
    //
    // Write a function called areaOfCircle that will take one argument (the radius),
    //      calculate the area based on that, and return the result.
    //      It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
    //
    // Bonus: Round the result so there are only two digits after the decimal.

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

console.log("The result of squaring the number 6 is " + squareNumber(6) + ".");
console.log("Half of 6 is " + halfNumber(6) + ".");
console.log("10 is " + percentOf(10,20) + "% of 20.");
console.log("The area for a circle with radius 6 is " + areaOfCircle(6) + ".");
