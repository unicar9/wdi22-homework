// * Keep track of the checking and savings balances somewhere

var bank = {
  balances: {
    checking: 100,
    savings: 100
  },
  // * Add functionality so that a user can deposit money into one of the bank accounts.
  deposit: function (amount, type) {
    // console.log("i'm alive")
    if (amount < 0 || this.balances < 0){
      return false;
    } else {
      bank.balances[type] += amount;
    }
  }, //deposit function
  totalBalance: function(){
    return (this.balances['checking'] + this.balances['savings'])
  },
  withdrawal: function (amount, type){
  // debugger
    var total = this.totalBalance();
    // var withdrawalAmount = amount;
    var currentBalance = this.balances[type];
    // debugger;
    if ( amount > total || this.balances['checking'] && this.balances['savings'] < 0){

      return false;

    } else if ( amount < 0){
      return false;
    } else if (amount > currentBalance){
      // debugger;
        var diff = amount - currentBalance;
        console.log(diff);
        this.balances[type] -= (amount - diff);
        console.log(currentBalance);
        // debugger;
        if(type === "savings"){
          this.balances["checking"] -= diff;
          // console.log("Savings: " + this.balances["savings"] + "and Checking: " + this.balances["checking"]);;
        } else {
          // debugger
          this.balances["savings"] -= diff;
          console.log("Savings: " + this.balances["savings"] + "and Checking: " + this.balances["checking"]);
        }
        console.log(bank.totalBalance());
    } else {
       bank.balances[type] -= amount;
       console.log(currentBalance);
    }
  } //withdrawal function
};

$( document ).ready(function() {


  $("#checking-balance").text( "$" + bank.balances.checking );
  $("#savings-balance").text( "$" + bank.balances.savings );

  $( "#checking-deposit" ).click(function() {

    var inputAmount = parseFloat( $('#checking-amount').val() )
    var transaction = bank.deposit( inputAmount, "checking" );
    if ( transaction === false ){
      $('#checking').css('background-color', 'red')
    } else {

      $('#checking-balance').text("$" + bank.balances.checking );
      $('#checking').css('background-color', '#6C9A74')
    }


  });

  $( "#checking-withdraw" ).click(function() {

    var inputAmount = parseFloat( $('#checking-amount').val() )
    var transaction = bank.withdrawal( inputAmount, "checking" );
    if (transaction === false ){
      $('#checking').css('background-color', 'red');
    } else {

      $('#checking-balance').text("$" + bank.balances.checking );
      $('#savings-balance').text("$" + bank.balances.savings );
      $('#checking').css('background-color', '#6C9A74')
    }
  });

  $( "#savings-deposit" ).click(function() {

    var inputAmount = parseFloat( $('#savings-amount').val() )
    var transaction = bank.deposit( inputAmount, "savings" );
    if ( transaction === false ){
      $('#savings').css('background-color', 'red')
    } else {

      $('#savings-balance').text("$" + bank.balances.savings );
      $('#savings').css('background-color', '#6C9A74')
    }
  });

  $( "#savings-withdraw" ).click(function() {

    var inputAmount = parseFloat( $('#savings-amount').val() )
    var transaction = bank.withdrawal( inputAmount, "savings" );
    if (transaction === false ){
      $('#savings').css('background-color', 'red');
    } else {
      $('#savings-balance').text("$" + bank.balances.savings );
      $('#checking-balance').text("$" + bank.balances.checking);
      $('#savings').css('background-color', '#6C9A74')

    }
  });





});


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
