
// subway lines


var trainLines = {

  lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],

  lineL: ['8th', '6th', 'Union Square', '3rd', '1st'],

  lineSix: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],

  travelPlanner: function(lineone, start, linetwo, destination) {

    var lineoneUnion = trainLines.lineone.indexOf('Union Square') ; // find number code for Union line 1

    var linetwoUnion = trainLines.linetwo.indexOf('Union Square'); // find number code for Union line 2

    var startStation = trainLines.lineone.indexOf(start); // find num code of starting station

    var endStation = trainLines.linetwo.indexOf(destination); // find num code of starting station

    if (lineoneUnion > startStation) { // finding out direction of travel for line one

      var journeyOne = trainLines.lineone.slice(startStation, lineoneUnion ); // new code
      alert(journeyOne);



    } else {


      var changedirectionOne = trainLines.lineone.slice(lineoneUnion,startStation);
      var journeyOne = changedirectionOne.reverse();
      journeyOne.unshift(start);

    }





    if (endStation > linetwoUnion) { // finding out direction of travel for line two

      var journeyTwo = trainLines.linetwo.slice(linetwoUnion,endStation + 1);


    } else {

      var changedirectionTwo = trainLines.linetwo.slice(endStation,linetwoUnion);
      var journeyTwo = changedirectionTwo.reverse();
      journeyTwo.unshift('Union Square');

    }



    var numStops = journeyOne.length + journeyTwo.length; // find how many stops in total




    if (trainLines.lineone === trainLines.linetwo) { // make announcement for a one line journey


      console.log('You must travel through the following stops on the chosen line:' +  journeyOne + ',' + journeyTwo + '.\n' + numStops + ' stops in total.');

    } else { // make announcement for a multi line journey

      console.log('You must travel through the following stops on the chosen line:' + journeyOne + '.\n Change at Union Square.\n' + 'Your journey continues through the following stops: ' + journeyTwo + '.\n' + numStops + ' stops in total.');

    };

  }



}



// interaries are seperated by a stop at Union Square, whether multi lined or not.





trainLines.travelPlanner('lineN', 'Times Square', 'lineSix', 'Grand Central'); // call the travel function
