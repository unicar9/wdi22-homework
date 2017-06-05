// <!-- #Title: ATM App
//
// ###Type:
// - Lab
//
// ###Summary
// - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// - You'll be selecting elements, manipulating HTML, and manipulating style along
// with building out the logic using JavaScript.
//
// ###Objectives:
// - DOM selection, appending, removal, updating
//
// ###Specification:
//
// * Keep track of the checking and savings balances somewhere


// * Add functionality so that a user can deposit money into one of the bank accounts.

// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.

// * Add functionality so that a user can withdraw money from one of the bank accounts. -
  // when click withdraw, if the account has greater than the money, return the new value if not put a css border
  // when lik

// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change. --> appendChild the value

// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.

// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.

// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.

// * Make sure there is overdraft protection going both ways.

// * Are there ways to refactor your code to make it DRYer? -->


//steps

//need to select the right div elements

//need an open value to store them in

//allow them to enter a value

//will need to check if they have the right amount of money
  // if they do minus the account
    //else if they don't make a css box appear with prompt (this will trigger in the browswer)

// will then need to repeat for the other value

//OTHER PEOPLE ANSWERS

//MICHELLE

//make an object for checkingAccount and savings accounts

// deposit: function

// fatal flaw :  you did not have an object that the gui would interact with. you fucking moron.
// re-write the code so the balance have someone to check off of.
// research more into how the gui interacts with what is going on

//ALICE
// Do small helper functions that can be used later in the code to WORK
// lots of returns to get the functions working
// defines the jquery variables
// the first part of the assignment is to get everythign into an objects
// can get the updateUI into one selection
// line 134 this will return a method the atm object that will return the call as you need it

//














//DOM aspect
$(document).ready(function (){

    var checkingBalance = '#checkingBalance';

    var checkDeposit = function (){
      var float = parseFloat(checkingBalance);
      console.log(float);
    };

    var openingBalance = 0;

    if (openingBalance > 0){

        $('#checking-balance').click(function (){

        var checkDeposit = $('#checking-amount');

        $('#checking-deposit').val(checkDeposit);
          console.log(checkDeposit);

        $('#checking-balance').append(checkDeposit);
            console.log(checkDeposit);
        //
        // var newBalance += (checkDeposit + openingBalance);
        //   console.log(newBalance);
      });

    if(openingBalance <= 0){
      $('#checking-balance').addClass(borderRadius = 'red', solid, '4px')
      prompt ('You have insufficient funds.')
      }
    } else if {
      console.log("Please enter a valid number");
    }



    }//openingBalance

    var updateUi =


}); //for document read


// $(document).ready(function(){
//
//   // $('#checking').click (function ()){
//
//     var checkingBalance = 0;
// //trial number 3 - just want to log the number in the checking-amount
//
//   $('#checking-deposit').click(function (){
//
//
//     var amount = this.parseFloat('#checking-amount');
//
//     $('input[amount]').val(amount);
//     console.log(amount);
//
//   });
//
// // }//checking
//
// });//document ready

//checkingBalance += parseInt


// var checkingamount = [];

// //trial number 1
//   $('#checking-deposit').click(function(){
//     var amount = parseInt('#checking-amount');
//     var checkingamount = 0;
//
//     if (amount > 0){
//       $(amount).change(function (){
//         $('#checking-balance').val($(this).val());
//       });
//     }

// //trial number 2
//     $('#checking-deposit').on('click', function( e ){
//       var amount = parseInt('#checking-amount');
//       var balance = 0;
//
//       if (amount > 0 ){
//         $('#checking-balance).val('amount');
//       };
//
//     }):
//
//     return e;
//   }); // checking value
//
//
// //$(document).ready(function(){
//   // $('#checking').click (function ()){
//     var checkingBalance = 0;
//
//     var amount = parseFloat('#checking-amount');
//     //trial number 3 - just want to log the number in the checking-amount
//   $('#checking-deposit').click(function (){
//
//     $('input').on('select', 'amount');
//
//
//
//   return(this)});
//
//
// });
