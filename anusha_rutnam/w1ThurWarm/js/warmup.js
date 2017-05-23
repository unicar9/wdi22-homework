// var enteredYear = function( year ){
//
//   if( year % 4 === 0
// && year % 100 !== 0
// && year % 400 !== 0 ){
//     console.log (year+' is a leap year!');
//   }
//
// else (console.log(year+" is not a leap year"))
//
// // var isLeapYear = function (isIt) {
// // for (var i = 1; i <= 2017 ; i++)
// // console.log(isLeapYear[i]);
// // }
// {
//
// }
// }
//
// enteredYear(4);
//
//
// // solution (messy)
//
// var isLeapYear = function (year){
//   var result = false;
//   if ( (year%4===0) && (year % 100 !== 0 || year % 400 === 0)  ){
//     result = true;
//   }
//   // else {
//   //   result = false;
//   // } don't need this bit because of the false above
// console.log(year + 'is leap year'+result);
// }
//
// isLeapYear(1987);
// isLeapYear(4);
// isLeapYear(1900);
// isLeapYear(1987);

// //solution also bad
// var isLeapYear = function (year){
//   var result = false;
//   if ( year%4===0) {
// //this is a nest if statement
//     if ((year %100===0) && (year % 400 !== 0)){
//       result = false;
//     } else {
//       result = true;
//     }
//   }
// console.log(year + 'is leap year'+result);
// }
//
// isLeapYear(1987);
// isLeapYear(4);
// isLeapYear(1900);
// isLeapYear(1987);


//solution good one

var promptYear = prompt ("What number do you want?");
promptYear = parseInt(promptYear)

var isDivisibleBy = function (num, divider){
return num % divider === 0;
};

var isLeapYear = function(year){
  var result = false;
  if (isDivisibleBy(year, 4) && (!isDivisibleBy(year,100) || isDivisibleBy(year,400))) {
    result = true;
  }
  if (result) {result = "";
}
  else {
    result = " not"
  };
  console.log(year + "is" + result + "  a leap year ");
};

isLeapYear(promptYear);


//   var result = false;
//   if ( year%4===0) {
// //this is a nest if statement
//     if ((year %100===0) && (year % 400 !== 0)){
//       result = false;
//     } else {
//       result = true;
//     }
//   }
// console.log(year + 'is leap year'+result);
// }
//

// //will turn into integer, chops off decimel, won't round
//
// //
// // isLeapYear(1987);
// // isLeapYear(4);
// // isLeapYear(1900);
// // isLeapYear(1987);




// var enteredYear = 16
//   var leapsYears = if (enteredYear % 4 === 0
//     // && year % 100 !== 0
//     // && year % 400 !== 0
//   );
//     console.log (enteredYear + "is a leap year");
//
//
//
// // enteredYear(16);




// Leap Year Warmup Exercise
//
// Do this in HTML and JS!
//
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
//
// so iterate through years 1-2017
