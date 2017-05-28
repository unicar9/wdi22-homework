// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

var input = 2;
var output = '';

if(input % 3 === 0) {
  output += 'Pling';
};

if(input % 5 === 0) {
  output += 'Plang';
};

if(input % 7 === 0) {
  output += 'Plong';
};

output = String(input);

console.log(output);
