console.log("You'll never walk alone");
console.log('');

// inside an object mtaNetwork. line names as keys, stops as values.
// maybe later: try construtor? factory? write a function contain travlling in 2 directions and store all stops in array

var mta = {

    lines:{
      N: [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
      L: [ "8th", "6th", "Union Square", "3rd", "1st" ],
      6: [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ],
      interChange: "Union Square"
    }, // key lines


    stopsTravelled: function ( lineName, startStop, endStop ) {

      var totalStops = [];
      var currentLine = this.lines[lineName];
      var start = currentLine.indexOf( startStop );
      var end = currentLine.indexOf( endStop );

      if ( end >= start ) {
        totalStops = currentLine.slice( (start+1), (end+1) );
      } else {
        totalStops = currentLine.slice( end, start ).reverse();
      }

      return totalStops;

    }, // key, stops travelled, get stops stored in an array with start and end index


//add later: if the stops or line names are not found, if the in and out stops are the same.
    planTrip: function ( onLine, onStop, offLine, offStop ) {


      if ( onLine === offLine && onStop === offStop ) {  //  same line same stop

        console.log("No need to travel");

      } else if (onLine !== offLine ) {  // 2 lines, interChange needed

        var interChangeStops = this.lines.interChange;

        var arr1 = this.stopsTravelled( onLine, onStop, interChangeStops );
        var arr2 = this.stopsTravelled( offLine, interChangeStops, offStop );

        console.log( "Travel with line " + onLine + ", through " + arr1.join(', ') );
        console.log( "Change at " + interChangeStops );
        console.log( "Continue with line " + offLine + ", through " + arr2.join(', ') );
        console.log( (arr1.length + arr2.length) + " stops in total");


      } else {

        var arr = this.stopsTravelled( onLine, onStop, offStop );

        console.log("Travel with line " + onLine + ", through " + arr.join(', '));
        console.log(arr.length + " stops in total");

      } // else, single line trip

    }, // key

} // end of mta


// test
// log lines and stops for testing
console.log(mta.lines['N'],mta.lines['L'],mta.lines['6']);
console.log('');

console.log('Line N, from "Times Square" to "Union Square"');
mta.planTrip( "N", "Times Square", "N", "Union Square" );
console.log('');

console.log('Line N, from "Union Square" to "Times Square"');
mta.planTrip( "N", "Union Square", "N", "Times Square" );
console.log('');

console.log('From: Line 6 - Grand Central To: Line N - Times Square');
mta.planTrip( "6", "Grand Central", "N", "Times Square" );
console.log('');

console.log('From: Line L - 1st To: Line 6 - Grand Central');
mta.planTrip( "L", "1st", "6", "Grand Central" );

// console.log('');
// mta.planTrip('L', 'Union Square', '6', 'Astor Place')
