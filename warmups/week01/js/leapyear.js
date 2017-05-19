// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
//
// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true
//
// var isLeapYear = function(year){
//   var result = false;
//
//   if ( ( year % 4 === 0) && ( year % 100 !== 0 || year % 400 === 0) ){
//     result = true;
//   }
//
//   console.log(year + " is a leap year " + result);
// }


// var isLeapYear = function(year){
//   var result = false;
//   if (year % 4 === 0) {
//     console.log("first if passed");
//     if( (year % 100 === 0) && (year % 400 !== 0)) {
//       result = false;
//     } else {
//       result = true;
//     }
//   }
//
//   console.log(year + " is a leap year " + result)
// }

var promptYear = prompt("What number do you wnat bro?????");
promptYear = parseInt(promptYear);


var isDivisibleBy = function(num, divider) {
  return num % divider ===0;
};

var isLeapYear = function(year){
  var result = false;
  if (isDivisibleBy(year, 4) && (!isDivisibleBy(year, 100) || isDivisibleBy(year, 400))) {
    result = true;
  }
  if (result) {
    result = "";
    }
    else {
      result = " not";
    };
  console.log(year + " is " + result + " a leap year");
};

isLeapYear(promptYear);






// isLeapYear(1997);
// isLeapYear(1996);
// isLeapYear(1900);
// isLeapYear(2000);
// isLeapYear(4);
