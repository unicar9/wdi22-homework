
// global variable is an object housing stop as key & value as array of stops which are strings in the array.

var lines = {
  N: ["Times Square", "34th Street", "28th Street", "23rd Street", "Union Square", "8th Street"],
  L: ["8th Street", "6th Street", "Union Square", "3rd Street", "1st Street"],
  6: ["Grand Central", "33rd Street", "28th Street", "23rd Street", "Union Square", "Astor Place"]
}

// console.log(lines)

var singleLineTrip = function (singleLine, startStation, endStation) {
  var stops = lines[singleLine];
  var startStationIndex = stops.indexOf(startStation);
  var endStationIndex = stops.indexOf(endStation);
  var journey = [];

  if ( startStationIndex === endStationIndex ) {

     console.log("Error, Start and End Stations the same!");

  } else if (endStationIndex < startStationIndex) {

    journey = stops.slice(endStationIndex, startStationIndex + 1).reverse();


  } else {

    journey = stops.slice(startStationIndex, endStationIndex + 1 );
    // console.log(journey);

  }
  return journey;
};

var tripItinerary = function (startLine, startStation, endLine, endStation) {
   var firstLeg, secondLeg;
   if (startLine === endLine && startStation === endStation){
     console.log("Incorrect Input, try again");
   } else if (startLine !== endLine){
     firstLeg = singleLineTrip(startLine, startStation, "Union Square");
     secondLeg = singleLineTrip(endLine, "Union Square", endStation)
     console.log("You must travel through the following stops  on " + startLine + ": " + firstLeg.join(', '));
     console.log("Change at Union Square");
     console.log("You must continue through the following stops  on " + endLine + ": " + secondLeg.join(', '));
     console.log("Your total stops will be: " + firstLeg.join(", ") + " " + secondLeg.join(", "));

   } else {
     firstLeg = singleLineTrip(startLine, startStation, endStation);
   }

};

// singleLineTrip("N", "34th Street", "8th Street");
// singleLineTrip("N", "8th Street", "34th Street");

tripItinerary("N", "Times Square", "6", "Astor Place");




//NEVER FORGET THIS ONE.... Why use two line trip to repeat same process of single line trip twice when all you need to do is set common point of Union Square as either start or endpoint and of two single trips.

// var twoLineTrip = function (startLine, startStation, endLine, endStation) {
//
//   singleLineTrip(startLine, startStation, lines.startLine);
//   singleLineTrip(endLine, lines.endLine, endStation)
//   var stopsOnLine1 = lines[startLine];
//   var stopsOnLine2 = lines[endLine];
//   var startStationIndex = stopsOnLine1.indexOf(startStation);
//   // console.log("This is the index of start station: ", startStationIndex, stopsOnLine1, startStation);
//   var endStationIndex = stopsOnLine2.indexOf(endStation);
//   // console.log("This is the index of end station: ", endStationIndex);
//   var journeyFirstLine = [];
//   var journeySecondLine = [];
//   var totalItinerary = journeyFirstLine + journeySecondLine
//   var startLineTransferStation = stopsOnLine1.indexOf("Union Square");
//   var endLineTransferStation = stopsOnLine2.indexOf("Union Square");

  // if (true) {
  // console.log(startStationIndex, stopsOnLine1.indexOf("Union Square"));
  //   journeyFirstLine = stopsOnLine1.slice(startStationIndex, startLineTransferStation + 1);
  //   console.log(journeyFirstLine);
  //   journeySecondLine = stopsOnLine2.slice(endLineTransferStation, endStationIndex);
  //   console.log(journeySecondLine);
  //   log(totalItinerary);
  // } else {
  //
  // }

  // console.log(stopsOnLine1);
  // console.log(stopsOnLine2);
  // console.log(startStationIndex);
  // console.log(endStationIndex);
  //  if (startStationIndex)
