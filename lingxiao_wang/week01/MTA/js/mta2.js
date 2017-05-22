console.log("Where do you want to go");
console.log('');



// inside an object mtaNetwork. line names as keys, stops as values.
// maybe later: try construtor? factory? write a function contain travlling in 2 directions and store all stops in array

var mta = {

    lines:{
      "N": [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
      "L": [ "8th", "6th", "Union Square", "3rd", "1st" ],
      "6": [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]
    }, // key lines


//add later: if the stops or line names are not found, if the in and out stops are the same.
    planTrip: function ( inLine, inStop, outLine, outStop ){


      if ( inLine === outLine ) {  //  same line
          var totalStops = []; // total stops travlled, store in this array
          var currentLine = this.lines[inLine];
          var i = currentLine.indexOf( inStop ) ;
          var o = currentLine.indexOf( outStop );

          if (o >= i) {
            totalStops = currentLine.slice( (i+1), (o+1) );
          }  else { // traveling backwards
            totalStops = currentLine.slice( o, i ).reverse();
          }

        console.log("Travel with line " + inLine + ", through " + totalStops.join(', '));
        console.log(totalStops.length + " stops in total");


      } else {  // interchange
        var totalStopsIn = [];
        var totalStopsOut = [];
        var inLineChange = this.lines[inLine];
        var outLineChange = this.lines[outLine];
        var i2 = inLineChange.indexOf( inStop );
        var o2 = outLineChange.indexOf( outStop );
        var cIn = inLineChange.indexOf("Union Square");
        var cOut = outLineChange.indexOf("Union Square");

        console.log(i2,o2,cIn,cOut);

        if (cIn >= i2 ) { // travel through the getting on line
          totalStopsIn = inLineChange.slice( (i2+1), (cIn+1) );
        } else {
          totalStopsIn = inLineChange.slice( cIn, i2 ).reverse();
        }

        if (cOut <= o2 ) { // travel through the getting off line
          totalStopsOut = outLineChange.slice( (cOut+1) , (o2+1) );
        } else {
          totalStopsOut = outLineChange.slice( o2 , cOut ).reverse();
        }

        console.log( "Travel with line " + inLine + ", through " + totalStopsIn.join(', ') );
        console.log( "Change at Union Square");
        console.log( "Continue with line " + outLine + ", through " + totalStopsOut.join(', ') );
        console.log( (totalStopsIn.length+totalStopsOut.length) + " stops in total");

      } // else, interchange

    }, // key single line trip function

} // end of mta


//test
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
