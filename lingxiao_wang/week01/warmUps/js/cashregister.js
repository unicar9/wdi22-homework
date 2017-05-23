// Write a function called cashRegister that takes a shopping cart object as its only argument. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the items in the shopping cart. Example:
//
// // Input
// var cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36",
//   Acorn: "0.35"
// };
//
// // Output
// cashRegister(cartForParty); // 60.90

var cartAwesome =
{
banana: "1.25",
handkerchief: ".99",
Tshirt: "25.01",
apple: "0.60",
nalgene: "10.34",
proterinShake: "22.36",
Acorn: "0.35"
};

var cashRegister = function(cart) {
  var total = 0.0;
  for (var key in cart){
    var price = parseFloat( cart[key] );
    total += price;
  }
  return total;
};

console.log(cashRegister(cartAwesome));


// Next, write another function, which takes a shopping cart object and a string as arguments. The string should contain a single character, and your function should return the total price of all items in the cart whose names begin with that character. Make your function case-insensitive if possible!
//
// Example (using the above cart):
//
// beginsWithItemTotal(cartForParty, "a");      // returns: 0.95

var beginWithItemTotal = function( cart, firstChar ) {
  var total = 0.0;

  for( var key in cart ){
    if ( key[0].toUpperCase() === firstChar.toUpperCase() ){
      var price = parseFloat( cart[key] );
      total += price;
    }
  }// for
  return total;
};

console.log(beginWithItemTotal( cartAwesome, 'a' ));
