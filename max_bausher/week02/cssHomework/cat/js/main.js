
var cat = document.querySelector('.cat');

// var $cat = $('#cat');

console.log('we are here', cat);


// Vanilla DOM Manipulation with JS
cat.style.left = "0px";
// var catWalk =

var catMoveIncrement = 10;

window.setInterval(function(){


  var left = cat.style.left;   // $cat.css('left');
  left = parseInt(left);



  if(left > window.innerWidth - cat.width){
    cat.style.transform = 'scaleX(-1)';
    catMoveIncrement = -10;
  } else if(left < 0){
    cat.style.transform = 'scaleX(1)';
    catMoveIncrement = 10;
  }
  cat.style.left = (left + catMoveIncrement) + 'px';
  // debugger;
}, 50);
//
// var walkTimer = window.setInterval(catWalk, 50);

//window.clearInterval( catWalk );  // cancel the interval timer







// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.
//
