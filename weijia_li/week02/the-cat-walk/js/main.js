
var cat = document.querySelector('#cat');
var pos = 0;
cat.style.position = 'absolute';

console.log(cat);

// var moveLeft = function () {
//   pos ++;
//   cat.style.position = pos + 'xp';
// }

window.setInterval(function() {
	pos ++;
  cat.style.position = pos + 'xp';

}, 100);
