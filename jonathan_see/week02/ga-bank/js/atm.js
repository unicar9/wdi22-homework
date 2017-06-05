
$(document).ready(function () {

  var checkingBalance = 0;
  var savingsBalance = 0;

  $('#checking-deposit').click( function () {
    var $amount = parseInt($('#checking-amount').val()); // converts the amount into an integer

    if (!($amount) || $amount <= 0) { // if not number or less than 0

      $('#checking-amount').val(''); // reset the checking-amount box to empty
      return;

    } else {

      checkingBalance += $amount; // adds deposit amount to checkingBalance
      $('#checking-balance').html('$' + checkingBalance); // displays the checking balance through HTML
      $('#checking-amount').val(''); // reset the checking-amount box to empty
      return checkingBalance;
    }
  });

  $('#checking-withdraw').click( function () {
    var $amount = parseInt($('#checking-amount').val());

    if (!($amount) || $amount <= 0) {

      $('#checking-amount').val('');
      return;

    } else if ((checkingBalance + savingsBalance)- $amount < 0) { // if amount to be withdrawn is more than checking & savings balance combined
      return;

    } else if (checkingBalance - $amount >= 0) { // amount to be withdrawn is less than checking balance
      checkingBalance -= $amount;
      $('#checking-balance').html('$' + checkingBalance);
      $('#checking-amount').val('');
      return checkingBalance;

    } else { // amount to be withdrawn is more than checking balance but rest is less than savings balance
      var amountRemaining = $amount - checkingBalance; // amount to be withdrawn from savings balance
      savingsBalance -= amountRemaining; // new savings balance
      $('#savings-balance').html('$' + savingsBalance);
      checkingBalance = 0;
      $('#checking-balance').html('$0'); // displays $0 in checking balance box
      $('#checking-amount').val(''); // resets checking amount to empty and brings bacl placeholder
      return checkingBalance;
    }

  });

  $('#savings-deposit').click( function () {
    var $amount = parseInt($('#savings-amount').val());

    if (!($amount) || $amount <= 0) {

      $('#savings-amount').val('');
      return;

    } else {
      savingsBalance += $amount;
      $('#savings-balance').html('$' + savingsBalance);
      $('#savings-amount').val('');
      return savingsBalance;
    }
  });

  $('#savings-withdraw').click( function () {
    var $amount = parseInt($('#savings-amount').val());

    if (!($amount) || $amount <= 0) {

      $('#savings-amount').val('');
      return;

    } else if ((checkingBalance + savingsBalance)- $amount < 0) { // if amount to be withdrawn is more than savings & checking balance combined
      return;

    } else if (savingsBalance - $amount >= 0) { // amount to be withdrawn is less than checking balance
      savingsBalance -= $amount;
      $('#savings-balance').html('$' + savingsBalance);
      $('#savings-amount').val('');
      return savingsBalance;

    } else { // amount to be withdrawn is more than savings balance but rest is less than checking balance
      var amountRemaining = $amount - savingsBalance; // amount to be withdrawn from checking balance
      checkingBalance -= amountRemaining; // new checking balance
      $('#checking-balance').html('$' + checkingBalance);
      savingsBalance = 0;
      $('#savings-balance').html('$0'); // displays $0 in savings balance box
      $('#savings-amount').val(''); // resets savings amount to empty and brings bacl placeholder
      return checkingBalance;
    }
  });


});


// deposit: function( name, amount ){
//
//     var account = this.getAccount( name );
//
//     // test for error case: account not found
//     if( !account || (typeof amount) !== "number" ){
//       return false;
//     }
//
//     account.balance += amount;
//     return account;
//
//   }, //deposit
//
//   withdraw: function ( name, amount ) {
//
//     var account = this.getAccount( name );
//
//     // test for error case: account not found
//     if( !account || (typeof amount) !== "number" ){
//       return false;
//     }
//
//     if( (account.balance - amount) < 0 ){
//       return {error: "Insufficient funds"};
//     }
//
//     account.balance -= amount;
//     return account;
//
//   }//withdraw
