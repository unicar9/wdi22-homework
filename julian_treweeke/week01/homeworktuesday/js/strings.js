
var drEvil = function(x){
  if (x === 1000000){
    console.log("DrEvil(" + x + "): " + x + " dollars (pinky)");
  } else {
    console.log("DrEvil(" + x + "): " + x + " dollars");

  }
}

// drEvil(1000000);

var mixUp = function(string1, string2){

  var newstring1 = string2.substr(0, 2) + string1.substr(2);
  var newstring2 = string1.substr(0, 2) + string2.substr(2);

  console.log(newstring1 + " " + newstring2);

}

// mixUp('mix', 'pod');

var fixStart = function(string){
  var firstLetter = string[0];
  var swappy = string.replace(/b/gi, "*");
  console.log(swappy);
}



var fixStart = function( str ){

  var firstChar = str[0];

  for (var i = 0; i < str.length; i++) {
    var currentChar = str[i];

    if( currentChar === firstChar ){
      str[i] = '*'
    } //if

  } //for
  return str;

}







// fixStart('babble');


var verbing = function(string){
  if (string.endsWith("ing")  ) {
    string += "ly";
  } else if (string.length > 2 ){
    string += "ing";
  } else {
    string === string
  }
  console.log(string);
}

// verbing("swimming");



var notBad = function(string){
  var newString = string.split("not").join("good").split("bad").join('');
  console.log(newString);
}


// notBad("this is not bad");
