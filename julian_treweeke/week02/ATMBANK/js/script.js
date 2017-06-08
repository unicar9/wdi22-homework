// # Title: GA ATM App
//
// ### Type:
// - Lab
//
// ### Summary
// - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// - You'll be selecting elements, manipulating HTML, and manipulating style along
// with building out the logic using JavaScript.
//
// ### Objectives:
// - DOM selection, appending, removal, updating
//
// ### Specification:
//
// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
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
// * Are there ways to refactor your code to make it DRYer?
//
// ___
//
// #### Separation of Concerns
//
// Spend some time thinking about the following before you even start writing code: can you separate the GUI code (event handlers for form input or buttons) from the banking code (deposit and withdrawal between accounts, checking for overdraft etc) as much as possible?
//
// Ideally you would be able to test all the banking functions from the console, and then connect them to the GUI code with the minimum amount of overlap or points of contact.
//
// _These two parts of the system (display logic and business logic) should know as little as possible about each other._

// psuedo code

// need to make a cheque and savings account with money in them.
// need a withdrawal and deposit function
// if the withdrawal for the cheque can't be made show an error
// if the withdrawl can be made but only with some of the savings do a sum minus whats need and take some money from the savings

var money = 0;



$('#checking-deposit').click(function() {
  var amount = parseInt($('#checking-amount').val());
    if (!amount){
    atm.balance();return;
  }
    atm.depositCheque(amount);
});


$('#checking-withdraw').click(function() { // when check withdrawl click do something
  var amount = parseInt($('#checking-amount').val());
    if (!amount){
    atm.balance();return;
  }
    atm.withdrawCheque(amount);
});


$('#savings-deposit').click(function() { // when savings deposit click do something
  var amount = parseInt($('#savings-amount').val());
    if (!amount){
    atm.balance();return;
  }
    atm.depositSavings(amount);
});

$('#savings-withdraw').click(function() { // when savings deposit click do something
  var amount = parseInt($('#savings-amount').val());
    if (!amount){
    atm.balance();return;
  }
    atm.withdrawSavings(amount);
});



var atm = {

  colorChange: function(){

    if ( this.cheque === 0 ){
      $('#checking-balance').css('background-color', 'red');
    } else {
      $('#checking-balance').css('background-color', '#E3E3E3');
    };

    if ( this.savings === 0 ){
      $('#savings-balance').css('background-color', 'red');
    } else {
      $('#savings-balance').css('background-color', '#E3E3E3');
    };

  },

  nofunds: function(){
    console.log('insufficient funds');
    this.balance();
  },

  cheque: 0,
  savings: 0,

  balance: function(){
    this.colorChange();
    $('#checking-balance').text('$' + this.cheque );
    $('#savings-balance').text('$' + this.savings );
    $('#checking-amount').val('');$('#savings-amount').val('');

    console.log('Cheque Balance: ' + this.cheque + ' Savings Balance: ' + this.savings);
  },

  withdrawCheque: function(amount,account){

    money = amount;

    if ( this.cheque + this.savings - amount < 0 ){ // can't get from savings or cheque
      this.nofunds();
      return;
      };

    if ( this.cheque - amount >= 0 ){ // can withdraw from cheque

          this.cheque -= amount;

          this.balance();
        } else {

          this.savings = ( this.cheque - amount ) + this.savings;
          this.cheque = 0;
          this.balance();

        };

  }, // withdraw cheque function

  withdrawSavings: function(amount){

    money = amount;

    if ( this.savings - amount >= 0 ){ // can withdraw from cheque

          this.savings -= amount;

          this.balance();
        } else {
          this.nofunds();
          return;
      };

  },

  depositCheque: function(amount){
    money = amount;

    this.cheque += amount;
    this.balance();

  },

  depositSavings: function(amount){
    money = amount;

    this.savings += amount;
    this.balance();

  }

}; // atm object

atm.colorChange();
