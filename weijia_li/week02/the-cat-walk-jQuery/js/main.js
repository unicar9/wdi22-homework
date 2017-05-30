var $cat = $('#cat');
$cat.css('position', 'absolute');
var left = 0;

var catWalk = function(){

	var walkRight = window.setInterval( function() {
		left += 5;
		$cat.css( 'left', left + 'px' );

		if ( left >= window.innerWidth - $cat.width() ) {
			window.clearInterval(walkRight);
			$cat.css('transform', 'scaleX(-1)');

			var walkLeft = window.setInterval( function() {
				left -= 5;
				$cat.css( 'left', left + 'px' );

				if (left <= 0) {
					window.clearInterval(walkLeft);
					$cat.css('transform', 'scaleX(1)');
					catWalk();
				}
			}, 30 )
		}
	}, 30 )
}// functiion
catWalk();

// cat fade out & fade in
$cat.click(function () {
	$(this).fadeOut(3000, function () {
		$(this).fadeIn(1000);
	});
});

// one time change cat img
window.setTimeout(function () {
	$cat.attr('src', 'https://media.giphy.com/media/3o85xoi6nNqJQJ95Qc/giphy.gif');
}, 4000);

window.setTimeout(function () {
	$cat.attr('src', 'http://www.anniemation.com/clip_art/images/cat-walk.gif');
}, 6000);

// button prank
$('#button').hover(function () {
	$(this).css('left', 300 + Math.floor(Math.random()*300) + 'px');
	$(this).css('top', 300 + Math.floor(Math.random()*300) + 'px');
});

//dancecat appears
window.setTimeout(function () {
	$('.dancecat').each(function() {
		$(this).css('width', '20%');
	});
}, 2500);

// window.setInterval(function () {
// 	$('.dancecat').each(function() {
// 		$(this).css('left', 100 + Math.floor(Math.random()*100) + 'px');
// 		$(this).css('top', 100 + Math.floor(Math.random()*100) + 'px');
// }, 1000);
// var catScale = function () {
// 	var $dancecat1 = $('#dancecat1');
// 	var randomScale = Math.ceil(Math.random()*5);
// 	if ($dancecat1.css('width')) {
// 			window.setInterval(function () {
// 		 	$dancecat1.css('transform', 'scale(randomScale)';
// 		}, 100);
// 	}
// };
// catScale();


// change background-image
var $change = $('#change');
var toggle = false;

$change.click(function () {
	if (toggle === true) {
		$('body').css('background-image','url("https://68.media.tumblr.com/b59158de845445390abf221c24602435/tumblr_ob6mahtplz1v9h9zzo1_500.gif"');
	} else {
		$('body').css('background-image','url("https://i0.wp.com/media0.giphy.com/media/3o85xuCdyvtw3alGGk/giphy.gif"');
	}
	toggle = !toggle;
});
