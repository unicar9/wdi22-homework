// // Anagram Detector
// //
// // Write a program that, given a word and a list of possible anagrams, selects the anagrams of the first word.
// //
// // In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
// //
// // Suggestions
// //
// // Start out by getting this working with discrete functions.
// // If you feel comfortable with that, try to put all your functions, collections, etc, into an object.
//
//
//
//
// var anagram = {
//   words :["enlists", "google", "inlets", "banana"],
//
//
//
//   sortWord: function(w){
//     var sortWord = w.split('').sort().join('');
//     for (var key in words) {
//       if (object.word(key)) {
//         console.log('the word is sorted to', sortWord);
//         return sortWord;
//
//       }// if
//       return -1;
//     }//for
//
//   }//func
// };
//

 var words = ["enlists", "google", "inlets", "banana"];
 var sortWord = function(w){
    var sortW= w.split('');
    sortWd=sortW.sort();
    sortWor=sortWd.join('');
    sortWord=sortWor.toLowerCase();
    for (var i = 0; i < words.length; i++) {
      if (sortWord === words[i]){
      console.log('the word is sorted to', sortWord);
              return sortWord;

    }//if

      return false;
    }//for

  };//func

console.log(sortWord("lstien"));

// teacher solution
// in console a.alphabetise() sth sort not function on var string on array=[3,2,1] the .sort() return [1,2,3] not working sort with string bfore you need to sort on it became letter
// split in to array

// test = ["enlists", "google", "inlets", "banana"];
// var anagramCheker = {
//   anagrams: [],
//
// customSort:function (word){
// // this function just sort the word
// var temp = word.split(''); split on nothing''split on every letter on string
// // // w can chain together our mthods.split('').sort(); in th sam line
// // temp = temp.sort();
// // // then join togethercall this func on nothing with nothing or empty string
// // temp = temp.join('');
// // return // with no rturn func return undfined also var in consol return undfined
// // in anagram do the work
// return word.split('').sort().join('');// only sort the letters
// },
// // candidateWords coms in consol we input it
//
// chechForAnagrams: function(word,candidateWords){// scond arrgs is array
//   word = word.toLowerCase();
//   // sort the main word
//   word = this.customSort(word);
//   for (var i = 0; i < candidateWords.length; i++) {
//     for var candidate = this.customSort(candidateWords[i].toLowerCase());// in () what pass in  every part in array
//     // compare candidate to word
//     if ( candidate===word){
//     this.anagrams.push(candidateWords[i]);//
//     // console.log(this.anagrams);
//   }//if
//
// }// for
// return this.anagrams;
// }
// };
// console.log('Expecting :["inlets","netsil"]');
// console.log(anagramCheker.chechForAnagrams('Liste',["enlists", "google", "inlets", "banana"]);// with out th checkforAnagram put tst array and no ned to much input
// end of teacher soltioun
