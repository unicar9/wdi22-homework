console.log("MTA is the best!")

//create metro line objects

var metro = {
  line: [
      {name: "N Line",
      stops:
        ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
      }
    ,
      {name: "L Line",
      stops:
        ["8th", "6th", "Union Square", "3rd", "1st"]}
    ,
      {name: "6 Line",
      stops:
        ["Grand Central", "33rd", "28th", "23rd", "Union Square","Astor Place"]}
  ],

  // findNum: {
    // to identify destination station
  findStartStation: function( startLine, startStation ){
    var metroLines = metro.line;
    for (var i = 0; i < metroLines.length; i++) {
      if (startLine === metroLines[i].name)
        for (var j = 0; j < metroLines[i].name.length; j++) {
          if (startStation === metroLines[i].stops[j]) {
            var findStartStationIndex = metroLines[i].stops.indexOf(startStation);
            // console.log("TESTING START STATION: I found " + metroLines[i].stops[j] + " it is on the " + metroLines[i].name + ". It is stop number " + (findStartStationIndex + 1))
            return findStartStationIndex
          }

        }
    };
  },

  findDestStation: function( destLine, destStation ){
    var metroLines = metro.line;
    for (var i = 0; i < metroLines.length; i++) {
      if (destLine === metroLines[i].name)
        for (var j = 0; j < metroLines[i].name.length; j++) {
          if (destStation === metroLines[i].stops[j]) {
            var findDestStationIndex = metroLines[i].stops.indexOf(destStation);
            // console.log("TESTING DEST STATION: I found " + metroLines[i].stops[j] + " it is on the " + metroLines[i].name + ". It is stop number " + (findDestStationIndex + 1))
            return findDestStationIndex

          }
        }
    }
  },
      ///
  makeList: function (startLine, startStation, destLine, destStation ) {
    var metroLines = metro.line;
    var startStationNum = metro.findStartStation (startLine, startStation );
    var destStationNum = metro.findDestStation( destLine, destStation );
    // console.log("testing numbering: "  + (destStationNum - startStationNum));
      for (var i = 0; i < metroLines.length; i++) {
        if (startLine === metroLines[i].name)
          for (var j = 0; j < metroLines[i].stops.length; j++) {
          var stationsPassed = metro.line[i].stops.splice((startStationNum + 1) , (destStationNum - 1 ));
          console.log(stationsPassed + (' are the stations passed'));
        }
      }


  },
    //want to use index identified in findStartStation,findDestStation and put together a string of stations

    // metro.line[0].stops.splice(findStartStationIndex,findDestStationIndex); // need to get inputs from findDestStation and findStartStation


    // findNumStops: function(startLine, startStation, destLine, destStation) { metro.findNum.findDestStation(destLine, destStation) - metro.findNum.findStartStation(startLine, startStation)}
    //not working atm

}
  // planTrip: function(startLine, startStation, destLine, destStation) )

// var numberofStops = (findStartStationIndex - findDes tStationIndex)
// console.log( metro.findStartStation("6 Line", "28th"));
// console.log( metro.findDestStation("L Line", "3rd"));
// console.log(metro.findStartStation("N Line", "Times Square"))
// console.log(metro.findDestStation("6 Line", "28th"))
console.log(metro.makeList("6 Line", "28th","6 Line", "Astor Place"))

// var stopList =

// metro.line[0].stops.splice(findStartStationIndex,findDestStationIndex); // need to get inputs from findDestStation and findStartStation

// findStartStation("6 Line", "28th");
// findDestStation("L Line", "8th")
//
//
// var planTrip = function(startLine, startStation, destLine, destStation) {
//
//
// }

// //There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
