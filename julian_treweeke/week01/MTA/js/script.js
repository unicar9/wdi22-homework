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

// var trainLines = {
//    N: ['Times Square','34th','28th','23rd','Union Square','8th'],
//    L: ['Times Square','34th','28th','23rd','Union Square','8th']
// };


var trains = {

  n: ['Times Square','34th','28th','23rd','Union Square','8th'],
  l: ['8th','6th','Union Square','3rd','1st'],
  6: ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']

};

// alert(trains.n[0]);




var n = ['Times Square','34th','28th','23rd','Union Square','8th'];

var l = ['8th','6th','Union Square','3rd','1st'];

var six = ['Grand Central','33rd','28th','23rd','Union Square','Astor Place'];



var transitStop = [];

var transitStopTwo = [];

// var trainy = n[0];





// var b = N.indexOf('34th');

// var rockCode = N.indexOf(1);
// console.log('Code for begin trip=', rockCode);



// console.log(N.indexOf(0));
//
// console.log(N[0]);











// var N = [
//
//   ['Times Square','34th','28th','23rd','Union Square','8th']
//
// ];

// console.log(trainLines.N[0]); // find a station




// 1 2 3 4 5 6
//
//     3      6




//
// var nline = ['Times Square','34th','28th','23rd','Union Square','8th'];





var travelPlanner = function(lineone,start,linetwo,destination){
  var unionSwap = lineone.indexOf('Union Square'); alert(unionSwap);

  for (var i = 0; i <= lineone.length; i++) {
    if ( lineone[i] === start ){
      var beginTrip = lineone[i];
      var startCode = lineone.indexOf(beginTrip);

    }
  }

  if ( lineone === linetwo){

    for (var i = 0; i <= linetwo.length; i++) {

      if ( linetwo[i] === destination){
        var endTrip = linetwo[i];
        var endCode = linetwo.indexOf(endTrip);

      }
    }

    if (endCode > startCode){
      console.log('going forwards');
    for (var i = startCode; i <= endCode; i++) {
         var addTransit = lineone[i];

         console.log(addTransit);
         transitStop.push(addTransit);
       }
    };

    if (endCode < startCode){
      console.log('going backwards');
          console.log('start code' + startCode);
    for (var i = startCode ; i >= endCode; i--) {
         var addTransit = lineone[i];

         console.log(addTransit);
         transitStop.push(addTransit);
       }
    };

      var announcement = transitStop.join();
      var numStops = transitStop.length;
      console.log('You must travel through the following stops on the N line:', announcement + '.' + numStops + ' stops in total.');





  } else {

    var endFirstTripCode = lineone.indexOf('Union Square');

    var beginFirstTripCode = linetwo.indexOf('Union Square');

    for (var i = 0; i <= linetwo.length; i++) {

      if ( linetwo[i] === destination){
        var endTrip = linetwo[i];
        var endCode = linetwo.indexOf(endTrip);


      }
    }

    if (endFirstTripCode > startCode){
      console.log('going forwards');
    for (var i = startCode; i <= endFirstTripCode; i++) {
         var addTransit = lineone[i];

         console.log(addTransit);
         transitStop.push(addTransit);
       }

    };

    if (endFirstTripCode < startCode){
      console.log('going backwards');
          console.log('start code' + startCode);
    for (var i = startCode ; i >= endFirstTripCode; i--) {
         var addTransit = lineone[i];

         console.log(addTransit);
         transitStop.push(addTransit);
       }

    };

    if (endCode > beginFirstTripCode){
      // console.log('going forwards');
    for (var i = beginFirstTripCode; i <= endCode; i++) {
         var addTransit = linetwo[i];

        //  console.log(addTransit);
         transitStopTwo.push(addTransit);
       }
       transitStopTwo.shift();

    };

    if (endCode < beginFirstTripCode){
      console.log('going backwards');
          console.log('start code' + startCode);
    for (var i = beginFirstTripCode ; i >= endCode; i--) {
         var addTransit = linetwo[i];

         console.log(addTransit);
         transitStopTwo.push(addTransit);
       }
       transitStopTwo.shift();
    };

    var announcement = transitStop.join();
    var announcementTwo = transitStopTwo.join();
    var numStops = transitStop.length + transitStopTwo.length;

    console.log('You must travel through the following stops on the chosen line:' + announcement + '.\n Change at Union Square.\n' + 'Your journey continues through the following stops: ' + announcementTwo + '.\n' + numStops + ' stops in total.');

    // You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
    // // // "Change at Union Square."
    // // // "Your journey continues through the following stops: 23rd, 28th, 33rd."
    // // // "7 stops in total."




  } // else




}; // function




















  // if (line === N){
  //   var stops = 6;
  // }; // first if
  //
  //
  // for (var i = 0; i <= stops; i++) {
  //   if (N[i] === start){
  //
      // var beginTrip = N[i];
      // console.log(beginTrip);
      // var startCode = N.indexOf(beginTrip);
  //     console.log('Code for begin trip=', startCode);
  //
  //     for (var i = 0; i <= stops; i++) {
  //       if (N[i] === destination){
  //         var endTrip = N[i];
  //         console.log(endTrip);
  //         var endCode = N.indexOf(endTrip);
  //         console.log('Code for end trip=', endCode);
  //         console.log('Line: ', line, '. Start at ', beginTrip, ' end at ', endTrip);

  //
  //       } // third if
  //
  //     } // second for
  //
  //
  //
  //
  //   } // second if
  //
  // } // first for

















// working end code


//   if (endCode > startCode){
//     console.log('going forwards');
//   for (var i = startCode; i <= endCode; i++) {
//        var addTransit = N[i];
//
//        console.log(addTransit);
//        transitStop.push(addTransit);
//      }
//   };
//
//   if (endCode < startCode){
//     console.log('going backwards');
//         console.log('start code' + startCode);
//   for (var i = startCode ; i >= endCode; i--) {
//        var addTransit = N[i];
//
//        console.log(addTransit);
//        transitStop.push(addTransit);
//      }
//   };
// //
// //
// //
// //
// //
// //
// //
//     var announcement = transitStop.join();
//     var numStops = transitStop.length;
//     console.log('You must travel through the following stops on the N line:', announcement + '.' + numStops + ' stops in total.');
//
//
//
// }; /// function
//
travelPlanner(n,'Times Square',six,'Grand Central');  // call the travel function
//
//
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
