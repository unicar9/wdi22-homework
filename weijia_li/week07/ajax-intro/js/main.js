
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


  // Search button event handler
  $('#search').click(function() {
    index.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=" + $keyword);
    index.send();
    $('#main').empty().show();
  });



  // ========================================get movie title list==============================

  var index = new XMLHttpRequest(); // constructor

  index.onreadystatechange = function(){
    // don't run the rest of the function if the state is not 4
    if(index.readyState !== 4) {
      return;
    }
    console.log("FINISHED!");

    var searchResults = JSON.parse(index.responseText);
    console.log(searchResults);

    for (var i = 0; i < searchResults.results.length; i++) {
      var result = searchResults.results[i];
      console.log(result.title, result.id, result.poster_path);

      var $col = $("<div class='col s12 m6 l4'>")

      var $card = $("<div class='card small'>")
      var $image = $("<div>").addClass("card-image");
      var $action = $("<div>").addClass("card-action");

      var $poster = $('<img>').attr("src",  "http://image.tmdb.org/t/p/w300" + result.poster_path);
      var $para = $('<a>').html(result.title).attr("id", String(result.id));

      $image.append($poster);
      $action.append($para);
      $card.append($image).append($action);
      $col.append($card);
      $('#main').append($col);

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
