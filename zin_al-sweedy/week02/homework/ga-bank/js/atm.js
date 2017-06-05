var type = [ "savings", "checking"];
var checkingBalance = 0.0;
savingsBalance = 0.0;
// overdraftBalance = savingsBalance+ checkingBalance;
var diff=0.0;

var deposit = function (type, amount){
  // debugger
  switch (type){
    case ("savings"):{
      savingsBalance += amount;
      $('#savings').css("background-color", "grey");
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
      $('#checking').css("background-color", "grey");
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
           console.log(" you can do this transaction");
           console.log(savingsBalance, amount);
         if (savingsBalance >= amount){
            savingsBalance -= amount;
            savingsBalance.toFixed(2);
           //  overdraftBalance -= amount;
         } else if (savingsBalance >= 0 ) {
           if (savingsBalance < amount){
             diff = amount - savingsBalance;
             savingsBalance -= (amount-diff);
             savingsBalance.toFixed(2);

             if(checking-balance >= diff ){
                  $('#savings').css("background-color", "grey");
                  console.log("you can do this transaction");
                  checkingBalance -= diff;
                  checkingBalance.toFixed(2);

               //  overdraftBalance -= amount ;
                 }else {
                  $('#checking').css("background-color", "red");
                  $('#savings').css("background-color", "red");
                  alert("Error, you asked over amount to withdraw, you can not do this transacion");
                  }//else
             }//if
          }else {
            $('#checking').css("background-color", "red");
           alert("Error, you asked over amount to withdraw, you can not do this transacion");
           console.log("you cant do this transaction");
           }
         } else{
           $('#savings').css("background-color", "red");
          alert("Error, you asked over amount to withdraw, you can not do this transacion");
          console.log("you cant do this transaction");
          }
    console.log(checkingBalance, amount);
    break;
  }// case

    case ("checking"):{
      if (checkingBalance > 0 ){
         $('#checking').css("background-color", "grey");
         console.log(" you can do this transaction");

         if (checkingBalance >= amount){
            checkingBalance -= amount;
            checkingBalance.toFixed(2);
           //  overdraftBalance -= amount;
         } else if (checkingBalance > 0){
             if (checkingBalance < amount){
             diff = amount - checkingBalance;
             checkingBalance -= (amount-diff);
             checkingBalance.toFixed(2);
             if(savingsBalance >= diff ) {
            $('#savings').css("background-color", "grey");
            console.log("you can do this transaction");
            savingsBalance -= diff;
            savingsBalance.toFixed(2);
           //  overdraftBalance -= amount ;
             }else {
              $('#checking').css("background-color", "red");
              $('#savings').css("background-color", "red");
              alert("Error, you asked over amount to withdraw, you can not do this transacion");
            }//else if
         }//if
        }// else if
      }else {
         $('#checking').css("background-color", "red");
        alert("Error, you asked over amount to withdraw, you can not do this transacion");
        console.log("you cant do this transaction");
        }
      // console.log(checkingBalance, amount);

   }
   break;
  }// case
}// function

$(document).ready(function(){
  $('#checking-deposit').on("click", function(){
    console.log("You clicked me!");
    var $value = parseFloat($('#checking-amount').val());
      if (isNaN($value)){
        alert("You entered wrong value");
      }else{
      deposit("checking", $value );
      $('#checking-balance').text( "$"+ checkingBalance );
      }
  });

  $('#checking-withdraw').on("click", function(){
    console.log("You clicked me!");
    var $value = parseFloat($('#checking-amount').val());
    console.log(checkingBalance);
    if (isNaN($value)){
      alert("You entered wrong value");
    }else {
      withdraw("checking", $value );
      $('#checking-balance').text( "$"+ checkingBalance);
      $('#savings-balance').text( "$"+ savingsBalance);
    }
  });
// savings account
  $('#savings-deposit').on("click", function(){
    console.log("You clicked me!");
    var $valued = parseFloat($('#savings-amount').val());
    if (isNaN($valued)){
      alert("You entered wrong value");
    }else {
    deposit("savings", $valued );
    $('#savings-balance').text( "$"+ savingsBalance);
  }
  });

  $('#savings-withdraw').on("click", function(){
    console.log("You clicked me!");
    var $valued = parseFloat($('#savings-amount').val());
    console.log(savingsBalance);
    if (isNaN($valued)){
      alert("You entered wrong value");
    }else {
    withdraw("savings", $valued );
    $('#savings-balance').text( "$"+ savingsBalance);
    $('#checking-balance').text( "$"+ checkingBalance);
  }
  });

});
