
// Code which I probably wont need. Keep it here just in case. Screw you MTA
//

// var linesOnly = Object.keys(trainLine)

// switch (choosenStation) {
//   case station.indexOf('34th') < station.indexOf('Union Square'):
//     console.log("yes");
//     break;
//   case station.indexOf(choosenStation)> station.indexOf('Union Square'):
//     console.log("yes yes yes");
//     break;
//   default:
//     console.log('fail');
// }

// var lineChoice = function() {
//   var inputChoice = prompt();
//   inputChoice = this.toUpperCase()
// }
//
// var stringToText = function () {
//   lineNumber = prompt();
//   lineNumber = parseFloat(lineNumber);
//   return lineNumber
// }


// // probably wont need this. why did i write it to begin with? I can't remember. It was late.
//
// for (var i = 0; i < linesOnly.length; i++) {
//
//   var key = i ++ 1
//   console.log(key);
//
//   if (journeyBeginEnd[0] === linesOnly[i]) {
//   console.log("holy");
//   break
//   }
// }



var trainLine  = {
  lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
  line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

var tripFirstHalf = [];
var tripSecondHalf = [];

//
//
var askInput = function() {
  alert("Please input the Line your journey will begin from");
  var input1 = prompt();
  alert("Please input the Station your journey will begin from");
  var input2 = prompt();
  alert("Please input the Line your journey will end in");
  var input3 = prompt();
  alert("Please input the Station your journey will end in");
  var input4 = prompt();
  var allInput = [input1, input2, input3, input4];
  return allInput;
}


var journeyBeginEnd = askInput();
var lineS = journeyBeginEnd.slice(0, 1);
var stationS = journeyBeginEnd.slice(1, 2);
var lineE = journeyBeginEnd.slice(2, 3);
var stationE = journeyBeginEnd.slice(3);


// James, to retrieve the array of stations for a particular line, you want something like this:
// ```var lineName = 'lineN';
// var stations = trainLine[ lineName ];
// ```
// Now the variable `stations` will have as its value the array ` ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]`
//
// Luke Hammer [12:34 PM]
// Keep in mind that `lineName` will probably be an argument to your trip planning function, not a new variable declared with `var lineName` in the way i've shown for this example


// Testing data inputs. Delete once code is running and use object.
var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
var choosenStation = '28th'
var choosenEndSation = "1st"

var beginStaIndex = function() {
  return lineN.indexOf(choosenStation)
}

var endStaIndex = function() {
  return lineL.indexOf(choosenEndSation)
}


if (lineN.indexOf(choosenStation) < lineN.indexOf('Union Square')) {

  tripFirstHalf = lineN.slice(beginStaIndex(), (lineN.indexOf('Union Square') + 1));
  tripSecondHalf = lineL.slice((lineL.indexOf('Union Square')), endStaIndex() + 1);
  // console.log("yes");

// } else if (lineN.indexOf(choosenStation)> lineN.indexOf('Union Square')) {
  // tripFirstHalf = lineN.slice(endStaIndex(), (lineN.indexOf('Union Square')));

  // console.log("yes yes yes");
}



console.log("you must travel through the following stops on the " + tripFirstHalf.join(', ') + " change at Union Square. Youre journey continues through the following stops " + tripSecondHalf.join(', ') + ' ' + (tripFirstHalf.length + tripSecondHalf.length) + " in total"  );

// var planTrip = function(lineStart, stationStart, lineEnd, stationEnd) {
// //
// // }


// # MTA Lab
//
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
//
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
