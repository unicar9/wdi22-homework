// console.log("DOM, DE DOM DOM, DE DOOOM");
// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//

//


//Made cat go left
function goRight() {
    $('#cat').animate({'left': window.innerWidth - 296}, 5000, goLeft);
};


function goLeft() {
    $('#cat').addClass('mirror');
    $('#cat').animate({'left': - 50 }, 5000, goRight);
}
// //
// // debugger;
//
goRight();

//make the click start

// $('button:start').click (function (){
//   setTimeout function (){
//     if ($('start') < 1)
//     {
//
//     }
//   }
// // });
//
// $("#start").click(function (){
// //   window.setInterval(function ()
// //     $('#cat').animate (){
// //       left: window.innerWidth - 296
// //     }, 2000;
// // )
//   $('#cat').animate ({
//     left: window.innerWidth - 296
//   }, 2000);
//   // if ()
// });

//
// $(document).ready(function (){
//   $('button:start').click (function () ){
//     $('#cat').animate({'left': window.innerWidth -296}, 500, goLeft)
//   }
// };
//
// goLeft;



// $('start').trigger (function (){
//   $('#cat').animate({'left': window.innerWidth - 296}, 5000, goLeft);
// }));


// $('start').click(function (){
//   update($('start'));
// });
//
// function update (j){
//   var n = parseInt( j.text(), 10)
// }
//
//
// debugger;


// lolCat.style.left = '0px';
//
// // WORKING WALKING CAT
// var catWalk = function (){
//   var left = lolCat.style.left;
//   left = parseInt (left);
//   lolCat.style.left = (left + 10) + 'px';
//   // console.log('new left val: ', lolCat.style.left);
//   if (left >= (window.innerWidth - lolCat.width - 45)  ) {
//     // catMovement = 10;
//     lolCat.style.border = '10px solid red'; //testing where the cat in the frame
//   } if (left = window.outerWidth ){
//       lolCat.scaleX(-1, 1);
//     // catMoveoment = 10;
//   }
//       // console.log((left + catMovement) + "px");
//
//   // debugger;
// };
//
// window.setInterval (catWalk, 50);
