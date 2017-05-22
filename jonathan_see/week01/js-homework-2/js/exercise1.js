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
  console.log(mixOne + " " + mixTwo);
}

mixUp("pea", "top");

// Andys
// var mixUp = function(input1, input2) {
//   firstTwoInput1 = input1[0] + input1[1];
//   firstTwoInput2 = input2[0] + input2[1];
//   remInput1 = input1.slice(2, input1.length);
//   remInput2 = input2.slice(2, input2.length);
//   new1 = firstTwoInput1 + remInput2;
//   new2 = firstTwoInput2 + remInput1;
//   console.log(new1, new2);
// }

// fixStart

var fixStart = function(string) {

}


// verbing

var verbing = function (str) {
  if (str.slice(-3) === "ing") {
    newStr = str + "ly";
  } else if (str.length >= 3) {
    newStr = str + "ing";
  } else {
    newStr = str;
  }
  console.log(newStr);
}

verbing('go');
verbing('skipping');
verbing('verify');

// Not Bad

var notBad = function(str);
  if ()
