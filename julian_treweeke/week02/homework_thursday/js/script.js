

var count = 0;

var animation = function() {

  // $(document).ready(function() {

  var moveright = setInterval(function() {
    count--;

    // debugger;


    $(".cat").css("right", count + 'px');

    if (count === -1000) {
      clearInterval(moveright);

      var moveleft = setInterval(function() {

        count++;
        $(".cat").css("right", count + 'px');
        $(".cat").css("transform", "scale(-1,1)");



        if (count === 0) {
          clearInterval(moveleft);
          $(".cat").css("transform", "scale(1,1)");
          animation();
        }


      }, 5); // moveleft set interval


    } // if count

  }, 5);

};




$(".deathbutton").click(function() {

  $(".happytext").toggleClass("angrytext");
  $(".happytext").text("Angry Cat!");

  $(".scarycat").toggleClass("show");
  $(".flashcat").addClass("show");
  $(".satancat2").addClass("show");
  $(".cat").toggleClass("hide");
  $('body').css('background', 'url(images/flamesmall.gif)');
  $('#music').attr('src', 'audio/catdeathcore.mp3');
  satancatdance()
});


$(".happybutton").click(function() {

  $(".happytext").removeClass("angrytext");
  $(".happytext").text("Happy Cat");
  $(".scarycat").addClass("hide");
  $(".flashcat").addClass("hide");
  $(".satancat2").addClass(".hide");
  $(".cat").addClass("show");
  $('body').css('background', 'url(images/happybackground2.jpeg)');
  $('#music').attr('src', 'audio/happycatmusic.mp3');
});








var satancount = 0;

var satancatdance = function() {

  // $(document).ready(function() {

  var moveright = setInterval(function() {
    satancount++;

    // debugger;

    $(".flastcat").css("right", satancount + 'px');
    $(".satancat2").css("right", satancount + 'px');
    $(".satancat2").css("top", satancount + 'px');
    if (satancount === 100) {
      clearInterval(moveright);

      var moveleft = setInterval(function() {

        satancount++;
        $(".flashcat").css("left", satancount + 'px');
        $(".satancat2").css("left", satancount + 'px');
        $(".satancat2").css("transform", "scale(-1,1)");
        $(".satancat2").css("bottom", satancount + 'px');
        // $(".satancat2").css('transform', 'rotate'(satancount)});


        if (satancount > 100) {
          clearInterval(moveleft);
          $(".satancat2").css("transform", "scale(1,1)");
          satancatdance();
        }


      }, 100); // moveleft set interval


    } // if count

  }, 30);

};


animation();
