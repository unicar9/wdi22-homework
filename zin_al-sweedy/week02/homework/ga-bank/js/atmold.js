var type = [ "savings", "checking"];
var checkingBalance = 0;
savingsBalance = 0;
overdraftBalance = savingsBalance+ checkingBalance;


var deposit = function (type, amount){
  // debugger
  switch (type){
    case ("savings"):{
      savingsBalance += amount;
      // overdraftBalance += amount;
      if (savingsBalance > 0){
        $('#savings').css("background-color", "grey");
        console.log(" you can do this transaction");
        // $('#checking-balance').text( "$"+ checking);
      }
      break;
    }
    case ("checking"):{
      checkingBalance += amount;
      // overdraftBalance += amount;
      if (savingsBalance > 0){
        $('#checking').css("background-color", "grey");
        console.log(" you can do this transaction");
        // $('#checking-balance').text( "$"+ checking);
      }
      break;
    }
  }// case
}// function

var withdraw = function (type, amount){
  switch (type){
    case ("savings"):{
      if (savingsBalance > 0 ){
         $('#savings').css("background-color", "grey");
          //  console.log(" you can do this transaction");
      // }else {
      //   $('#savings').css("background-color", "red");
      //   console.log(" you can not do this transaction");
      //   alert(" you can not do this transaction");
       }
      console.log(savingsBalance, amount);
      if (savingsBalance >= amount){
         savingsBalance -= amount;
        //  overdraftBalance -= amount;
      } else if (checkingBalance >= amount ) {
       $('#checking').css("background-color", "grey");
         console.log(" you can do this transaction");
         checkingBalance -= amount;
        //  overdraftBalance -= amount ;
        }else {
         $('#savings').css("background-color", "red");
         $('#checking').css("background-color", "red");
         alert("Error, you asked over amount to withdraw");
         console.log("you can not do this transaction");
        //  var checking = document.getElementById("checking-balance");
        //  checking.style.background= "red";
        // or one line below // one syntax no need for {}
      }// else
  }// case

    case ("checking"):{
      if (checkingBalance > 0 ){
         $('#checking').css("background-color", "grey");
         console.log(" you can do this transaction");
      }
      // else {
      //   $('#checking').css("background-color", "red");
      //    console.log(" you can not do this transaction");
      //  }

      console.log(checkingBalance, amount);

      if (checkingBalance >= amount){
         checkingBalance -= amount;
        //  overdraftBalance -= amount;
         break;
      } else if (savingsBalance >= amount ) {
       $('#savings').css("background-color", "grey");
         console.log("you can do this transaction");
         savingsBalance -= amount;
        //  overdraftBalance -= amount ;
         break;
        }else {
          $('#checking').css("background-color", "red");
          $('#savings').css("background-color", "red");
         alert("Error, you asked over amount to withdraw, you can not do this transacion");
         console.log("you cant do this transaction");
         }
    }
  }// case
}// function

$(document).ready(function(){
  $('#checking-deposit').on("click", function(){
    console.log("You clicked me!");
    var $value = parseFloat($('#checking-amount').val());
    // if ($value != null){
      if (isNaN($value)){
        alert("You entered wrong value");
        // return false;
      }
      // }else if (typeof ($value) === 'string'){
        // alret ("You entered a wrong value");
        // return false;
    //  }
    else{
    // console.log(checkingBalance);
    // alert(checkingBalance);
    deposit("checking", $value );
    $('#checking-balance').text( "$"+ checkingBalance );
    }
  });
  // $('#checking-deposit').on("click", function(){
  //   console.log("You clicked me!");
  //   var $value = parseFloat($('#checking-amount').val());
  //   console.log(checkingBalance);
  //   deposit("checking", $value );
  //   $('#checking-balance').text( "$"+ checkingBalance);
  //
  // });

  $('#checking-withdraw').on("click", function(){
    console.log("You clicked me!");
    var $value = parseFloat($('#checking-amount').val());
    console.log(checkingBalance);
    withdraw("checking", $value );
    $('#checking-balance').text( "$"+ checkingBalance);
    $('#savings-balance').text( "$"+ checkingBalance);
  });
// savings account
  $('#savings-deposit').on("click", function(){
    console.log("You clicked me!");
    var $valued = parseFloat($('#savings-amount').val());
    deposit("savings", $valued );
    $('#savings-balance').text( "$"+ savingsBalance);
    $('#checking-balance').text( "$"+ checkingBalance);
  });

  $('#savings-withdraw').on("click", function(){
    console.log("You clicked me!");
    var $valued = parseFloat($('#savings-amount').val());
    console.log(savingsBalance);
    withdraw("savings", $valued );
    $('#savings-balance').text( "$"+ savingsBalance);
    $('#checking-balance').text( "$"+ checkingBalance);
  });

});
