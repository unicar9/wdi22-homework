var $cat = $('#cat');
var $catjet = $('#catjet')
console.log('we are here', cat);
var catMoveIncrement = 10;

window.setInterval(function(){
  var left = $cat.css('left');
  // var newleft =
  // $cat.css('left');
  left = parseInt(left);
  if(left > window.innerWidth - $cat.width()){
    $cat.css('transform', 'scaleX(-1)');
    catMoveIncrement = -10;
  } else if(left < 230 && catMoveIncrement === -10){ // && !takeOffDone){

      $cat.css('zoomOut')
  } else if(left < 0){
    $cat.css('transform', 'scaleX(1)');
    catMoveIncrement = 10;
  }
  window.clearInterval();
  $cat.css('left', (left + catMoveIncrement) + 'px');
  // debugger;
}, 65);
