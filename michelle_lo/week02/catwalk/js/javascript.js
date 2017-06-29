// rename Left and Right - dont turn off interval within // use if statements within the function consider +- for style.left

console.log('testing cats');

//blackcat
var blackcat = document.getElementById('blackcat');

//to make bigger
// window.setInterval(function () {
//   cat.setAttribute("width", cat.width += 10);
// }, 100);

//cat walking left
blackcat.style.left = '0px';
blackcat.style.top = '0px';
blackcat.style.width = '100px';
var maxWidth = 700;
var minWidth = 5;

var walkLeft = function() {
  var newHorizontal = parseInt(blackcat.style.left) +4;
  // var newHorizontal = oldHorizontal + 4;
  var oldVertical = parseInt(blackcat.style.top);
  var newVertical = oldVertical + 1.5;
  var oldWidth = parseInt(blackcat.style.width)
  var newWidth = oldWidth + 4;
  blackcat.style.left = newHorizontal + 'px';
  blackcat.style.top =  newVertical + 'px';
  blackcat.style.width = newWidth + 'px';

  if(parseInt(blackcat.style.left) >= maxWidth)
    {   // flip image
    blackcat.style.webkitTransform ="scaleX(-1)";
    blackcat.style.msTransform="scaleX(-1)";
    blackcat.style.transform = "scaleX(-1)";
        // clearInterval
    window.clearInterval(goLeft);
    var walkBack = window.setInterval(walkBack,50)
    }
  // }
  // //not working
    var walkRight = function() {
      console.log('walking back')
      var newHorizontal = parseInt(blackcat.style.left)-10;
      blackcat.style.left = newHorizontal + 'px';
      console.log ('right on')
        if(parseInt(blackcat.style.left) < 100){
          clearInterval(walkRight);
          //clearInterval(animate);
        }

    }; //end of function
    //
var goLeft = window.setInterval(walkLeft, 50);
// var goBack =  window.setInterval(walkRight, 50);

//click listen

var myCallback = function (event) {
  blackcat.style.width = '100px';
}

blackcat.addEventListener('click', myCallback);
// blackcat.removeEventListener('click', myCallback);


var clickCount=0;
function clickHandler(myCallback){
  clickCount++;
  if(clickCount%2===0){
    blackcat.removeEventListener("click")}
  if(clickCount%3===0 && clickCount%2!==0){
    blackcat.addEventListener('click', myCallback);
  }
}
