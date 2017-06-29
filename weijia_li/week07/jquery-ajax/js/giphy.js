$(document).ready(function() {
  var baseURL = "https://api.mojilala.com/v1/stickers/trending";

  $.ajax({
    url: baseURL,
    data:{
      api_key: "dc6zaTOxFJmzC"
    }
  })
  .done(function(res) {
    console.log(res);
  })
  .fail(function(xhr, status, error) {
    console.log(xhr, status, error);
  })

}); // end of .ready
