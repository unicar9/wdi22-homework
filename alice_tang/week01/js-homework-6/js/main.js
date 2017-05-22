// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16
//
// The following credit card numbers are valid:
//
// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`
//
// The following credit card numbers are invalid:
//
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number
//
// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```
//
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.


// - Number must be 16 digits
var v1 = function(cr){
  return cr.length===16;
}

//all of them must be numbers
var v2 = function(cr){
  return !(/\D/.test(cr));
}

//all digits not the same
var v3 = function(cr){
  var result = false;
  var c = cr.split('');
  for (var i=1; i<c.length; i++){
    if (c[i] !== c[i-1]) {
       result = true;
    }
  }
  return result;
}

//final digit must be even
var v4 = function(cr){
  return (cr[cr.length-1])%2 == 0;
}

//the sum of all digit must be greater than 16
var v5 = function(cr){
  var sum=0;
  var c = cr.split('')
  for (var i=0; i<c.length; i++){
    sum += parseInt(c[i]);
  }
  return sum>16;
}

var validateCreditCard = function (cr){
   var c = cr.replace(/-/g, '');
   return v1(c) && v2(c) && v3(c) && v4(c) && v5(c);
}

console.log(validateCreditCard("9999-9999-8888-0000"));
console.log(validateCreditCard("6666-6666-6666-1666"));
console.log(validateCreditCard("a923-3211-9c01-1112"));
console.log(validateCreditCard("4444-4444-4444-4444"));
console.log(validateCreditCard("1111-1111-1111-1110"));
console.log(validateCreditCard("6666-6666-6666-6661"));
