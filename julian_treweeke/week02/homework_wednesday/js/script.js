// var percent = 0;
// var cat = document.querySelector('#cat');
//
// var catwalk = function() {
//   walkRight = setInterval(function(){
//   percent++;
//   cat.style.left = percent + "%";
// },100) // walk right function
//
// };





var percent = 0;
var cat = document.querySelector('#cat');

var catwalk = function() {
  walkRight = setInterval(function() {
    percent++;
    cat.style.left = percent + "%";
    if (percent === 75) {
      clearInterval(walkRight);
      cat.style.transform = "scale(-1,1)"
      walkLeft = setInterval(function() {
        percent--;
        cat.style.left = percent + "%";
        if (percent === 0) {
          clearInterval(walkLeft);
          cat.style.transform = "scale(1,1)"
          catwalk();


        }

      }, 100)
    }

  }, 100) // walk right function

}; // catwalk function

catwalk();



var headingChange = function() {
  heading.style.fontFamily = 'Bangers';
  heading.style.color = 'red';
  heading.innerHTML = 'Angry Cat!!';
}


// var heading = document.getElementsById( 'Heading');
var scarycat = document.getElementById('scarycat');
var satancat2 = document.getElementById('satancat2');
var deathbutton = document.getElementById('deathbutton');
var catbutton = document.getElementById('catbutton');
var penta = document.getElementById('pentagram');
var music = document.getElementById('music');


var deathcat = function() {
  cat.style.display = 'none';
  scarycat.style.display = 'block';
  penta.style.display = 'block';
  satancat2.style.display = 'block';
  document.body.style.backgroundImage = 'url(images/flamesmall.gif)';
  music.src = 'audio/catdeathcore.mp3';
  pentaDance();
  headingChange();
}

var happycat = function() {
  cat.style.display = 'block';
  scarycat.style.display = 'none';
  penta.style.display = 'none';
  satancat2.style.display = 'none';
  document.body.style.backgroundImage = 'url(images/happybackground2.jpeg)';
  heading.style.fontFamily = 'GloriaHallelujah';
  heading.style.color = 'rgb(103, 61, 255)';
  heading.innerHTML = 'Happy Cat';
  music.src = 'audio/happycatmusic.mp3';
  catwalk();
}







deathbutton.addEventListener('click', deathcat);
happybutton.addEventListener('click', happycat);


var pentaDance = function() {
  pentaRight = setInterval(function() {
    percent++;
    penta.style.top = percent + "%";

    if (percent === 15) {
      clearInterval(pentaRight);
      penta.style.transform = "scale(-1,1)"
      pentaLeft = setInterval(function() {
        percent--;
        penta.style.left = percent + "%";
        penta.style.down = percent + "%";
        if (percent === 35) {
          clearInterval(pentaLeft);
          penta.style.transform = "scale(1,1)"

          pentaDance();

        } // if percent === 35

      }, 1000) // pentaleft set interval
    } // if

  }, 1000) // Pentaright

}; // pentaDance function

var random = 0;
var satancatdance2 = function() {
  random++;
  satancatright = setInterval(function() {
    percent++;
    satancat2.style.left = percent + "%";
    if (percent === 75) {
      clearInterval(satancatright);
      satancat2.style.transform = "scale(-1,1)"
      satancatleft = setInterval(function() {
        percent--;
        satancat2.style.left = percent + random + "%";
        satancat2.style.top = percent + random + "%";
        if (percent === 0) {
          clearInterval(satancatleft);
          satancat2.style.transform = "scale(1,1)"
          satancatdance2();

        }

      }, 45)
    }

  }, 22) // walk right function

};


satancatdance2();







// make cat go to the right till end of screen
// when cat hit right side of screen flip cat with translate? and walk to the other side of screen
// loop

// cat death idea
// when click death cat button:
//                             change background image to animated gif
//                             change cat gif to evil cat gif
//                             add flames or satanic symbols
//                             change peaceful music to grind core
