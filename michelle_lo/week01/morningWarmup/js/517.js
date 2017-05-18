// Warmup - Raindrops
//
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
// Examples
//
// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// // Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
//
//ATTEMPT ONE
// var raindrop = function(x) {
//   var pling = (x % 3) === 0;
//   var plang = (x % 5) === 0;
//   var plong = (x % 7) === 0;
//
//   if (pling && plang && plong) {
//   console.log('PlingPlangPlong');
//   } else if (pling && plang) {
//     console.log('PlingPlang');
//   } else if (plang && plong) {
//     console.log('PlangPlong');
//   } else if (pling && plong) {
//     console.log('PlongPlong');
//   } else if (pling) {
//     console.log('Pling');
//   } else if (plang) {
//     console.log('Plang');
//   } else if (plong) {
//     console.log('Plong');
//   } else {var xString = x.toString();
//     console.log(xString)}
//     console.log(typeof xString);
//   }
//
// raindrop(77)

//ATTEMPT TWO
// var output1;
// var output2;
// var output3;
//
// var raindrop = function (x) {{
//   if ( x % 3 === 0) {
//       output1 = 'Pling';}
//   if ( x % 5 === 0) {
//       output2 = 'Plong';}
//   if ( x % 7 === 0) {
//       output3 = 'Plang';}
// {console.log(output1 + output2 + output3);}
// } else { var xString = x.toString();
//       console.log(xString)}
//       console.log(typeof xString);}
//
//     raindrop(5)

var input = 105;

var output=""; //i.e. initialize as empty string

if (input % 3 === 0) {
  output += 'Pling'; //use += to build up on output without having to type out 'Output'
}
if (input % 5 === 0) {
  output += 'Plong';
}
if (input % 7 === 0) {
  output += 'Plang';
}
if (output.length === 0) {
  output = input; // input = output as you want to make the output the same as the input i.e. number that doesnt reach conditons
}
console.log(output.toString()) // to force the out to be a string - relevant if the output is a number

//dont want to use else because you dont want outputs to be mutually exclusive. here you want the statement to run regardless of whether the one before was successful(and ran)
