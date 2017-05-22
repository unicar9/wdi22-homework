// Write a function findLongestWord that takes an array of words and returns the length of the longest one.Write a function filterLongWords that takes an array of words
// and an number i and returns the array of words that are longer than i.


var filterLongWords = function (colors,i){
 var longestWords=[];

  for (var j = 0; j < colors.length; j++) {
    if (colors[j].length > i){
      longestWords[longestWords.length]=colors[j];

    }
  }
  for (var i = 0; i < longestWords.length; i++) {
  console.log(longestWords[i]);
  }
  return longestWords;
};

var colors=['red','blue','yellow','orange','green','purpule'];


filterLongWords(colors,5);
