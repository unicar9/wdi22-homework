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


//MICHELLE
// var question = prompt("What number do you want to test?");
//
// var isLeapYear = function (question) {
//   var test4 = question % 4 === 0;
//   var test100 = question % 100 === 0;
//   var test400 = question % 400 === 0;
//
//   if ((test4 !== test100) || ((test4 === test100 === test400)){
//     console.log (question + " is a leap year!");
//   }   else if (test4 === test100 || question % 0 >= 0){
//       console.log (question + " is NOT a leap year!");
//     }
//     else if (test4){
//       console.log (question + " is a leap year!");
//   } ;
// }

//MATT (ugly code)
var isLeapYear = function(year){
  var result;
  result = false; //start as false as default and only IF it meets the specific conditions, it will change to true

  if( (year % 4 === 0) && ( year % 100 !== 0 || year % 400 === 0)){
    result = true;}
  // } else {
  //   result = false; // remoed because result = false added above
  // }
  console.log( year + " is a leap year " + result);
}

isLeapYear(1997);
isLeapYear(1996);
isLeapYear(1900);
isLeapYear(4);

//MATT
var isLeapYear = function(year){
    var result;
    result = false;
    if (year % 4 ===0) {
      console.log("test"); // to see when this if is run
      if ( (year % 100 === 0) && (year % 400 !== 0)) {
        result = false;
      } else {
        result = true;
      }
    }
console.log( year + " is a leap year " + result);


}
isLeapYear(1997);
isLeapYear(1996);
isLeapYear(1900);
isLeapYear(4);

// MATT WITH question
// console.log('alt approach - not testing leapyear')
//
// var yearCheck = prompt('What number do you want?');
// yearCheck = parseInt(yearCheck);
//
// var isDivisibleBy = function(num, divider) {
//   return num % divider === 0;
// };
// BETTER
console.log
('alt approach -  testing leapyear')
var promptYear = prompt('What number do you want?');
promptYear = parseInt(promptYear);

var isDivisibleBy = function(num, divider) {
  return num % divider === 0;
};
var isLeapYear = function(year) {
    var result;
    result = false;
    if (isDivisibleBy(year, 4) && (!isDivisibleBy(year,100) || isDivisibleBy(year, 400))) {
      result = true;
    };
    if (result) {
      result = ""
    }
      else {
        result = " not";
      };
    console.log(year + " is" + result + " a leap year.")
  };

isLeapYear(promptYear);
