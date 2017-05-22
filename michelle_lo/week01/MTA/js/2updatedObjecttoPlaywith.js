console.log("MTA is the best!")

//create metro line objects


var metroLines = {
  lineN:  ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
  line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square","Astor Place"]
};

var planTrip = function(startLine, startStation, destLine, destStation) {
  var change = "";
  if (startLine === destLine){
    var startStationsVar = metroLines[ startLine ];
      // console.log("TEST A " + startStationsVar + " this is test of var stations = metroLines[ startLine ]");
      for (var i = 0; i < startStationsVar.length; i++)
        if (startStation === startStationsVar[i])
      var pureStartIndex = metroLines[startLine].indexOf(startStation)
      var startIndex = (pureStartIndex + 1) //+ 1 so you dont rprint the start station
      console.log ("Index number " + pureStartIndex + " of " + startLine);

    var destStationsVar = metroLines[ destLine ];
      // console.log("TEST B " + destStationsVar + " this is test of var stations = metroLines[ destLine ]");
      for (var i = 0; i < destStationsVar.length; i++)
        if (destStation === destStationsVar[i])
        // console.log(destStationsVar[i] + " is on " + [destLine])
        var pureDestIndex = metroLines[destLine].indexOf(destStation);
        var destIndex = (metroLines[destLine].indexOf(destStation) - 2) //-1 so you dont reprint the end station
        console.log ("Index number " + pureDestIndex + " of " + destLine);

    {
      var listOfStationsPassed = startStationsVar.splice([startIndex],[destIndex])
      console.log("You must travel through the following stops on the " + startLine + ": " + listOfStationsPassed)
      var numStops = pureDestIndex- pureStartIndex;
      console.log("There are " + numStops + " in total")
    }
  } else { change = "Change at Union Square"
    { //first part of journey start -> Union Square
      var startStationsVar = metroLines[ startLine ];
      // console.log("TEST A2: CHANGING TRAINS " + startStationsVar + " this is a test of var stations = metroLines[ startLine ]");
      for (var i = 0; i < startStationsVar.length; i++) {
          if (startStation === startStationsVar[i])
          console.log(startStationsVar[i] + " is on " + [startLine])}
          var pureStartIndexREAL = metroLines[startLine].indexOf(startStation)
          var startIndexREAL = (pureStartIndexREAL + 1) //+ 1 so you dont rprint the start station
          console.log ("Index number " + pureStartIndexREAL + " of " + startLine);

    var destStationsVarForUS = metroLines[ startLine ];
      console.log("TEST B2: Changing Trains " + destStationsVarForUS + " this is test of var stations = metroLines[ destLine ]");
      for (var i = 0; i < destStationsVarForUS.length; i++) {
          if ("Union Square" === destStationsVarForUS[i])
          console.log(destStationsVarForUS[i] + " is on " + [startLine])}
          var pureDestIndexforUS = metroLines[startLine].indexOf("Union Square");
          var destIndexforUS = (metroLines[startLine].indexOf("UnionSqare") - 2) //-1 so you dont reprint the end station
          console.log ("Index number " + pureDestIndexforUS + " of " + startLine);
    }
    //Second part of journey: Union Square - destStation
     var startStationsVarforUS = metroLines[ startLine ];
     console.log("TEST A3: CHANGING TRAINS " + startStationsVarforUS + " this is test of var stations = metroLines[ startLine ] when changing trains");
     for (var i = 0; i < startStationsVarforUS.length; i++) {
         if ("Union Square" === startStationsVarforUS[i])
         console.log(startStationsVarforUS[i] + " is on " + [destLine])}
         var pureStartIndexforUS = metroLines[destLine].indexOf("Union Square")
         var startIndexforUS = (pureStartIndexforUS + 1) //+ 1 so you dont rprint the start station
         console.log ("Union Square is number " + pureStartIndex + " of " + destLine);

   var destStationsVar = metroLines[ destLine ];
     console.log("TEST B " + destStationsVar + " this is test of var stations = metroLines[ destLine ]");
     for (var i = 0; i < destStationsVar.length; i++) {
         if (destStation === destStationsVar[i])
         console.log(destStationsVar[i] + " is on " + [destLine])}
         var pureDestIndex = metroLines[destLine].indexOf(destStation);
         var destIndex = (metroLines[destLine].indexOf(destStation) - 1) //-1 so you dont reprint the end station
    {
      var listOfStationsPassedJourneyA = startStationsVar.splice(startIndexREAL,([pureDestIndexforUS]-1))
      console.log("You must travel through the following stops on the " + startLine + ": " + listOfStationsPassedJourneyA)
      var numStopsJourneyA = pureDestIndexforUS - pureStartIndexREAL;
      console.log("JOURNEY A TEST There are " + numStopsJourneyA + " for Journey A")
    }
    {
      var listOfStationsPassedJourneyB = startStationsVar.splice([pureStartIndexforUS],[destIndex])
      console.log("Your journey continues through the following stops on the " + destLine + ": " + listOfStationsPassedJourneyB + " and " + destStation)
      var numStopsJourneyB = pureDestIndex - pureStartIndexforUS;
      console.log("JOURNEY B TEST There are " + numStopsJourneyB + " for Journey B")
      var numStops = (numStopsJourneyA + numStopsJourneyB)
      console.log("There are " + numStops + " stops in total")
    }

  }
  // console.log ("You will start on " + startLine + " at " + startStation + ". " + change + "" + destLine + " and disembark at " + destStation)

}


//
// var listOfStationsPassed = metroLines.lineN.slice(1,3)
// console.log(listOfStations)
// planTrip("lineN", "34th", "lineN", "8th");

planTrip("lineN", "34th", "lineL", "1st");
