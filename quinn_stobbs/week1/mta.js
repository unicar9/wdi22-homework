// # MTA Lab
//
// ##Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.
//
// #### Activity
// * Create a program that models a simple subway system.
//
// * The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at
// * It should also print the journey and the total number of stops for the trip in the console:


//  * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)

// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
      // you are going to have to write out the step by stpe
//


//DEVLIERABLES

// ```javascript
// END planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// CHECK log at every stage to make sure the person is getting off/ getting on at the right train.
// END WITH
// planTrip (Start line, start place, End lind end place)
//


//PART 1

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."

            // console.log ('N', '34th', Union Square) - successful travel through the N line


// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Don't worry about prompting the user for input. Hard code some values to get it working.

//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th

//GOAL
// console.log ('N', '34th', Union Square) - successful travel through the N line

// N Line Array


var nLineName = "nLine";


var allLines = {
    nLine: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
};

var defined = console.log(allLines.nline);

var slice = defined.prototype.slice ();


// var nline = if (allLines.indexOf(nLine));
for ( var key in allLines){
      console.log(key); //gives me the right line to start with howevert this will loop through later
};

//trying to turn everything into an object
// var allLinesArr = Object.keys(allLines).map(function (key) { return allLines[key]; });
//
// console.log(allLinesArr);
//
// var trainLines = function (a, b){
//     var args = allLines.prototype.slice.()
//     alert(" your parameters were " + args.join(", "));


//OLD SPLIT
// var split = function (num1, num2){
//   var nTrain = allLines.split(nline);
//   console.log("check" + nTrain);
// }
// //
// // var objects = objects.keys(allLines);

var indexOfStartStation = [];
var indexOfEndStation = [];

var journey = [];

var singeLine = function (lineName, startTrain, endTrain){
  // //break out the nLine to get access
  //         for ( var key in allLines){
  //           console.log(key)

            if (key === nLineName){

                console.log("Working station number 1 " + startTrain)
                break;
                ;
                if (startStationIndex < endStationIdex){

                  console.log("working number 2 " + endTrain);
          }
        journey = stations.slice (startStationIndex, endStationIdex)
      }
    }
singleLine (nline, "Times Square", "Union Square")

var singleLine = function (lineName, startTrain, endTrain){

}

// NEW METHOD

//make sure to check that the variables are in teh function



// WORKING LOOP - used to be
// var singleLine = function (nLineName, startTrain , endTrain) {
//
//       //split the lines
//       var splitLines = allLine.nLine[i];
//
//     if (allLines.nline[0] === startTrain)
//
//       // find the line to access
//         if (allLines.nLine.indexOf[i] === startTrain ){
//           console.log("working at point 1 " + nLine[i]);
//
//           // loop through to the correct line to end on
//           for (var j = 0; j < allLines.nLine.length; j++) {
//             console.log("working at point 2 " + nLine[j]);
//             console.log("Go to the nline " + nLine[i] + " " + "");
//             }
//           }
//         };
//
// //
// singleLine (nLine,"Times Square", "Union Square"); // 1



 // Start trip



// for ( var key in objec){
//   console.log( );
//
// console.log(nObject);

// var array = n.indexOf()
//
// // Check to make sure the train is on the right line. -1 means it can't be found
// // Return 0 for correct answer
//
// for (var i = 0; i < n.length; i++) {
//   if (n.indexOf [i] !== -1 ) {
//                 console.log("Start Train at station "  + n.indexOf[i]);
// } else {
//   console.log( ("Not a valid stop"));
// }
// };

//
// console.log(n.indexOf( "Times Square") !== -1);

// console.log(n.indexOf ("Times Square"));

// GOAL

// console.log ('N', '34th', Union Square) - successful travel through the N line


// PART 2 - ADDING IN THE OTHER LINES

//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)

// // "Change at Union Square."

          // when the N line gets to Union square change to
          // console.log ('')

// // "Your journey continues through the following stops: 23rd, 28th, 33rd."

          //

// // "7 stops in total."

// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

// var trainSystem = {
//   nLine : [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
//   lLine : [ "8th", "6th", "Union Square", "3rd", "1st"],
//   6 : [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
// }
//
// var startLine = [];
// var endLine = [];
//
// var startTrain = [];
// var endTrain = [];
//
// var arrayObjectIndexOf = function (startLine , startTrain, endLine, endTrain) {
//     for(var i = 0, len = n.length; i < len; i++) {
//         if (n[i] === startTrain){
//           console.log("working at point 1 " + n[i]);
//           for (var j = 0; j < n.length; j++) {
//             console.log("working at point 2 " + n[j]);
//             }
//           }
//         }
//       };
//
//
// arrayObjectIndexOf( ,"Times Square", "Union Square"); // 1
// STEPS

// use the same process as above only





// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.


// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.

// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
