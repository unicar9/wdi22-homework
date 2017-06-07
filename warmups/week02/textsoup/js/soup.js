
// Text Soup
//
// Using HTML, CSS and JS + jQuery, create a web page which prints a random word from a large sample of text,
 // in a random position on the page, every 100 milliseconds.
//
// Hints:
//
//
// use jQuery to get the contents of the div.
var words = $('#words').text().split(/[ ;\-,.\n]+/)
console.log(words);

var $body = $('body');

var randy = function( max ) {
  return Math.floor( Math.random()* max )
};

var putWord = function (){
  //Get a random word from the array words that we jsut made
  var randomIndex = randy(words.length);
  //use this number as an index on words
  var text = words[randomIndex];
  //insert this word into a new div.

  var $div = $('<div class="word">').html( text )
  //make it appear in a random location
  $div.css({
    top: randy(window.innerHeight) + 'px',
    left: randy(window.innerWidth) + 'px'
  })
  $div.appendTo($body).fadeIn(1000).fadeOut(2000, function(){
    $(this).remove();
  });
  //make the words fade in and out.
  //start div as display: none

  // $div.fadeIn(1000)

}


setInterval(putWord, 100);
// Bonus:
//
// Fade the text in to make it appear, and then fade it out to disappear, to stop the page getting too dense with texty text.
// Try random colours, random font sizes, rotation, whatever floats your boat.
