// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version
// where all occurences of its first character have been replaced with '*', except for the first character
// itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
// 
// var word = "";
//
// var fixStart = function(string) {
//   character = string[0];
//   console.log(character);
//     for (var i = 1; i < string.length; i++) {
//       if (string[i] === character) {
//         word = string.replace(character, "*");
//       }
//     }
//     console.log(word);
// }
//
// fixStart("babble");


var fixStart = function( str ) {
  var firstChar = str[0];
  var array = str.split;
  console.log(array);
}

fixStart("babble");

//   for (var i = 1; i < array.length; i++) {
//     var currentChar = array[0];
//
//     if (currentChar === firstChar ) {
//       str[i] = "*";
//
//     }
//   }
// }
