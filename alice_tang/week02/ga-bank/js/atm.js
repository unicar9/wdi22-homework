
/* define an atm object, handle business logic */

var atm = {

  accounts: {checking:1000, savings: 2000},

  getTotal: function(){ // to be called by withdraw funciton
    var total =0;
    for (var key in this.accounts) {
      total += this.accounts[key];
    }
    return total;
  },

  getBalance: function(type){
    return this.accounts[type];
  },

  isBalanceZero: function (type) {
    var result = false;
    if (this.accounts[type] === 0) {
      result = true;
    }
    return result;
  },

  deposit: function(type,amount) {
    var result = false
    if ( amount > 0) {
      this.accounts[type] += amount;
      result = true;
    }
    return result;
  },

  withdraw: function(type,amount) {
    var total = this.getTotal();
    if ( amount <= 0  ) {
      return false;
    }
    // within limit
    if (amount <= this.accounts[type] ) {
      this.accounts[type] -= amount;
      return true;
    }
    // checking account choverdraft,
    // withdraw from savings account
    if (type === "checking" && amount <= total) {
      this.accounts["checking"] = 0;
      this.accounts["savings"] = total - amount;
      return true;
    }
    return false; // overdraft
  } // end of withdraw() function
}; //end of atm object


// Dom manipulations wrapped in $(document).ready()
$(document).ready(function(){

  // define jQuery varibles
  var $checkingBalance = $('#checking-balance');
  var $savingsBalance = $('#savings-balance');
  var $checkingAmount = $('#checking-amount');
  var $savingsAmount = $('#savings-amount');
  var $checkingDeposit = $('#checking-deposit');
  var $savingsDeposit = $('#savings-deposit');
  var $checkingWithdraw = $('#checking-wighdraw');
  var $savingsWithdraw = $('#savings-Withdraw');
  var $allDepositWithdrawButtons = $(':button');
  var $allAmountInputFields = $('.amount');

  //update user interface
  var updateUI = function(){
    $checkingBalance.text(atm.getBalance('checking'));
    $savingsBalance.text(atm.getBalance('savings'));
    $checkingAmount.val('');
    $savingsAmount.val('');
    if(atm.isBalanceZero('checking')) {
      $checkingBalance.addClass('zero');
    } else {
      $checkingBalance.removeClass('zero');
    }
    if(atm.isBalanceZero('savings')) {
      $savingsBalance.addClass('zero');
    } else {
      $savingsBalance.removeClass('zero');
    }
  }; //end of updateUI();

  // make sure input amount is positive integer, otherwise, set to 0;
  // var inputValidateCallback = function( ){
  //   var amount = parseInt($(this).val());
  //   if (amount < 0 || !Number.isInteger(amount)) {
  //     amount = 0;
  //   }
  //   $(this).val(amount);
  // }

  // define callback function for buttons click event
  var depositWithdrawCallback = function() {

    var amount = 0; //initialize checking or savings amount
    var type;  //account type: either 'checking' or 'savings'
    var atmMethod; // atm method to call, either 'deposit' or 'withdraw'

    if (this.id === 'checking-deposit') {
      type = 'checking';
      atmMethod = 'deposit';
      amount = parseInt($checkingAmount.val());
    }else if (this.id === 'savings-deposit') {
      type = 'savings';
      atmMethod = 'deposit';
      amount = parseInt($savingsAmount.val());
    }else if (this.id === 'checking-withdraw') {
      type = 'checking';
      atmMethod = 'withdraw';
      amount = parseInt($checkingAmount.val());
    }else if (this.id === 'savings-withdraw') {
      type = 'savings';
      atmMethod = 'withdraw';
      amount = parseInt($savingsAmount.val());
    } else {
      return false;
    }

    // make sure input amount is positive integer
    if (amount <=0 || !Number.isInteger(amount)) {
      return false;
    }

    //on successful transaction, update UI
    if ( (atm[atmMethod])(type,amount) ){
      updateUI();
    }
  }; // end depositWithdrawCallback()

  // attach callback to all buttons click event
  $allDepositWithdrawButtons.on('click',depositWithdrawCallback);

  // attach callback to all amount input fields
  // $allAmountInputFields.on('change',inputValidateCallback);

  // initial UI update
  updateUI();
}); //end of $(document).ready()
