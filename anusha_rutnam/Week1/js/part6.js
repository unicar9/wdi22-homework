var verbing = function (x) {
var xStr = x;
var xStrLength = xStr.length;

if (xStrLength <= 3) {
	console.log (x);
}


var lastThree = (verbing.slice(0, xStrLength);)


}

verbing('abff');

// 6 Verbing
//
// Create a function called verbing. It should take a single argument,
//a string. If its length is at least 3, it should add 'ing' to its end,
//unless it already ends in 'ing', in which case it should add 'ly' instead.
//If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

//
//
// var drEvil = function (money) {
//
//
// drEvil();

// var rDrops = function (x) {
//   if (x%3 === 0){
//     console.log ("Pling");
//   }
//   else if (x%5 === 0) {
//     console.log ("Plang");
//   }
//   else if (x%7 === 0) {
//     console.log ("Plong");
//   }
//
// else  {var xStr = x.toString();
//   console.log (xStr);
// }
//
// };
//
// rDrops(13);
