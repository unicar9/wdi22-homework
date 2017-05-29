// # MTA Lab
//
// ##Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.
//
// #### Activity
// * Create a program that models a simple subway system.
//
// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
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
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

//var nLine = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];

var subway = {
  nLine: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  lLine: ["8th", "6th", "Union Square", "3rd", "1st"],
  sixLine: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

var planTrip = function(lineStart, lineEnd, start, end) {

// If the trip is between two stations on the same line
if (lineStart === lineEnd) {
    var startNum = 0;
    var endNum = 0;

    //Find index of start station
    for (i = 0; i < subway[lineStart].length; i++) {
      if (start === subway[lineStart][i]) {
        var startNum = i;
      }
    }

    //Find index of end station
    for (j = 0; j < subway[lineStart].length; j++) {
      if (end === subway[lineStart][j]) {
        var endNum = j;
      }
    }

    //Check if start station is before end station and print all stations forwards if so
    if (startNum < endNum) {
      for (k = startNum; k < endNum + 1; k++)
        console.log(subway[lineStart][k]);
    }

    //Check if end station is before start station and print all stations backwards if so
    if (endNum < startNum) {
      for (l = startNum; l > endNum - 1; l--)
        console.log(subway[lineStart][l]);
    }
  }


// If the trip is between stations on two different lines
if (lineStart !== lineEnd) {
    var startNum = 0;
    var endNum = 0;

    var startUnion = 0;
    var endUnion = 0;

    var key = subway[lineStart];

    //Find index of start station
    for (i = 0; i < subway[lineStart].length; i++) {
      if (start === subway[lineStart][i]) {
        var startNum = i;
      }
    }
    //Find index of end station
    for (j = 0; j < subway[lineEnd].length; j++) {
      if (end === subway[lineEnd][j]) {
        var endNum = j;
      }
    }

    //Find index of Union Square on start line
    for (i = 0; i < subway[lineStart].length; i++) {
      if (subway[lineStart][i] === "Union Square") {
        var startUnion = i;
      }
    }

    //Find index of Union Square on end line
    for (j = 0; j < subway[lineEnd].length; j++) {
      if (subway[lineEnd][j] === "Union Square") {
        var endUnion = j;
      }
    }

    //Check if start station is before union, and if so print all stations going forwards
    if (startNum < startUnion) {
      for (k = startNum; k < startUnion + 1; k++)
        console.log( subway[ lineStart ][ k ] );
    //Otherwise print them backwards
  } else if (startNum > startUnion) {
      for (l = startNum; l > endNum - 1; l--)
        console.log(subway[lineStart][l]);
    }

    // Check if end station is before union, and if so print all stations going forwards
    if (endNum < endUnion) {
      for (l = endUnion; l > endNum - 1; l--)
        console.log(subway[lineEnd][l]);

    //Otherwise print them backwards
  } else if (endNum > endUnion) {
        for (k = endNum; k < endUnion + 1; k++)
          console.log(subway[lineEnd][k]);
    }
  }
}


planTrip("nLine", "sixLine", "Times Square", "Grand Central")
