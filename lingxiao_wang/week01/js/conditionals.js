// What number's bigger?
//
// Write a function named greaterNum that:
//
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

var greaterNum = function(num1,num2){
  if (num1 >= num2){
    var reuslt = num1;
  } else {
    result = num2;
  }
  console.log("The greater number of " + num1 + " and " + num2 + " is " + result);
}

greaterNum(5,10);
greaterNum(235587,395696);

// The World Translator
//
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
