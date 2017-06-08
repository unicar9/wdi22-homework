// var $otherCat = $('otherCat');
$(document).ready(function() {
    $('otherCat').mouseenter(function() {
        $('otherCat').fadeTo('fast', 1);
    });
    $('otherCat').mouseleave(function() {
        $('otherCat').fadeTo('fast', 0.5);
        });
});


var $cat = $('.cat');
var maxWidth = 700;

window.setInterval(function(){
  var left = $cat.css('left');
  var width = $cat.css('width');
  left = parseInt( left );
  width = parseInt(width);
  console.log(left);
  $cat.css('left', (left + 5) + 'px');

  if (left > 800 ) {
    $cat.css('left', (left - 6) + 'px');
    $cat.css('transform', 'scaleX(-1)');
    $cat.css('width', (width + 10) + 'px');
    console.log('CHANGE')
  }

  if (width > 500 ) {
    $cat.css('width', (width - 12) + 'px');
    $cat.css('transform', 'scaleX(-1)');
  }
}, 50);

var $dog = $('.dogsFalling');
var height = $dog.css('height', '150px');



window.setInterval(function(){
  var top = $dog.css('top');
  var width = $dog.css('width');
  var height = $dog.css('height');
  top = parseInt( top );
  width = parseInt(width);
  height = parseInt(height);
  console.log(top);
  $dog.css('top', (top + 2) + 'px');

  if (top > 50) {
    // $dog.css('transform', 'rotate(20deg)');
    $dog.css('width', (width + 5) + 'px');
    $dog.css('height', (height + 5) + 'px');
  }
  //
  // if (width > 200) {
  //   // $dog.css('transform', 'rotate(20deg)');
  //   $dog.css('width', '150px');
  //   $dog.css('height', '150px');
  //   $dog.css('top', '0px');
  // }

  if (width > 200) {
    // $dog.css('transform', 'rotate(20deg)');
    $dog.css('width', (width + 5) + 'px');
    $dog.css('height', (height + 5) + 'px');
    $dog.fadeOut();

  }
  if (width > 250) {
    // $dog.css('transform', 'rotate(20deg)');
    // $dog.fadeOut();
    $dog.css('width', '150px');
    $dog.css('height', '200px');
    $dog.css('top', '0px');
    $dog.fadeIn();

  }

}, 75);
