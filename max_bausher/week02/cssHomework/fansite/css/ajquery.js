$('#toggle').on('click', function(){
  console.log("clicked");
  $('ol > li > img:first-child').toggle()
})

// onClick(function(){
//    $('img').toggle();
// })
