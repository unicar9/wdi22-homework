
  <button onclick="myFunction()">Try it</button>

  <p id="demo"></p>

  <script>
  function myFunction() {
      var x = document.getElementById("frm1");
      var text = "";
      var i;
      for (i = 0; i < x.length ;i++) {
          text += x.elements[i].value + "<br>";
      }
      document.getElementById("demo").innerHTML = text;
  }
  </script>


//testing if clicking button will run code - this runs 'display date' function
  document.getElementById("checking-deposit").onclick = displayDate;

  function displayDate() {
      document.getElementById("checking-balance").innerHTML = Date();
  }

//to get value of 'checking amount' box
  var x = document.getElementById('checking-amount').value;
