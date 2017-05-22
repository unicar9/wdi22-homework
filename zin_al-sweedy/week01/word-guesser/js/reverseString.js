// Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".

var reverseString = function (str){
  var revstr='';
  for (var i = str.length; i >0; i--) {
    revstr=revstr+str[i-1];
    console.log(revstr);
  }
};


reverseString("jag testar");
