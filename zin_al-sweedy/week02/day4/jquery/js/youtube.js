// function () {
//   window.globslVarName.value
// }

// change global var do not do it



var links = document.querySelectorAll('ul a');
// var youtube={}// wrong change you tub with list wrong
for (var i = 0; i < links.length; i++) {
  var link = links[i];
  var url = link.getAttribute('href');
// console.log(link,url);
console.log(url);

var thumbnailURL =youtube.generateThumbnailURL(url);

console.log(thumbnailURL);
var img = document.createElement('img');// detached DOM node! not to page crate tagtype of img
img.setAttribute('src' , thumbnailURL);
// add dom nod to page to see it
link.appendChild( img );// attached to th DOM

}
