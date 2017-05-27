
var cat = document.querySelector('img');
cat.style.left = '0px';

var catWalk = function() {
  var oldLeft = parseInt(cat.style.left);
  // console.log(oldLeft);
  var newLeft = oldLeft + 10;
  // console.log(newLeft);
  cat.style.left = newLeft + 'px';
  // console.log(cat.style.left);
  window.setInterval(function() {
    cat.setAttribute("width", cat.width += 2);
  }, 100);
};

window.setInterval(catWalk, 150);

var catStop = function() {
  cat.style.left = '200px';
  if (cat.style.left >= 300) {
    window.clearInterval()
  }
};

window.clearTimeout(100);


// var img = document.getElementsByTagName('img')[0];
// img.style.left = 0;
// img.style.right = 0;
// var newleft = 0
// var maxWidth = window.innerWidth -296; //296 is the length od the cat
// var newRight =maxWidth;
// var animateright;
//
// var  catWalk = function(){
//
//     newleft +=  10;
//     img.style.left = newleft + 'px';
//     if(parseInt(img.style.left) >= maxWidth)
//     {
//        // clearInterval(animate);
//         img.style.webkitTransform ="scaleX(-1)";
//         img.style.msTransform="scaleX(-1)";
//         img.style.transform = "scaleX(-1)";
//         animateright = setInterval(walkBack,100);
//         clearInterval(animate);
//     }
//
// };
//
//
// var walkBack = function() {
//  console.log('walking back')
//     newleft = newleft-10;
//     img.style.left = newleft + 'px';
//       if(parseInt(img.style.left) === 0){
//         clearInterval(animateright);
//         //clearInterval(animate);
//       }
//
//
// }
// var animate = setInterval(catWalk,100);
// // var animateright = setInterval(walkBack,30);
//
//
//
// // window.screen.availWidth
