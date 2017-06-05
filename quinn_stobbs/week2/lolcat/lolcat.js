console.log("checking to make sure this is linked");
// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//

var lolCat = document.querySelector ('#cat');
var start= document.querySelector ('#start');
var end = document.querySelector ('#end');
// var video = document.querySelector ('#video');

var clickCat = lolCat;
var clickStart = start;
var clickEnd = end;
var clickVideo = video;

clickCat.addEventListener('click', function(){
  console.log("cat clicked");
})

clickStart.addEventListener('click', function (){
  lolCat.style.left = '0px';
  if (clickStart < 1){
    var catWalk = function (){
      var left = lolCat.style.left;
      left = parseInt (left);
      lolCat.style.left = (left + 10) + 'px';
      // console.log('new left val: ', lolCat.style.left);
      if (left >= (window.innerWidth - lolCat.width - 45)  ) {
        // catMovement = 10;
        lolCat.style.border = '10px solid red'; //testing where the cat in the frame
      } if (left = window.outerWidth ){
          lolCat.scaleX(-1, 1);
        // catMoveoment = 10;
      }
          // console.log((left + catMovement) + "px");

      // debugger;
    };
    window.setInterval (catWalk, 50);
  // };

});

clickEnd.addEventListener('click', function (){
  console.log("end clicked");
})


//VIDEO EMBED
//
clickVideo.addEventListener('click', function (){
  if (video <= 1) {
      window.location.href = "https://www.youtube.com/watch?v=Awf45u6zrP0";
  }
  console.log("video clicked");
})






//DOES NOT WORK!
var video = document.getElementsByClassName("video");

for (var i=0; i<video.length; i++) {

  var youtube = video[i];

  // Based on the YouTube ID, we can easily find the thumbnail image
  var img = document.createElement("img");
  img.setAttribute("src", "https://www.youtube.com/watch?v=Awf45u6zrP0"
                          + youtube.id + "/hqdefault.jpg");
  img.setAttribute("class", "thumb");


  // Overlay the Play icon to make it look like a video player
  var circle = document.createElement("video");
  circle.setAttribute("class","circle");

  youtube.appendChild(img);
  youtube.appendChild(circle);

  // Attach an onclick event to the YouTube Thumbnail
  youtube.onclick = function() {

    // Create an iFrame with autoplay set to true
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src",
          "https://www.youtube.com/watch?v=Awf45u6zrP0" + this.id
        + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");

    // The height and width of the iFrame should be the same as parent
    iframe.style.width  = this.style.width;
    iframe.style.height = this.style.height;

    // Replace the YouTube thumbnail with YouTube HTML5 Player
    this.parentNode.replaceChild(iframe, this);

  };
}



// debugger;


// lolCat.style.left = '0px';

var startWalk = function (){
  if (clickStart < 1){
    var catWalk = function (){
      var left = lolCat.style.left;
      left = parseInt (left);
      lolCat.style.left = (left + 10) + 'px';
      // console.log('new left val: ', lolCat.style.left);
      if (left >= (window.innerWidth - lolCat.width - 45)  ) {
        // catMovement = 10;
        lolCat.style.border = '10px solid red'; //testing where the cat in the frame
      } if (left = window.outerWidth ){
          lolCat.scaleX(-1, 1);
        // catMoveoment = 10;
      }
          // console.log((left + catMovement) + "px");

      // debugger;
    };
  };
  window.setInterval (catWalk, 50);
// };




//CONVERT TO jquery

// var $catWalk = function

// lolCat.scale(-1, 1)



// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// left:50%; top:50%; puts you in the middle, then you apply a fixed width and height and set margin-top and margin-left to negative a half of that width and height.

// TRIAL 1 REVERSE
// window.setInterval ( function () {
//   var left = lolCat.style.left;
//   left = parseInt (left);
//   lolCat.style.left = left + 2;
//   if (left === '500px') {
//   lolCat.style.animationDirection = "reverse";
//   }
// },
// 50
// )

// TRIAL 2 REVERSE
// window.setInterval ( function () {
//   var left = lolCat.style.left;
//   left = parseInt (left);
//   lolCat.style.left = left + 2;
//   if (left < window.innerwidth) {
//     lolCat.style.animationDirection = "reverse";
//     console.log("walking left");
//   }
// },
// 50
// )




// FROM CLASS
// window.setInterval (function(){
//   var lolCat = document.querySelector ('#img');
//   var left = lolCat.style.left;
//   left = parseInt ( left );
//   lolCat.style.left = left + 2;
// }, 1000);


//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// lolCat.scale(-1, 1)


//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//



// Bonus #4: Pretty much go nuts or whatever.
