//The Calculator
var squareNumber = function(num1){
  var result = Math.pow(num1,2);
  console.log("The result of squaring the number " + num1 + " is " + result);
  return result;
}
squareNumber(3);
squareNumber(12);

var halfNumber = function(num2){
  var result = num2 / 2;
  console.log("Half of " + num2 + " is " + result);
  return result;
}
halfNumber(88);
halfNumber(5883);

var percentOf = function(num1,num2){
  var percentage = 100 * num1 / num2;
  console.log(num1 + " is " + percentage.toFixed(2) + "% of " + num2);
  return percentage;
}
percentOf(28,56);
percentOf(7,21);

var areaOfCircle = function(radius){
  var area = Math.PI * radius**2;
  console.log("The area for a circle with radius " + radius + " is " + area.toFixed(2));
  return area;
}
areaOfCircle(18);
areaOfCircle(10);

var superFunc = function(newNum){
  var r1 = halfNumber(newNum);
  var r2 = squareNumber(r1);
  var r3 = areaOfCircle(r2);
  var r4 = percentOf(r2,r3);
//  console.log( "Half of " + newNum + " is " + r1 + ", square of " + r1 + " is " + r2 + ",  area for a cirle with radius of " + r2 + " is " + r3 + " and " + r2 " is " + r4 +"% of " + r3);
}
superFunc(10);


//DrEvil
var drEvil = function(amount){
  if (amount>=0 && amount!==1000000){
    var result = amount + ' dollars';
  } else if (amount===1000000){
      result = amount + ' dollars (pinky)'
  } else {
    alert("Are you kidding me ?!")
  }
  console.log(result);
}

//MixUp
var mixUp = function(str1,str2){
  var mix1 = str1.slice(0,2) + str2.slice(2);
  var mix2 = str2.slice(0,2) + str1.slice(2);
  console.log(mix1 + " " + mix2);
}
mixUp("star","plus");

//verbing
var verbing = function(str){
  if (str.slice(-3) === "ing"){
    newStr = str + "ly";
  } else if (str.length >= 3) {
    newStr = str + 'ing'
  } else {
    newStr = str;
  }
  console.log(newStr);
}
verbing("go");
verbing('surfing');
verbing('climb');

//notBad
var notBad0 = function(str){
//  if (str.match('not.*bad')) {
    str = str.replace(/(not.*bad)/gi,'good');
    //str = 'haha';
  //}
  console.log(str);
}
notBad0("Alien:Covenant is not that bad.");
notBad0('Bad movie is not what you think');


var fixStart = function(str) {
  var array = str.split('');
  var i = 1;

  while (i <= array.length, i++, array[i] === array[0]) {
    array[i] = '*';
  };

  var str1 = array.join('');
  console.log(str1);
  return str1;
};

fixStart('google');

//fixStart
// var fixStart = function(s) {
//   for (var i = 0; i < s.length; i++) {
//
//   console.log(s);
// }
// fixStart('bubble');
