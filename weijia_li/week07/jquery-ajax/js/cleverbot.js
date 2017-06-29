$(document).ready(function() {

  var getResponse = function(banter) {

    var baseURL = "https://www.cleverbot.com/getreply";

    //?key=YOURAPIKEY

    $.ajax({
      url: baseURL,
      data: {
        key: "CC30rGhYX1n4Rt77WrEoK1V5Wxw",
        input: banter
      }

    })
    .done(function(res) {
      console.log(res);
      // debugger;

      var $div = $('<div class="bot">').html(res.output).appendTo('#conversationWrapper');


      // var $output = res.output;
      // $('.bot').append($output)

    })
    .fail(function(xhr, status, err) {
      console.log(xhr, status, err);
    });

  };

  $('#conversation').keypress(function(ev) {
    if( ev.keyCode != 13 ) {
      return;
    }
    var line = $("#conversation").val();
    $('#conversation').val('');
    var $div = $('<div class="human">').html(line).appendTo('#conversationWrapper');

    getResponse(line);

  });

  // $('#submitChat').click(function() {
  //   var line = $("#conversation").val();
  //
  //   var $div = $('<div class="human">').html(line).appendTo('#conversationWrapper');
  //   // $('#chat').append($div);
  //
  // })








}); // end of .ready
