
var $keyword;
// var searchResults;

$(document).ready(function() {

  console.log("i'm alive");

  $keyword = $('input').val();
  $('input').change(function(){
    if ( $keyword !== $(this).val() ) {
      $keyword = $(this).val();
      return $keyword;
    }
  });


  //
  $('#search').click(function() {
    xhr.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=" + $keyword);
    xhr.send();
  });



  // ========================================get movie title list==============================

  var xhr = new XMLHttpRequest(); // constructor

  xhr.onreadystatechange = function(){
    // don't run the rest of the function if the state is not 4
    if(xhr.readyState !== 4) {
      return;
    }
    console.log("FINISHED!");

    var searchResults = JSON.parse(xhr.responseText);
    console.log(searchResults);

    for (var i = 0; i < searchResults.results.length; i++) {
      var result = searchResults.results[i];
      console.log(result.title, result.id);

      var $para = $('<div class="result">').html(result.title).attr("id", String(result.id));
      $('#main').append($para);
    }

    // $(".result").click(function() {
    //   detail.open('GET', "https://api.themoviedb.org/3/movie/" + $(this).attr('id') + "?api_key=24d863d54c86392e6e1df55b9a328755");
    //   detail.send();
    //   console.log($(this).attr('id'));
    //   $("#main").hide();
    // });

  };



// ========================================get movie detail==============================

var detail = new XMLHttpRequest();
detail.onreadystatechange = function() {
  if(detail.readyState !== 4) {
    return;
  }

  var searchResults = JSON.parse(detail.responseText);
  console.log(searchResults);

  var $title = $('<h1>').html(searchResults.title);
  var $poster = $('<img>').attr("src",  "http://image.tmdb.org/t/p/w300" + searchResults.poster_path);
  var $overview = $('<p>').html(searchResults.overview);

  $('#detail').append($title).append($poster).append($overview);


};

$(document).on('click', ".result", function() {
  detail.open('GET', "https://api.themoviedb.org/3/movie/" + $(this).attr('id') + "?api_key=24d863d54c86392e6e1df55b9a328755");
  detail.send();
  console.log($(this).id);
  $("#main").hide();
});

$("#back").on('click', function() {
  $("#main").show();
  $("#detail").hide();

});








}); // end of document ready
