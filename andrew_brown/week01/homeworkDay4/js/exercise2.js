// Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
//
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.



// 9999-9999-8888-0000
// 6666-6666-6666-1666
// a923-3211-9c01-1112
// 4444-4444-4444-4444
// 1111-1111-1111-1110
// 6666-6666-6666-6661


var removeDash = function() {
  ccArray.splice(4,1);
  ccArray.splice(8,1);
  ccArray.splice(12,1);
  console.log(ccArray)
  return;
}

var total = 0;

var sumCheck = function() {
  for (i = 0; i < ccArray.length; i++) {
    currentItem = parseInt(ccArray[i]);
    total += currentItem;
  }

  if (total < 16) {
    console.log("ERROR Credit card digits sum to less than 16");
  } else {
    console.log("Credit card digits sum to greater than 16")
  }
}

var invalidCharacters = function () {
  ccArray = ccArray.replace(/\D/g,'');
}

var validateCreditCard = function(ccNumber) {
  ccArray = ccNumber.split("")
    if (ccArray.length === 19) {
      removeDash();
      invalidCharacters();
      console.log(ccArray);
      sumCheck();
      invalidCharacters();
    } else {
      console.log("Invalid length.")
    }
}

var duplicates = function() {
  for (var i = 1; i < length.ccArray; i++) {
    if (ccArray[i] == ccArray[i]-1 ) {
    }
  }
}

var finalOdd = function () {
  if (ccArray[15] % 2 === 0) {
    console.log("Final digit is odd. Invalid number.")
  }
}


// var unique = ccArray.filter(function(index) {
//     return index == self.indexOf(elem);
//     console.log(ccArray);
// })

// arr = removeDash.filter( function( item, index, inputArray ) {
//            return inputArray.indexOf(item) == index;
//     });

validateCreditCard('1111-111c-1111-1111')
