// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the first word.
//
// In other words, given: "listen" and  the program should return "inlets".
//
// Suggestions
//
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.
var test = [ "enlists", "google", "inlets", "banana"],
var anagramChecker = {
  anagrams: [],

  customSort: function (word) {
    // var temp = word.split('');
    // temp = temp.sort();
    // temp = temp.join('');
    // return
    return (word.split('').sort().join(''));
  },

  checkForAnagrams: function(word, candidateWords){

    word = word.toLowerCase();
    // Sort the main word
    word = this.customSort(word);

      // ["enlists", "google", "inlets", "banana"]
    for (var i = 0; i < candidateWords.length; i++) {
      var candidate = this.customSort(candidateWords[i].toLowerCase())

      // compare the cnadidate to word
      if ( candidate === word ){
        this.anagrams.push( candidateWords[i] )
      }//if
    }//for
    return this.anagrams
  }
};

console.log('Expecting: ["inlets, "netsil"]');
console.log( anagramChecker.checkForAnagrams('listen', ["enlists", "google", "inlets", "banana", "netsil"]));
