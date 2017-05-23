// Write a function findLongestWord that takes an array of words and returns the length of the longest one.


var findLongestWord = function (colors){
  var maxLength=0; var position =0;
  for (var i = 0; i < colors.length; i++) {
    if (colors[i].length > maxLength){
      maxLength=colors[i].length;
      position = i;
    }
  }
  console.log('max word long is '+ maxLength+' the word is '+ colors[position]);
  retrun maxLength;
};

var colors=['red','blue','yellow','orange','green','purpule'];
findLongestWord(colors);
