console.log("MTA is the best!")

//Michelle comments: things that should be added/fixed
// -reverse the trips (a.reverse())
// -test to check input station and line are actually on the same line
// -fix naming of objects so they are consistent with answer
//- DRY! There is SO Much repetition

//create metro line objects


var metroLines = {
  lineN:  ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
  line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square","Astor Place"]
};

var singlePlanTrip = function(startLine, startStation, destStation) {
    var startStationsVar = metroLines[ startLine ];
      // console.log("TEST A " + startStationsVar + " this is test of var stations = metroLines[ startLine ]");
      for (var i = 0; i < startStationsVar.length; i++)
        if (startStation === startStationsVar[i])
      var pureStartIndex = metroLines[startLine].indexOf(startStation)
      var startIndex = (pureStartIndex + 1) //+ 1 so you dont rprint the start station
      // console.log ("Index number " + pureStartIndex + " of " + startLine);

    var destStationsVar = metroLines[ startLine ];
      // console.log("TEST B " + destStationsVar + " this is test of var stations = metroLines[ destLine ]");
      for (var i = 0; i < destStationsVar.length; i++)
        if (destStation === destStationsVar[i])
        // console.log(destStationsVar[i] + " is on " + [destLine])
        var pureDestIndex = metroLines[startLine].indexOf(destStation);
        var destIndex = (metroLines[startLine].indexOf(destStation) - 2) //-1 so you dont reprint the end station
        // console.log ("Index number " + pureDestIndex + " of " + destLine);

    {
      var listOfStationsPassed = startStationsVar.splice([startIndex],[destIndex])
      console.log("You must travel through the following stops on the " + startLine + ": " + listOfStationsPassed)
      var numStops = pureDestIndex- pureStartIndex;
      console.log("There are " + numStops + " in total")
    }
  }
  // console.log ("You will start on " + startLine + " at " + startStation + ". " + change + "" + destLine + " and disembark at " + destStation)

}

singlePlanTrip("lineN", "34th", "lineN", "8th");
console.log("next trip!")
singlePlanTrip("lineN", "34th", "lineL", "1st");
