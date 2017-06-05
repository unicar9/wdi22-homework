var moves = document.getElementById("move");
moves.style.position = 'absolute';
console.log(moves);
var image;
moves.style.left = 0;
// var position = parseInt(moves.style.left);

var forward = true;
var width = window.innerWidth;
var catMoveAmount = 10;
var crossedScreen = false;

// var newPosition = position + catMoveAmount;
var catMove = function() {
  var position = parseInt(moves.style.left);
  var newPosition = position + catMoveAmount;
  moves.style.left = newPosition + 'px';

  console.log(newPosition);

  if (newPosition > width) {
    // console.log("triggered");
    moves.style.transform = "scaleX(-1)";
    forward = false;
    catMoveAmount = -10;
    crossedScreen = true;
  }

  if (!forward && (newPosition < 0)) {
    moves.style.transform = "scaleX(-1)";
    catMoveAmount = 10;
    forward = true;
    moves.src = "https://media.giphy.com/media/8zj9fqTrTFEMU/giphy.gif";
  }

  if (newPosition < (width / 2) && crossedScreen === true) {
    // debugger
    // var imageUrl = 'https://newevolutiondesigns.com/images/freebies/colorful-background-23.jpg'
    // document.body.style.backgroundImage = "url ('" + imageUrl + "')";
    document.body.style.backgroundColor = "red";

    // $('#wrapper').css('background-image', 'url("' + imageUrl + '")');
  }

}

// var catBack = function() {
//   var crossedBack =false;
//     // console.log(left);
//     newPosition = newPosition - catMoveAmount;
//     moves.style.left = newPosition + 'px';
//     if (parseInt(moves.style.lft) === 0 && crossedBack===true) {
//       moves.style.left =10 ;
//       moves.src = "https://media.giphy.com/media/8zj9fqTrTFEMU/giphy.gif"
//       forward = false
//
//     //  window.setInterval(catMove, 50);
//     }
//     if (forward && (newPosition < 0)) {
//       forward = true;
//       crossedBack = true;
//       // window.clearInterval(catBack);
//       moves.style.transform = "scaleX(-1)";
//     } else {
//       forward = false;
//     }
//     if (forward) {
//       moves.style.left = newPosition + 10 + 'px';
//     } else {
//       moves.style.left = newPosition - 10 + 'px';
//
//     }

//  w = (width / 2);
// var h = (window.innerHeight) / 2;
//
//  (newPosition === w || newPosition === h) {
//   window.setInterval(co, 3000);
// }

// catBack();
// };




window.setInterval(catMove, 50);


//
// function ChangeImg () {
//     input = document.getElementById ("myInput");
//
//
//     img.style.backgroundImage = "url('https://media.giphy.com/media/8zj9fqTrTFEMU/giphy.gif ')";
// }





// // var elem = document.getElementById("animatedElem"),
// //   left = 0,
// //   lastFrame = +new Date,
// //   timer;
// // // Move the element on the right at ~600px/s
// // timer = setInterval(function() {
// //   var now = +new Date,
// //     deltaT = now - lastFrame;
// //   elem.style.left = ( left += 10 * deltaT / 16 ) + "px";
// //   lastFrame = now;
// //   // clear the timer at 400px to stop the animation
// //   if ( left > 400 ) {
// //     clearInterval( timer );
// //   }
// // }, 16);
//
// // var moves = document.getElementById("move");
// // moves.style.position = 'absolute';
// // console.log(moves);
// // moves.style.left = 0;
// // var forward = true;
// // var width = window.innerWidth;
// //
// //
// // var catMove = function() {
// //   // console.log(moves);
// //   // left = pasreInt(left) +10;
// //   // moves.style.left = left +'px';
// //   // console.log(left);
// //   var position = parseInt(moves.style.left);
// //   var newPosition = position + 10;
// //   moves.style.left = newPosition + 'px';
// //   // debagging // usefule for debagger freeze time in running
// //   //debudder; it will appear in console open only
// //   // it pause solution frozen program esc to get from it
// //   // debagger is a way to get the var you put it and we can look all vars in debagger
// //   // freeze time and console is frozen at that time
// //   // step into run the code time by time
// //   // stepinto jump to jq js window nice line breaks and into the inside there funcs
// //   // put go to js file put arrow done
// //   // will not see untile we go to console
// //   if (newPosition >= width ) {
// //     console.log("triggered");
// //     moves.style.right = newPosition-10+'px';
// //     moves.style.webkitTransform ="scaleX(-1)";
// //     moves.style.msTransform="scaleX(-1)";
// //     moves.style.transform = "scaleX(-1)";
// //
// //     setInterval(catMove(catMove,100);
// //   }else{
// //     moves.style.left = newPosition+10+'px';
// //
// //   }
// //
//
// //   newleft +=  10;
// //   img.style.left = newleft + 'px';
// //   if(parseInt(img.style.left) >= maxWidth)
// //   {
// //      // clearInterval(animate);
// //       img.style.webkitTransform ="scaleX(-1)";
// //       img.style.msTransform="scaleX(-1)";
// //       img.style.transform = "scaleX(-1)";
// //       animateright = setInterval(walkBack,100);
// //       clearInterval(animate);
// //   }
// //
// // };
// //
// //
// // var walkBack = function() {
// // console.log('walking back')
// //   newleft = newleft-10;
// //   img.style.left = newleft + 'px';
// //     if(parseInt(img.style.left) === 0){
// //       clearInterval(animateright);
// //       //clearInterval(animate);
// //     }
// //
// //
// // }
//
//
// // };
//
//
//
// //
// //
// //
// //
// //
// //
// //
// //
// //   var img = document.getElementsByTagName('img')[0];
// // img.style.left = 0;
// // img.style.right = 0;
// // var newleft = 0
// // var maxWidth = window.innerWidth -296; //296 is the length od the cat
// // var newRight =maxWidth;
// // var animateright;
// //
// // var  catWalk = function(){
// //
// //     newleft +=  10;
// //     img.style.left = newleft + 'px';
// //     if(parseInt(img.style.left) >= maxWidth)
// //     {
// //        // clearInterval(animate);
// //         img.style.webkitTransform ="scaleX(-1)";
// //         img.style.msTransform="scaleX(-1)";
// //         img.style.transform = "scaleX(-1)";
// //         animateright = setInterval(walkBack,100);
// //         clearInterval(animate);
// //     }
// //
// // };
// //
// //
// // var walkBack = function() {
// //  console.log('walking back')
// //     newleft = newleft-10;
// //     img.style.left = newleft + 'px';
// //       if(parseInt(img.style.left) === 0){
// //         clearInterval(animateright);
// //         //clearInterval(animate);
// //       }
// //
//
// // }
// // var animate = setInterval(catWalk,100);
// // var animateright = setInterval(walkBack,30);
//
//
//
// // window.screen.availWidth
//
//   //
//   //
//   // var catBack = function() {
//   //
//   //   // console.log(left);
//   //   newPosition = newPosition - 10;
//   //   moves.style.left = newPosition + 'px';
//   //   if (parseInt(moves.style.lft) === 0) {
//   //     clearInterval(ani);
//   //   }
//   //     // if (!forward && (newPosition <= 0)) {
//   //     //   forward = true;
//   //     // } else {
//   //     //   forward = false;
//   //     // }
//   //     // if (forward) {
//   //     //   moves.style.left = newPosition + 10 + 'px';
//   //     // } else {
//   //     //   moves.style.left = newPosition - 10 + 'px';
//   //     // }
//   //   var w = (width / 2);
//   //   var h = (window.innerHeight) / 2;
//   //   if (newPosition === w || newPosition === h) {
//   //     document.body.style.background = "hotPink";
//   //     // window.setInterval(co, 3000);
//   //   }
//   // }
//   //
//
//
//
//









