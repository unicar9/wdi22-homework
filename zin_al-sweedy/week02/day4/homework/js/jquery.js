var listofUrl = document.querySelectorAll('ul a');
for (var i = 0; i < listofUrl.length; i++) {

  var link = listofUrl[i];
  var url = link.getAttribute('href');
  console.log(url);

  var thumbnailURL = youtube.generateThumbnailUrl(url);
  // console.log(thumbnailURL);
  var img = document.createElement('img'); //detached DOM node
  img.setAttribute('src', thumbnailURL);
  link.appendChild(img); //attached to




  var $links = $('ul a');
  $links.each(function(){
    var videoLink = videoLinks[i];
var $linkUrl = videoLink.getAttribute('href');
var thumbnailUrl = youtube.generateThumbnailUrl(linkUrl);
var thumbnailImg = document.createElement('img');
thumbnailImg.setAttribute('src', thumbnailUrl);
videoLink.appendChild(thumbnailImg);



});
