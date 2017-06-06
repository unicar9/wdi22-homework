
// subway lines

var trainLines = {

  var lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],

  var lineL = ['8th', '6th', 'Union Square', '3rd', '1st'],

  var lineSix = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],

  travelPlanner: function(lineone, start, linetwo, destination) {


  }


};






var lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];

var lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];

var lineSix = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

var transitStop = []; // stores itinerary for first half of journey

var transitStopTwo = []; // stores itinerary for second half of journey

// interaries are seperated by a stop at Union Square, whether multi lined or not.




var travelPlanner = function(lineone, start, linetwo, destination) {



  var lineoneUnion = lineone.indexOf('Union Square'); // find number code for Union line 1

  var linetwoUnion = linetwo.indexOf('Union Square'); // find number code for Union line 2

  var startLine = lineone.toString; alert(startLine);

  for (var i = 0; i <= lineone.length; i++) { // find num code for starting station
    if (lineone[i] === start) {

      var startStation = lineone.indexOf(lineone[i]);

    }
  }


  for (var i = 0; i <= linetwo.length; i++) { // find num code for ending station

    if (linetwo[i] === destination) {

      var endStation = linetwo.indexOf(linetwo[i]);

    }
  }



  if (lineoneUnion > startStation) { // finding out direction of travel for line one

    for (var i = startStation; i <= lineoneUnion; i++) {
      var addTransit = lineone[i];

      transitStop.push(addTransit);
    }

  } else {

    for (var i = startStation; i >= lineoneUnion; i--) {
      var addTransit = lineone[i];

      transitStop.push(addTransit);
    }

  }



  if (endStation > linetwoUnion) { // finding out direction of travel for line two

    for (var i = linetwoUnion; i <= endStation; i++) {
      var addTransit = linetwo[i];

      transitStopTwo.push(addTransit);
    }


  } else {

    for (var i = linetwoUnion; i >= endStation; i--) {
      var addTransit = linetwo[i];

      transitStopTwo.push(addTransit);
    }

  }



  if (lineone === linetwo) { // make announcement for a one line journey

    var announcement = transitStop.join();
    var announcementTwo = transitStopTwo.join();
    var numStops = transitStop.length + transitStopTwo.length;


    console.log('You must travel through the following stops on the chosen line:' + announcement + ',' + announcementTwo + '.\n' + numStops + ' stops in total.');

  } else {
    transitStopTwo.shift(); // make announcement for a multi line journey

    var announcement = transitStop.join();
    var announcementTwo = transitStopTwo.join();
    var numStops = transitStop.length + transitStopTwo.length;


    console.log('You must travel through the following stops on the chosen line:' + announcement + '.\n Change at Union Square.\n' + 'Your journey continues through the following stops: ' + announcementTwo + '.\n' + numStops + ' stops in total.');

  };


};




travelPlanner(lineN, 'Times Square', lineL, '1st'); // call the travel function
