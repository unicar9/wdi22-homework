var onLine = prompt('Please enter your start line.');
var onStop = prompt('Please enter your start stop.');
var offLine = prompt('Please enter your end line.');
var offStop = prompt('Please enter your end stop.');

var mta = {
  lineStops: {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  },

  planTrip: function (onLine, onStop, offLine, offStop) {

    // on the same line
    if (onLine === offLine) {
      var arr = this.lineStops[onLine];
      var onIndex = arr.indexOf(onStop);
      var offIndex = arr.indexOf(offStop);

      var numStops = Math.abs(onIndex - offIndex);

      if (onIndex < offIndex) {
        var stops1 = arr.slice((onIndex + 1), (offIndex + 1));

      } else {
        var stops1 = arr.slice(offIndex, onIndex);
        stops1 = stops1.reverse();

      }
      console.log("You must travel through the following stops on the " + onLine + " line: " + stops1.join(', '));
      console.log(numStops + " stops in total.")

    } else { // on the different lines
      var arr1 = this.lineStops[onLine]; // access array for the star line
      var arr2 = this.lineStops[offLine]; // access array for the end line

      var onIndex1 = arr1.indexOf(onStop);
      var onInter = arr1.indexOf('Union Square'); // access two indexes for the start stop and the intersaction on the start line

      var offInter = arr2.indexOf('Union Square');
      var offIndex1 = arr2.indexOf(offStop); // access two indexes for the end stop and the intersaction on the end line

      var numStops = Math.abs(onIndex1 - onInter) + Math.abs(offIndex1 - offInter); // total stops

      if (onIndex1 < onInter) {
        var stops1 = arr1.slice((onIndex1 + 1), (onInter + 1));

      } else {
        var stops1 = arr1.slice(onInter, onIndex1);
        stops1 = stops1.reverse();
      }

      if (offInter < offIndex1) {
        var stops2 = arr2.slice((offInter + 1), (offIndex1 + 1));

      } else {
        var stops2 = arr2.slice(offIndex1, offInter);
        var stops2 = stops2.reverse();
      }

      console.log("You must travel through the following stops on the " + onLine + " line: " + stops1.join(', '));
      console.log("Change at Union Square.");
      console.log("Your journey continues through the following stops on the " + offLine + " line: " + stops2.join(', '));
      console.log(numStops + " stops in total.")

    }
  },
};


mta.planTrip(onLine, onStop, offLine, offStop);
// mta.planTrip('6', 'Astor Place', 'L', '6th');
// mta.planTrip('N', '34th', 'L', '6th');
// mta.planTrip('L', 'Times Square', 'L', '6th');
