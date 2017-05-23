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
// How to structure it...
//
// We want a custom function called isLeapYear
// Bonus!
//
// Ask the user what number they want to test
// Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE

var prompYear = prompt("What year do you want to test?");
prompYear = parseInt(prompYear);

var isDivisibleBy = function (num, divider) {
  return num % divider === 0; //returns true or false

}

var isLeapYear = function (y){

  var result = false;

  if (isDivisibleBy(y, 4) && (!isDivisibleBy(y, 100) || isDivisibleBy(y, 400)) ) {
      result = true;
  }

  if (result) {
    result = '' ;
  } else {
    result = ' not';
  }

  console.log( y + " is" + result + " a leap year");
}

// var isLeapYear = function(y){
//   var result = false;
//
//   if ( y % 4 === 0 ) {
//     result = true;
//   }
//
//   if ( y % 100 === 0 ) {
//     result = false;
//   }
//
//   if ( y % 400 === 0) {
//     result = true;
//   }
//
//   if (result) {
//     console.log(y + " is a leap year.");
//
//   } else {
//     console.log(y + ' is not a leap year.');
//   }
//
// }

isLeapYear(prompYear);
// isLeapYear(1996);
// isLeapYear(2000);
// isLeapYear(1900);
