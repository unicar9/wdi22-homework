// MixUp
//
// Create a function called mixUp. It should take in two strings,
// and return the concatenation of the two strings (separated by a space) slicing out
// and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function(s1,s2) {
  return  s2.slice(0,2) + s1.substr(2) + ' ' + s1.slice(0,2) + s2.substr(2);
}

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));
