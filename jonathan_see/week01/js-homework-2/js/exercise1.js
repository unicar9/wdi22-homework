// DrEvil

var drEvil = function(amount) {
  if (amount !== 1000000) {
//  console.log( amount + " dollars");
  return amount + "dollars";
  } else {
//  console.log( amount + " dollars (pinky)");
  return amount + "dollars (pinky)";
  };
}

drEvil(10);
drEvil(1000000);

// MixUp

var MixUp = function(str1, str2) {
  var mixOne = str1.slice(0, 2) + str2.slice(2);
  var mixTwo = str2.slice(0, 2) + str1.slice(2);
  console.log(mixOne + mixTwo);
}

// fixStart

var fixStart = function(word) {

}


// verbing

var verbing = function (word) {
  if (word.length >= 3) {
  console.log(word + "ing");
  } else if {
  console.log(word + (word.length - 1) + "ing)";
  };
}

verbing(go);

// Not Bad

var notBad = function(str);
  if ()
