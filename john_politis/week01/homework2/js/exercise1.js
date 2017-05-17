// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount,
// and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var DrEvil = function(amount) {
  return amount + ' dollars' + (( amount >= 1000000) ? (' (pinky)') :'');
}

console.log(DrEvil(10));
console.log(DrEvil(1000000));
