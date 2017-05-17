// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
//
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

var tellFortune = function(jobTi, geoLo, pName, numKid){
  if(numKid >= 0){
    var fourtune = "You will be a " + jobTi + " in " + geoLo + ", and live with " + pName + " with " + numKid + " kids.";
  } else {
    fourtune = "Don't be silly"
  }
  console.log(fourtune);
}
tellFortune("StarSufer","Mars","Starhawk",-200);

// Forgot how old you are? Calculate it!
//
// Write a function named calculateAge that:
//
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var calAge = function(yearBirth){
  var yearCurrent = new Date().getFullYear();
  var ageAfter = yearCurrent - yearBirth;
  var ageBefore = ageAfter - 1;
  console.log("You are either " + ageBefore + " or " + ageAfter);
}

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Write a function named calculateSupply that:
//
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var maxAge = 2000;

var calSupply = function(myAge, amPerDay) {
  var yearRemain = maxAge - myAge;
  var restSupp = Math.round(yearRemain * 365.25 * amPerDay);
  console.log("You will need " + restSupp + " to last you unitl the ripe old age of " + maxAge);
}


// The Geometrizer
//
// Create 2 functions that calculate properties of a circle.
//
// Create a function called calcCircumfrence:
//
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
//
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
var calCircum = function(radius){
    var circum = Math.round(radius * 2 * Math.PI);
    console.log(circum);
}

var calArea = function(radius){
  var area = Math.round(radius**2 * Math.PI);
  console.log(area);
}


var convertCtoF = function(tempC){
  var tempF = tempC * 1.8 + 32;
  console.log(tempC + "°C is " + tempF + "°F");
}
convertCtoF(30);


var convertFtoC = function(tempF){
  var tempC = (tempF - 32) / 1.8;
  console.log(tempF + "°F is " + tempC + "°C");
}
convertFtoC(86);
