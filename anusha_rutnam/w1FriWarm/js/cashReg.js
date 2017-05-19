// // // var cartForParty = {
// // //  banana: "1.25",
// // //  handkerchief: ".99",
// // //  Tshirt: "25.01",
// // //  apple: "0.60",
// // //  nalgene: "10.34",
// // //  proteinShake: "22.36",
// // //  Acorn: "0.35"
// // // };
// // //
// // // var test = function (c){
// // //   // var description = c.banana
// // //   // how do i get all key values when the keys have diff names
// // // c.keys(cartForParty);
// // // console.log( cartForParty );
// // // };
// // //
// // // test( cartForParty );
// //
// //
// // // solution
// //
// // var cartForParty = {
// //  banana: "1.25",
// //  booze: "2.00",
// //  handkerchief: ".99",
// //  Tshirt: "25.01",
// //  apple: "0.60",
// //  nalgene: "10.34",
// //  proteinShake: "22.36",
// //  Acorn: "0.35"
// // };
// //
// // //copy and paste instructions here as psuedo code
// // var cashRegister = function (cart) {
// //   var grandTotal = 0.0;
// //   for (var key in cart) {
// //     //this is a loop
// //     var price = parseFloat (cart[key]);
// //     grandTotal += price
// //
// //   }
// //   return grandTotal;
// // };
// // //scope in console is by default global
// //
// // var ourAnswer = cashRegister(cartForParty);
// // console.log(ourAnswer);
// //
// // //
// // var beginsWithItemTotal = function (cart, startChar){
// //   //you can take object/string/array as an argumen
// //   var grandTotal = 0.0
// //   for (var key in cart){
// //     if (key[0].toUpperCase() === startChar.toUpperCase()){
// //       //would == have taken care of case problem? answer:no. This way, changing the case on both sides,  makes the code more robust
// //       var price = parseFloat (cart[key]);
// //       grandTotal += price;}
// //     }
// //   //for
// // return grandTotal;
// // //you want return outside of for loop
// // };
// // console.log(beginsWithItemTotal(cartForParty,"b"));
// //
// //
// //
// //
// // // var movie = {
// // // object
// // // //   title: 'Inherent Vice',
// // // key:value
// // //   duration: 122,
// // //   stars: ['Joaquim Phoenix', 'Reese Witherspoon', 'Josh Brolin']
// // // };
// // //
// // // var movieInfo = function ( m ) {
// // //
// // //   var description = m.title + ' lasts for ' +
// // //                     m.duration + ' minutes. Stars: ' +
// // //                     m.stars.join(', ');
// // //
// // //   console.log( description );
// // // };
// // //
// // // movieInfo( movie );
// // //
// //
// //
// //
// // // The Cash Register
// // //
// // // Write a function called cashRegister that takes a shopping cart object as its only argument. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the items in the shopping cart. Example:
// // //
// // // // Input
// // // var cartForParty = {
// // //  banana: "1.25",
// // //  handkerchief: ".99",
// // //  Tshirt: "25.01",
// // //  apple: "0.60",
// // //  nalgene: "10.34",
// // //  proteinShake: "22.36",
// // //  Acorn: "0.35"
// // // };
// // //
// // // // Output
// // // cashRegister(cartForParty); // 60.90
// // // Next, write another function, which takes a shopping cart object and a string as arguments. The string should contain a single character, and your function should return the total price of all items in the cart whose names begin with that character. Make your function case-insensitive if possible!
// // //
// // // Example (using the above cart):
// // //
// // // beginsWithItemTotal(cartForParty, "a");      // returns: 0.95
//
var library = [
  {
    title: "The Hitch-Hiker's Guide to the Galaxy",
    author: "Douglas Adams",
    alreadyRead: true
  },
  { title: "Gödel, Escher, Bach", author: "Douglas Hofstadter", alreadyRead: true },
  { title: "Ulysses", author: "James Joyce", alreadyRead: false }
];

for (var i = 0; i < library.length; i++)
//for every one of i do the following () {
  var book = library[i];
// here is i like the index, and because of previous line, is counting through
  if ( book.alreadyRead ) {
    // description = "You have already read " + book.title + " by " + book.author;
    console.log( "You have already read " + book.title + " by " + book.author );
  } else {
    console.log( "%cYou still have have to read " + book.title + " by " + book.author, 'color: red' );
  }