//
// var moves = document.getElementById("move");
// moves.style.position = 'absolute';
// console.log(moves);
// moves.style.left = 0;
// var forward = true;
// var width = window.innerWidth ;
//
//
// var catMove = function() {
//   var position = parseInt(moves.style.left);
//   var newPosition = position + 10;
//   moves.style.left = newPosition + 'px';
//   // if (newPosition===(width/2)){
//   //   document.getElementById("move").style.transform = "rotate(7deg)";
//   // }
//   if (newPosition > window-270) {
//     console.log("triggered");
//     newPosition=0;
//       newPosition= newPosition+10;
//
//       // moves.style.left = newPosition-10+'px';
//       // moves.style.transform = "scaleX(-1)";
//       // moves.style.left = newPosition-10+'px';
//       // moves.style.webkitTransform ="scaleX(-1)";
//          moves.style.msTransform="scaleX(-1)";
//
//
//           // movies.style.direction= "right";
//
//
//
// }else {
//     moves.style.left = newPosition+10+'px';
//     // moves.style.transform = "scaleX(1)";
// }
// };
//
// var ani=window.setInterval(catMove, 100);
//
//
//
//
//
//
//
//
// //
// //
// // var co = function() {
// //             var colors = ["#0099cc","#c0c0c0","#587b2e","#990000","#000000","#1C8200","#987baa","#981890","#AA8971","#1987FC","#99081E"];
// //
// //                 var bodybgarrayno = Math.floor(Math.random() * colors.length);
// //                 var selectedcolor = colors[bodybgarrayno];
// //                 $("body").css("background",selectedcolor);
// //
// //         }
//
//
//
//
//
//
//
// // var mov = setInterval(catMove, 50);
//
//
//
//
// // var moves = document.getElementById("move");
// // console.log(moves);
// // var left = 10;
// //
// //   var catMove = function() {
// //   console.log(moves);
// //   left = left +10;
// //   move.style.left = left + "px";
// //   console.log(left);
// // };
//
// //
// // var cat = document.getElementById("cat");
// // console.log(cat);
// // var left = 10;
// //
// // var catWalk = function() {
// //   console.log(left);
// //   left = left +10;
// //   cat.style.left = left + "px";
// //   console.log(left);
// // };
// //
// // var catId = setInterval(catWalk, 50);
// //
// //
// //
// // var moves = document.getElementById("move"),
// //   var left = 0,
// //   var lastTime = +new Date,
// //   timer;
// // // Move the element on the right at ~600px/s
// // timer = setInterval(function() {
// //   var now = +new Date,
// //     d = now - listTime;
// //   elem.style.left = ( left += 10 * d / 16 ) + "px";
// //   lastTime = now;
// //   // clear the timer at 400px to stop the animation
// //   if ( left > 400 ) {
// //     clearInterval( timer );
// //   }
// // }, 50);
