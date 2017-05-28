for (var i = 0; i < metroLines.length; i++) {
  var metroLines = metroLines[i];{
    for (var i = 0; i < metroLines.length; i++) {
      var metroLineStops = metroLines.lines.stops[i];
        console.log(metroLines.line.name + ' has ' + metroLines.line.stops);
    }
  }
};

//works to print line name and A station
console.log(metroLines.line[0].name + " contains " + metroLines.line[0].stops[0]);

var metroStopsFixed = metroLines.line[0].stops



console.log(metroLines.line[0].name + metroStopsFixed + " second line: " + metroLines.line[1].stops + "third line: " + metroLines.line[2].stops) // test that the whole of the line.stops array prints

for (var i = 0; i < metroStopsFixed.length; i++) {
  console.log("array working?" + metroStopsFixed[i]);
}

console.log(metroLines.line[0].name + " contains " + metroLines.line[0].stops[0]);

// for (var i = 0; i < metroLines.line[0]stops[i].length; i++) {
//   console.log(metroLines.line[0]stops[i]);
// }

for (var i = 0; i < metroLines.length; i++) {
  for (var j = 0; j < metroLines[i].name.length; j++) {
    console.log(metroLines[i].stops[j] + " is on the " + metroLines[i].name + " line");
  };
} // to test loop works to print whole of array
