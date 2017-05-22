// var onLine = prompt('Please enter your start line.');
// var onStop = prompt('Please enter your start stop.');
// var offLine = prompt('Please enter your end line.');
// var offStop = prompt('Please enter your end stop.');

var mta = {
  lineStops: {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  },

  troughStops: function (line, onStop, offStop) {
    var arr = this.lineStops[line];

    var onIndex = arr.indexOf(onStop);
    var offIndex = arr.indexOf(offStop);

    if (onIndex < offIndex) {
      return arr.slice((onIndex + 1), (offIndex + 1));
    } else {
      return arr.slice(offIndex, onIndex).reverse();
    }

  },

  planTrip: function (onLine, onStop, offLine, offStop) {
    // on the same line
    if (onLine === offLine) {

      var stops1 = this.troughStops(onLine, onStop, offStop);

      var numStops = stops1.length;

      console.log("You must travel through the following stops on the " + onLine + " line: " + stops1.join(', '));
      console.log(numStops + " stops in total.")

    } else { // on the different lines

      var stops1 = this.troughStops(onLine, onStop, 'Union Square');
      var stops2 = this.troughStops(offLine, 'Union Square', offStop);

      var numStops = stops1.length + stops2.length

      console.log("You must travel through the following stops on the " + onLine + " line: " + stops1.join(', '));
      console.log("Change at Union Square.");
      console.log("Your journey continues through the following stops on the " + offLine + " line: " + stops2.join(', '));
      console.log(numStops + " stops in total.")

    }
  },
};

// mta.planTrip(onLine, onStop, offLine, offStop);
// mta.planTrip('6', 'Astor Place', 'L', '6th');
mta.planTrip('N', '34th', '6', '33rd');
// mta.planTrip('L', 'Times Square', 'L', '6th');
