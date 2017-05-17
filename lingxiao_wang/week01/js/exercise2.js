
console.log('Hey you are here!');
// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

//F Teller
var geoLo = "Mars";
var jTi = "StarSufer"
var pName = "Sdjflkdfgjg"
var numChi = -200;

var myF = "You will be a " + jTi + " in " + geoLo + ", and live with " + pName + " with " + numChi + " kids!"
console.log(myF);


// Forgot how old someone is? Calculate it!
//
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

// Age Calculator

var cYear = 2017;
var bYear = 1457;
var ageAfter = cYear - bYear;
var ageBefore = ageAfter - 1;
console.log("They are either " + ageBefore + " or " + ageAfter + " !");

// The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var myAge = 29;
var maxAge = 89000;
var amountPerDay = 9;
var supplyLife = (maxAge - myAge) * 365 * 9;

console.log("You will need " + supplyLife + " to last you unitl the ripe old age of " + maxAge + ".");

// The Geometrizer
//
// Calculate properties of a circle, using the definitions here.
//
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 5;
var circumference = 2 * radius * Math.PI.toFixed(3);
var area = radius**2 * Math.PI.toFixed(3);
console.log("The circumference is " + circumference + ".");
console.log("The area is " + area + ".");

// The Temperature Converter
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


var cToF = function(tempC){
  tempF = tempC * 9 / 5 + 32;
  return tempF;
};
console.log(cToF(29));

var fToC = function(tempF){
  x = (tempF - 32) * 5 / 9;
  return x;
};
console.log(fToC(86));
