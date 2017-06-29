$(document).ready(function() {
  console.log('loaded');


  /*
  */
  //===================constructing imageURL===========================
  var generateThumbnailURL = function(photo, size) {

    size = size || 'q';

    var url = 'https://farm';
    url += photo.farm;
    url += '.staticflickr.com/';
    url += photo.server;
    url += "/";
    url += photo.id;
    url += '_';
    url += photo.secret;
    url += '_';
    url += size;
    url += '.jpg';

    // console.log(url);

    return url;

  };
  //===================display Photo===========================

  var displayPhoto = function(photo) {

    var fullSizeURL = generateThumbnailURL(photo, 'h');
    var url = generateThumbnailURL(photo, 'q');

    var $a = $('<a>').attr('href', fullSizeURL);
    var $img = $('<img>').attr('src', url);

    var $div = $('<div class="col s6 m4 l2">');

    $a.append($img);
    $div.append($a);
    $('.row').append($div);


  };

  //===================handle Seach data ===========================


  var handleSearchData = function(data) {
    console.log(data);

    totalPages = data.photos.pages;
    var array = data.photos.photo;

    for (var i = 0; i < array.length; i++) {
      var currentPhoto = array[i];
      displayPhoto(currentPhoto);
    }

    $('.progress').hide();


  };

  //===================ajax request ===========================
  var searchFlickr = function(query) {
    lastRequestTime = Date.now(); //create time stamp

    var baseURL = "https://api.flickr.com/services/rest";
    var API_KEY = "3ab66c44737420e50ceaee170f6eb074";

    $.ajax({
      url: baseURL,
      data: {
        api_key: API_KEY,
        method: 'flickr.photos.search',
        text: query,
        format: 'json',
        nojsoncallback: 1,
        page: requestedPage
      }

    })
    .done( handleSearchData )
    .fail(function(xhr, status, err) {
      console.log(xhr, status, err);
    });


  };

  //=========================Submit Search query====================================


  $('form').on('submit', function(ev) {
    ev.preventDefault(); // prevent page reload
    searchQuery = $('#searchFlickr').val();
    console.log("submit", searchQuery);
    requestedPage = 1;
    getNewPage();
  });

  //=====================PAGINATION=============================

  var searchQuery;
  var requestedPage = 1;
  var totalPages;
  $('#current-page').html(requestedPage);

  //=====================PeviousPage and NextPage event handlers==================

  $('#next').on('click', function() {
    requestedPage += 1;
    getNewPage();
  });

  $('#previous').on('click', function() {
    requestedPage -= 1;
    getNewPage();
  });



  //=======================Get a new page of images======================

  var getNewPage = function() {
    if (Date.now() - lastRequestTime < 3000 || requestedPage >= totalPages) {
      return;
    }


    $('img').remove(); // remove all the images
    $('#current-page').html(requestedPage); // display current page number
    $('#pagination').show(); // show pagination
    searchFlickr( searchQuery ); // search images
    if (requestedPage === 1) {
      $('#previous').attr('disabled', true);
    } else {
      $('#previous').removeAttr('disabled');
    } // decide when to enable previous button


  };

  //===========================infinite scrolling========================

  var loadMore = function() {
    if (Date.now() - lastRequestTime < 3000 || requestedPage >= totalPages) {
      return;
    }
    $('.progress').show();
    requestedPage += 1;
    $('#current-page').html(requestedPage);
    searchFlickr( searchQuery );

  };

  var lastRequestTime;

  $(window).on('scroll', function() {
    console.log($(window).scrollTop(), $(window).height(), $(document).height());

    if( Math.ceil( $(window).scrollTop() ) + $(window).height() == $(document).height() ) {
      console.log('bottom');
      loadMore();
    }
  });

  //====================back to top====================================

  if ($('#top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
              $('#top').show();
          } else {
              $('#top').hide();
          }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        }, 300);
    });
  }
//===========================carousel mode=============================

// $(document).on('click', 'img', function() {
//
//   var $img = $('<img>').attr('src', fullSizeURL);
//
//
// });








}); //end of .ready
