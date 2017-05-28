// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.


var rainDrop = function (num) {
  var result;
  if ( num % 3 === 0 ) {
    var f3 = "Pling";
  } else {
    f3 = "";
  }
  if ( num % 5 === 0 ) {
    var f5 = "Plang";
  } else {
    f5 = '';
  }
  if ( num % 7 === 0 ){
    var f7 = "Plong"
  } else {
    f7 = ''
  }
  if ( num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0) {
    var f0 = string(num);
  } else {
    f0 = ''
  }
  console.log(f3+f5+f7+f0);
}


var drop = function (input) {

  var output = '';

  if (input % 3 === 0) {
    output += 'Pling';
  }

  if (input % 5 === 0) {
    output += 'Plang';
  }

  if (input % 7 === 0) {
    output += 'Plong';
  }

  if (output.length === 0) {
    output = String(input);
  }

  console.log(output);

}

// var num;
// var f1 = [(num % 3 === 0), 'Pling'];
// var f2 = [(num % 5 === 0), 'Plang'];
// var f3 = [(num % 7 === 0), 'Plang'];
//
// var output =
//
// var dropDrop = function (num) {
//   var p = ['Pling','Plang','Plong'];
//
//
//   }
//
//
//
// }
