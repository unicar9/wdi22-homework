// Verbing
//
// Create a function called verbing. It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
// in which case it should add 'ly' instead. If the string length is less than 3,
// it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function(verb){

    if ( verb.length >= 3 && !verb.endsWith('ing') ) {
      return verb+'ing';
    }
    else if ( verb.length >= 3 && verb.endsWith('ing') ) {
       return verb + 'ly';
    }
    else {
      return verb;
    }

}

console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));
