
// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
//
// // FACTORY PATTERN
//
// var Triangle.Factory = function ( a, b, c ){
//   var tri = {};
//   tri.sideA = a;
//   tri.sideB = b;
//   tri.sideC = c;
//
//   return tri; //this is the work that the factory does
//
//
// };
//
// var Triangle = function (a, b, c ){
//   this.sideA = a;
//   this.sideB = b;
//   this.sideC = c;
// }
//
//
// var fatoryTriangle = TriangleFactor (5, 5, 5,);
// console.log("factoryTriangle", factoryTriangles);
//
// var constructorTriangle = new Triangle (5,5,5);

//Given a data structure like the one shown below (an array of objects with any combination of key names and value types), write a function which takes such an array as an argument and iterates over it, printing out all the keys and values for each of the array elements. *

// var arr = [
//     { name: "Edgy", eyes: "mustard", height: false},
//     { title: "JS love", cost: 5.00, inStock: false},
//     { first: 12, second: "cavoodle", third: [1,12,15]}
// ];
//
// var value = function ( arr ){
//
//   var allValues = arr[i],
//
//   for (var i = 0; i < allValues.length; i++){
//     allValues;
//   } for (var i = 0; i < arr.length; i++) {
//     arr[i]
//   }
//
//   console.console.log( arr[i );
//   return allValues;
//
// };
//
// console.log (allValues);


// Write a function which takes two integer arguments, 'max' and 'factor', and iterates over every integer between 1 and 'max', testing whether the each integer is divisible by 'factor'. If it is divisible, it should add that integer to a result array. At the end of the loop the function should return the result array which contains all the integers up to 'max' which were found to be divisible by 'factor'.


var result = [];

var integer = function ( max , factor ){

  var sum = 0;
  var final = max / factor

  for (var i = 0; i < final.length; i++) {
    if ( final[i] % 0 ) {
      return [i]
    }
  }
}

integer (5, 10);

// Steps
// Create the array
// Create the function for the integer that will be called back at the end of the loop it should have the two arugments "max" and "factor"
// Create a variable that will change or check the array are integers
// Create a loop the cycles through each elements as an integer
// Create an if function that will test whether the integer is evenly divisble by the factor. Use a modulus operater and the === 0 to verify
//       if the value is true then return the value
//       don't do an else just have it continue to run through
// Call back the funtion giving an example of the integers it needs to loop around
