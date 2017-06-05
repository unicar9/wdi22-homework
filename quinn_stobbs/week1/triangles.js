// Geometry Function Lab
//
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


// var rectangle = {
//   length: 4,
//   width: 4
// };
//
// var isSquare = function ( num ){
//
//   if ( rectangle.length === rectangle.width ){
//     console.log("True");
//   } else {
//     console.log("False");
//   };
//
// };
//
// isSquare ();
//
// var area = rectangle.length * rectangle.width
//
// var perimeter = 2 * (rectangle.length * rectangle.width)


// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not


////ANSWERS


// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
//
// var isEquilateral = function (num2){
//
//   if (triangle.sideA === triangle.B === triangle.C) {
//     console.log("True");
//   } else{
//     console.log("False");
//   };
// };
//
// isEquilateral ();
//
// var isEquilateral2 = triangle.sideA === triangle.sideB === triangle.sideC
// console.log(isEquilateral2);
//
// var isIsosceles = function (){
//
//   if (triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideA === triangle.sideC) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// }

// isIsosceles ();
//
// var area = function (){
//
//   var height = triangle.sideB - (triangle.sideA/2);
//
//   console.log ((triangle.sideA * (height** triangle.sideA))/2);
//
// }

// area ();

// var obtuse = function (){
//
//   if ( (triangle.sideA**2 )+(triangle.sideB **2 ) === (triangle.sideC ** 2)) {
//     console.log("True");
//   } else {
//     console.log("False");
//   };
//
// };
//
// obtuse ();

// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// Input
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

//Turn everything into an array

var array = Object.keys(cartForParty).map(function(key) {
  return cartForParty[key];
});

console.log(array);

// var array2 = Object.keys(cartForParty);
//
// console.log (array2);


//Turned everything into an integer
var result = array.map(Number);
result[3] // 71
typeof(result[3]) // "number"


console.log(result);

var sum = 0;

for (var i = 0; i < result.length; i++) {
  sum += result[i];
  ``
};


console.log(cartForParty["proteinShake"]);

console.log(sum);


// var sum = function (){
//   for (var i = 0; i < result.length; i++) {
//       var total = result[i];
//       number += total;
//   };
// };
//
// console.log(sum);

// var array = $.map(cartForParty, function(value, index) {
//     return [value];
// });
//
// console.log(array);
//


// defined the values to substitute
// price, x, array
// for in function in order to parsefloat
//    gives the array that can be sued
//

//used sumtotal in order to add in the arrays to return the values

//make sure to call the functions in the right order


// var array = function (){
//
//   for (var i = 0; i < cartForParty.length; i++) {
//     var change = parsefloat.cartForParty[i];
//     push.change[i];
//     console.log(change);
//   };
//
//   console.log(change);
// };




// var cashRegister = sum (){
//
//   var sum = 0;
//   for ( var el in cartForParty){
//     if (cartForParty.hasOwnProperty ( el )){
//       sum += parsefloat (cartForParty [el])
//     };
//
//     return sum;
//   };
//
// cashRegister ();

// var banana = parsfloat (cartForParty.banana);
// var handkerchief = parsfloat (cartForParty.handkerchief);
// var Tshirt = parsfloat (cartForParty.Tshirt);
// var apple = parsfloat (cartForParty.apple);
// var nalgene = parsfloat (cartForParty.nalgene);
// var proteinShake = parsfloat (cartForParty.proteinShake);

//   console.log( banana + handkerchief + Tshirt + apple + nalgene + proteinShake);
// }


// Output
// cashRegister (cartForParty)); // 60.55
