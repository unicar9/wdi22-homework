var DrEvil = function(amount) {
  var result = amount === 1000000? amount+" dollars (pinky)": amount+" dollars";
  console.log(result);
};

var mixUp = function(str1,str2) {
  var s1=str2.slice(0,2) + str1.slice(2);
  var s2=str1.slice(0,2) + str2.slice(2);
  console.log(s1,s2);
}

var fixStart = function(str) {
  var firstCharacter = str.slice(0,1);
  var regExp = new RegExp(firstCharacter,"g");
  var strTemp = str.replace(regExp,'*');
  var result = firstCharacter + strTemp.slice(1);
  console.log("fixStart('" + str + "'): ",result);
}

var verbing = function(str) {
  var len = str.length;
  var result;

  if (len>3) {
    result = str.slice(-3) === "ing" ? str+"ly":str+"ing";
  }else {
    result = str;
  }

  console.log("verbing('" + str + "'): " + "'" + result + "'");
}

var notBad = function(str) {
  var hasNot = /not/.test(str);
  var hasBad = /bad/.test(str);
  var result;

  if (hasNot === true && hasBad ===true) {
    result = str.replace(/not.*bad/g,'good');
  } else {
    result = str;
  }
  console.log("notBad('" + str + "'): '" + result +"'");
}

DrEvil(10);
DrEvil(1000000);
mixUp('Apple','Banana');
fixStart('babble');
verbing('swim');
verbing('swimming');
verbing('go');
notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
