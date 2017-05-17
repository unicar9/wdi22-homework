var mixUp = function (x,y) {
  var xStr = x;
  var yStr = y;
  var xLength = xStr.length;
  var yLength = yStr.length;
  var xInt = xStr.slice(0, 2);
  var yInt = yStr.slice(0, 2);
  var xRestAmount = (xLength);
  var yRestAmount = (yLength);
  var xRest = xStr.slice(2, xRestAmount);
  var yRest = yStr.slice(2, yRestAmount);
  // var xRest = xstr.slice(2, 13);



  var test = console.log(yInt+xRest + " " + xInt+yRest);

};

mixUp('dog','dinner');






// 4 MixUp
//
// Create a function called mixUp. It should take in two strings,
//and return the concatenation of the two strings (separated by a space)
//slicing out and swapping the first 2 characters of each.
//You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
