// simple version

var input = 1755;

var output = "";

if (input % 3 === 0){
  output += 'Pling';
}

if (input % 5 === 0){
  output += 'Plang';
}

if (input % 7 === 0){
  output += 'Plong';
}

if (output.length === 0){
   output = input;
}

console.log(output);












// my version

// var rainDrops = function(x){
//   var result = "";
//   if ( x % 3 === 0 ){
//     result = result + 'Pling';
//   }
//
//   if ( x % 5 === 0 ){
//     result = result + 'Plang';
//   }
//
//   if ( x % 7 === 0 ){
//     result = result + 'Plong';
//   }
//
//   if ( x % 3 !== 0 & x % 5 !== 0 &  x % 7 !== 0 ){
//     result = x.toString();
//
//   }
//
//   console.log(result);
// }
//
// rainDrops(15);
// rainDrops(34);













// var rainDrops = function(x){
//
//   if (x % 3 === 0 ) {
//     console.log('Pling');
//   } else if (x % 5 === 0 ) {
//     console.log('Plang');
//   } else if (x % 7 === 0 ) {
//     console.log('Plong');
//   } else {
//     var result = x.toString();
//     console.log(result);
//   }
//
// }
//
// rainDrops(1755);



// var rainDrops = function(x){
//   var result = x.toString();
//   if (result.includes(3)) {
//     console.log('Pling');
//   } else if (result.includes(5)) {
//     console.log('Plang');
//   } else if (result.includes(7)) {
//     console.log('Plong');
//   } else {
//     var result = x.toString();
//     console.log(result);
//   }
//
// }
//
// rainDrops(5);
