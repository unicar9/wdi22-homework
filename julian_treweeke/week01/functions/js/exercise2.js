//
// Write a function named calculateAge that:
//
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

// var calculateAge = function( birthYear, currentYear ){
//   // var year = currentTime.getFullYear();
//   var ageAfterBirthday = currentYear - birthYear;
//   var ageBeforeBirthday = ageAfterBirthday - 1;
//   console.log("You are either " + ageAfterBirthday + " or " + ageBeforeBirthday);
//
// }
//
// calculateAge(1985,2017);
// calculateAge(1980,2017);
// calculateAge(1985,2000);
// 
// below is for bonus points

var calculateAge = function(birthYear){
  var year = new Date().getFullYear();
  var ageAfterBirthday = year - birthYear;
  var ageBeforeBirthday = ageAfterBirthday - 1;
  console.log("You are either " + ageAfterBirthday + " or " + ageBeforeBirthday);
}

calculateAge(1985);
