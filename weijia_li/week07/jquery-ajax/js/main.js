$(document).ready(function() {
  console.log("this should be fine!");

  var baseURL = "https://api.themoviedb.org/3/search/movie";

  $.ajax({
    url: baseURL,
    data: {
      api_key: '24d863d54c86392e6e1df55b9a328755',
      query: 'alien',
    }
  })
  .done(function(res) {
    console.log(res);
    // debugger;

    var imageBaseURL = 'http://image.tmdb.org/t/p/w300';

    for (var i = 0; i < res.results.length; i++) {
      var result = res.results[i];
      var $img = $('<img>').attr('src', imageBaseURL + result.poster_path)
      $('#main').append($img);
    }

  })
  .fail(function(xhr, status, error) {
    console.log("AJAX ERROR:", xhr, status, error);
  });










}); // end of .ready
