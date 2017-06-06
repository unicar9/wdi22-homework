

//
// // Output
// cashRegister(cartForParty); // 60.90

//
// Example (using the above cart):
//
// beginsWithItemTotal(cartForParty, "a");      // returns: 0.95

// The object contains item names and prices (itemName: itemPrice). The function should return the total price of the items in the shopping cart. Example:

var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  booze: "12.44",
  proteinShake: "22.36",
  Acorn: "0.35",
  toothpaste: "0.99"
};

// Write a function called cashRegister that takes a shopping cart object as its only argument.
var cashRegister = function(cart){
  var grandTotal = 0.0;
  for( var key in cart){
    var price = parseFloat( cart[key]);
    grandTotal += price
  }
  return grandTotal;
};
//
var ourAnswer = cashRegister(cartForParty);
console.log(ourAnswer);

 // The string should contain a single character, and your function should return the total price of all items in the cart whose names begin with that character. Make your function case-insensitive if possible!

// Next, write another function, which takes a shopping cart object and a string as arguments.

var beginsWithItemTotal = function(cart, startChar){
  var grandTotal = 0.0;

  for(var key in cart){
    if( key[0].toUpperCase() === startChar.toUpperCase()) {
      var price = parseFloat( cart[key]);
      grandTotal += price;
    } //if

  } // for
  return grandTotal;
};

console.log(beginsWithItemTotal(cartForParty, "t"));
