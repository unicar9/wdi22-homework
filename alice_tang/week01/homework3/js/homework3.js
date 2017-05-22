// Array and Functions Bonus Material
//


// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

var maxOfTwoNumbers = function(num1,num2){
  var max = num1>num2? num1: num2;
  return max;
}

maxOfTwoNumbers(3,4);
console.log("maxOfTwoNumbers(3,4): ", maxOfTwoNumbers(3,4));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

var maxOfThree = function(num1,num2,num3){
  var max = maxOfTwoNumbers(num1,num2);
  max = maxOfTwoNumbers(max,num3);
  return max;
}

maxOfThree(9,7,20);
console.log("maxOfThree(9,7,20): ", maxOfThree(9,7,20));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var isVowel = function(char){
  var vowels = ['a','e','i','o','u'];
  for (var i=0; i<vowels.length; i++) {
    if (char===vowels[i]) {
      return true;
    }
  }
  return false;
}

console.log("isVowel('i'):",isVowel('i'));
console.log("isVowel('b'):",isVowel('b'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var sumArray = function(arr){
  var sum=0;
  for (var i=0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

console.log("sumArray([1,2,3,4]):",sumArray([1,2,3,4]));

var multiplyArray = function(arr) {
  var product = 1;
  for (var i=1; i<arr.length; i++) {
    product *=arr[i];
  }
  return product;
}

multiplyArray([1,2,3,4]);
console.log("multiplyArray([1,2,3,4]):",multiplyArray([1,2,3,4]));

// Bonus
//
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

var reverseString = function(str) {
  var arr = str.split('');
  var revArr=[];
  for (var i = 0; i < arr.length; i++) {
    revArr[arr.length-i] = arr[i];
  }
  return revArr.join('');
}

console.log("reverseString('jag testar'):",reverseString('jag testar'));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

var findLongestWord = function(arr) {
  var longestWordLength =0;
  for (var i = 0; i < arr.length; i++) {
    if (longestWordLength < arr[i].length) {
      longestWordLength = arr[i].length
    }
  }
  return longestWordLength;
}

console.log("findLongestWord(['apple','banana','pear']):",findLongestWord(['apple','banana','pear']));


// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

var filterLongWords = function(arrWords,num){
  var longArrWords = [];
  for (var i = 0; i < arrWords.length; i++) {
    if ( arrWords[i].length > num){
      longArrWords.push(arrWords[i]);
      console.log(arrWords[i].length)
    }
  }
  return longArrWords;
}

console.log("filterLongWords(['apple','banana','kiwifruit','grapefruit'],7):",filterLongWords(['apple','banana','kiwifruit','grapefruit'],7));
