// new jquery code
var $moves =("#move");
$moves.style.position = 'absolute';
console.log($moves);
var $image;
$moves.css({style-left,0});
// $moves.style.left = 0;
// $('myObject').css('background-image', 'url(' + encodeURIComponent(imageUrl) + ')');

// var position = parseInt(moves.style.left);
var $forward = true;
var $width = window.innerWidth;
var $catMoveAmount = 10;
var $crossedScreen = false;

// var newPosition = position + catMoveAmount;
var catMove = function() {
  var $position = parseInt($moves.style.left);
  var $newPosition = $position + $catMoveAmount;
  $moves.css({style-left,(newPosition+'px')});
  // moves.style.left = newPosition + 'px';

  console.log($newPosition);

  if ($newPosition > $width) {
    // console.log("triggered");
    $moves.css({style.transform,"scaleX(-1)"});
    // $moves.css({style.transform , "scaleX(-1)"});
    $forward = false;
    $catMoveAmount = -10;
    $crossedScreen = true;
  }

  if (!$forward && ($newPosition < 0)) {
    $moves.css({style.transform,"scaleX(-1)"});
    $catMoveAmount = 10;
    $forward = true;
    $moves.src = "https://media.giphy.com/media/8zj9fqTrTFEMU/giphy.gif";
  }

  if ($newPosition < ($width / 2) && $crossedScreen === true) {
    // debugger
    // var imageUrl = 'https://newevolutiondesigns.com/images/freebies/colorful-background-23.jpg'
    // document.body.style.backgroundImage = "url ('" + imageUrl + "')";
    // document.body.style.backgroundColor = "red";
    document.body.css('backgroundColor','red');
    document.body.css('backgroundImage','url("' + imageUrl + '")');
    // $('#wrapper').css('background-image', 'url("' + imageUrl + '")');
  }

}


















//   var $moves = $("#move");
// $moves.css({
//   'position': 'absolute'
// });
// console.log(moves);
// var $image;
// var style = $moves.css({
//   'left': '0'
// });
// var $forward = ('true');
// var $width = $parseInt('window.innerWidth');
// var $catMoveAmount = parseInt('10');
// var $catMove = function() {
//   var $position = parseInt($style);
//   var SnewPosition = $position + $catMoveAmount;
//   $ style = $ + 'px';
//
//
//   if ($newPosition > $width) {
//     // console.log("triggered");
//     $moves.css({
//       'transform': 'scaleX(-1)'
//     });
//     $catMoveAmount = -10;
//     if ($newPosition > ($width / 2)) {
//       // document.body.style.backgroundImage = "url ('https://goo.gl/images/P6pflv')";
//       $document.body.css({
//         'backgroundColor': 'red'
//       });
//     }
//   } else if ($newPosition <= 0) {
//     $moves.css({
//       'style': 'left',
//       '10'
//     });
//
//     $moves.css({
//       'transform': 'scaleX(-1)'
//     });
//     // window.setInterval(catMove, 50);
//     // $image.css("src", "https://media.giphy.com/media/8zj9fqTrTFEMU/giphy.gif");
//
//
//
//   }
//
// }
//
// var catBack = function() {
//
//   // console.log(left);
//   $newPosition = $newPosition - $catMoveAmount;
//   $moves.css({
//     'left': '0'
//   });
//
//   var style = $moves.css({
//     'style': 'left',
//     '0'
//   });
//   if (parseInt(style) === 0) {
//     style = $moves.css({
//       'left': '10'
//     });
//     $moves.css("src", "https://media.giphy.com/media/8zj9fqTrTFEMU/giphy.gif");
//
//
//     //  window.setInterval(catMove, 50);
//   }
//   if (!f$orward && ($newPosition <= 0)) {
//     $forward = true;
//   } else {
//     $forward = false;
//   }
//   if ($forward) {
//     $moves.css({
//       'left': '+10'
//     });
//
//   } else {
//     $moves.css({
//       'left': '+10'
//     });
//
//   }
//
//   //  w = (width / 2);
//   // var h = (window.innerHeight) / 2;
//   //
//   //  (newPosition === w || newPosition === h) {
//   //   window.setInterval(co, 3000);
//   // }
//
//
// };
//
//
//
//
// window.setInterval($catMove, 50);
//
// }
