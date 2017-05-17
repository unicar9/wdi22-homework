var squareNum = function(num) {
  var squareNumResult = (num * num);
  console.log("The result of squaring the number " + num +
  " is " + squareNumResult);
  return squareNumResult;
};

console.log(squareNum(2));
console.log(squareNum(3));

var halfNum = function(num) {
  var halfNumResult = (num / 2);
  console.log("Half of " + num + " is " + halfNumResult);
  return halfNumResult;
};

console.log(halfNum(10));
console.log(halfNum(25));

var percentOf = function(num1,num2) {
  var percentCalc = ((num1/num2) * 100);
  console.log(num1 + " is " + percentCalc + "% of " + num2);
  return percentCalc;
};

console.log(percentOf(45,55));
console.log(percentOf(2,4));

var areaOfCircle = function(radius) {
  var area = radius * Math.PI * 2 * 100;
  console.log(area);
  return Math.round(area)/100;
};

console.log(areaOfCircle(2));

var number = 1337;
var numberHalf = halfNum(number);
var numberSquare = squareNum(numberHalf);
var numberArea = areaOfCircle(numberSquare);
var numberPercent = percentOf(numberArea, numberSquare);

console.log(number);
console.log(numberHalf);
console.log(numberSquare);
console.log(numberArea);
console.log(numberPercent);

var drEvil = function(amount) {
  if (amount > 1000000) {
    console.log(amount + " Dinky");
  }
  else {
    console.log(amount + " Dollars");
  }
};

drEvil(10);
drEvil(1000001);

// var verbing = function(verb) {
//   if (verb.length > 3) {
//     return(verb + "ing");
//   }
//   else if {
//     var verbLength = (verb.length -1);
//       var lastThreeLetters = (verbLength[-3] + verbLength[-2] + verbLength === "ing") {
//         return (verb + "ly");
//       }
//     else return verb;
//   };
//   verbing("swim");
//   verbing("swimming");
//   verbing("go");











// just to move code top
