





var $cat = $('#cat');
var $catjet = $('#catjet');
var $catcockpit = $('#catcockpit');
var $haylivia = $('#haylivia');
var $dogPlane = $('#dogPlane');
var $lukePlane = $('#lukePlane');
var $mindHead = $('#mindHead');
var $middleFinger = $('#middlefinger');
var catMoveIncrement = 10;
var job;
// $catcockpit.hide();
// $haylivia.hide();
// $lukePlane.hide();
// $dogPlane.hide();
// $mindHead.hide();



var dogFight = function () {

  $middleFinger.fadeIn(1000, 'slow');
  $middleFinger.show(10000);
  $middleFinger.fadeOut(1000);
  $dogPlane.fadeIn(1000);
  $dogPlane.show(10000)
  $lukePlane.fadeIn(1000);
  $lukePlane.show(10000);
  $dogPlane.attr('src', '../cats/catimages/explosion.gif-c200');
  $dogPlane.show(7000);
  $dogPlane.fadeOut(1000)
  $mindHead.fadeIn(1000);
};

var cockpit = function(){
    $('body').css('background-image', "url('../cat/catimages/finalsky.jpg')");
    $('body').css('background-size', "cover");
    $catcockpit.show('fast');
    $haylivia.fadeIn(1000);
    window.setInterval(function(){
      var left = parseInt($haylivia.css('left'));
      if(left < window.innerWidth){
       (left += 10) + 'px';
     } else if (left > window.innerWidth - $haylivia.width()){
        window.clearInterval();
        haylivia.fadeOut(1000);
      }
    })
  dogFight();
};

// var takeOffDone = false;

var takeOff = function(){
  window.clearInterval(job);
  var $cat = $('#cat');
  // debugger
  $cat.hide();
  //or fade and shrink catjet while moving right by about 50px;
  $catjet.animate({
    opacity: 0.5,
    left: 50%, //"+=100",
    height: 50%, //"-=100"
    width: '0px' //"-=100"
  }, 100, function() {
    // Animation complete.
  });
  $catjet.hide();
  var audio = new Audio("../cat/audio/dangerzone.mp3");
  audio.play();
  cockpit();
};

job = window.setInterval(function(){
  var left = $cat.css('left');
  // var newleft =
  // $cat.css('left');
  left = parseInt(left);
  if(left > window.innerWidth - $cat.width()){
    $cat.css('transform', 'scaleX(-1)');
    catMoveIncrement = -10;
  } else if(left < 230 && catMoveIncrement === -10){ // && !takeOffDone){
      takeOff();
  } else if(left < 0){
    $cat.css('transform', 'scaleX(1)');
    catMoveIncrement = 10;
  }

  $cat.css('left', (left + catMoveIncrement) + 'px');
  // debugger;
}, 65);



// var timer = function functionName() {
//
// }
$('cat').attr()





//create a function which when called from takeOff:
   //cockpit function end

// switches background image of body to sky clouds backdrop
// sets  incockpit view w/ cat head screengrabbed on it  as center bottom small
//grow cloud on left and right and then minimize again && moving top to bottom of screen
// grow hurrican haylivia on left and minimize while moving top to bottom on screen;
// calls next function dogFight
//var dogFight
//create function dogFight which brings in plane with dog as pilot from right
//slide in plane from left with luke and edgey
// all images fadeaway
//// fadeIn in image of cat and dog planes flipping each other off and fadeOut
//hide image
//call function explosion
//var explosion
//slides in plane with dog to 2/3 away across page from right side
//slides in three planes image with cat, luke, and edgey to 1/3 of page from right as well
//change image src of dogplane to explosion gif
//slide three plane image off left side of page (if img src = explosion gif)
//call finalFunction
//create Final function
//var finalFunction
//fades in image of luke and kenny loggins
//fades out image
//fades in GA logo

// If the left position of the cat is less than 230 and the catMoveIncrement is -10
  // Stop
