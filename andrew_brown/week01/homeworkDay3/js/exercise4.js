

// // # Array and Functions Bonus Material
// //
// // 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

var maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
    return num1;
  } else if (num1 < num2) {
    console.log(num2);
    return num2;
  } else {
    console.log("Numbers are equal")
  }
}

maxOfTwoNumbers(2, 200);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

var maxOfThree = function(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2);
  } else if (num3 > num1 && num3 > num2) {
    console.log(num3);
  } else {
    console.log("Something, somewhere is equal")
  }
}

maxOfThree(1,2,3)

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var vowelCheck = function(letter) {
  if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    console.log("true");
  } else {
    console.log("false");
  }
}

vowelCheck("a");

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

var numbers = [1,2,3,4,5];

var sumArray = function(numbers) {
  for (var i = 0; i < numbers.length; i++){
    var numbers[i]++;
  }
}

console.log(sumResult);


// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
