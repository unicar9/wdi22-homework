//could be way dry-er, but it works!

$(document).ready(function () {
  var bank = {
    account: {checkingAccount: 0.0,
              savingsAccount: 0.0
              }, // keep track of acc balance

    deposit: function(dollarDeposit, accountType){
      var newBalance;
      // debugger;
      bank.account[accountType] += dollarDeposit;
      newBalance = bank.account[accountType]
      console.log("I'm in " + accountType + " it has " + newBalance)
      return newBalance;
    },//close deposit function

    withdraw: function(dollarWithdraw, accountType){
      // debugger;
      var totalBalance = bank.account.checkingAccount + bank.account.savingsAccount;
      //if you try to WD more than you have in current account
      if (dollarWithdraw > bank.account[accountType]){
        //if you try to WD more than you have in total (savings and checking) -> NO
        if (dollarWithdraw <= totalBalance) {
          // if you have enough in total, withdraw max from current account, and take rest from other account.
          var runningBalanceOfWD = 0; //creating a working withdrawal amount, which we can deduct from
          runningBalanceOfWD = dollarWithdraw; // start with running bal = total to WD

          runningBalanceOfWD -= bank.account[accountType];         //reduce runningBalance of current account
          bank.account[accountType] = 0; // make current account = 0;
          console.log(accountType + "'s balance is: " +
          bank.account[accountType] + ". The running Balance of WD is: " + runningBalanceOfWD )
          //to take rest of money from other account
          if (accountType === "checkingAccount") {
            bank.account.savingsAccount -= runningBalanceOfWD; // ie take savings
            newBalance = bank.account.savingsAccount;
            alert("You tried to withdraw from" + accountType + " but it ran out of money, so I'm withdrawing the remainder, which is " + runningBalanceOfWD + " from Savings. The new balance of Savings is " + newBalance);
            console.log ('line 38 newBalance = '+ newBalance)
            return newBalance;
          } else { //ie where you dont have sufficient funds in savings account
            bank.account.checkingAccount -= runningBalanceOfWD; // ie take savings
            newBalance = bank.account.checkingAccount;
            alert("You tried to withdraw from" + accountType + " but it ran out of money, so I'll withdrawl the remainder, which is " + runningBalanceOfWD + " from Checking. The new balance of your Checking Account is " + newBalance);
            console.log ('line 44 newBalance = '+ newBalance)
            // debugger;
            return newBalance;
          }
        } else {
          console.log ('what are you doing??')
          alert('what are you doing?')
          newBalance = bank.account[accountType];
          console.log( bank.account[accountType]);
          return newBalance;
          }// else statement
      } else {//if statement re WD more than currentBalance
      var newBalance;
      bank.account[accountType] -= dollarWithdraw;
      newBalance = bank.account[accountType];
      // debugger;
      console.log("I'm in " + accountType + " it has " + newBalance);
      return newBalance;
      }//close else (if you can WD from account as requested (ie there is sufficient money) )
    } // close withdraw function

  }//closing object


// GUI

// test code - WORKS
// $( "#checking-deposit" ).click(function() {
//   alert( "Handler for .click() called." );
// });

// var dollarDeposit = document.getElementById('checking-amount').value;
// dollarDeposit = parseInt(dollarDeposit);

//DEPOSITS
//checking deposits
$( "#checking-deposit" ).click(function(dollarDeposit, accountType) {
  var dollarDeposit = document.getElementById('checking-amount').value;
  dollarDeposit = parseInt(dollarDeposit);
  accountType = "checkingAccount";
  bank.deposit(dollarDeposit, accountType);
  $ ('#checking-balance')[0].innerHTML = bank.account.checkingAccount;
  colourCheck();
  console.log('the button was clicked. dollarDeposit = ' + dollarDeposit + "the account impacted was: " + accountType)
  })


//savings deposits
$( "#savings-deposit" ).click(function(dollarDeposit, accountType) {
  var dollarDeposit = document.getElementById('savings-amount').value;
  dollarDeposit = parseInt(dollarDeposit);
  accountType = "savingsAccount";
  bank.deposit(dollarDeposit, accountType);
  $ ('#savings-balance')[0].innerHTML = bank.account.savingsAccount;
  colourCheck();
  console.log('the button was clicked. dollarDeposit = ' + dollarDeposit + "the account impacted was: " + accountType)
  })

//WITHDRAWAL

//colour change
var colourCheck = function( ) {
  var $boxS = $('#savings-balance');
  var $boxC = $('#checking-balance');
  if (bank.account.savingsAccount === 0) {
    $boxS.css('backgroundColor', 'red')
  }
   else if (bank.account.checkingAccount === 0) {
    $boxC.css('backgroundColor', 'red')
  } else {
    $boxC.css('backgroundColor', '#E3E3E3');
    $boxS.css('backgroundColor', '#E3E3E3')
  }
}
//checking withdrawal
$( "#checking-withdraw" ).click(function(dollarDeposit, accountType) {
  var dollarDeposit = document.getElementById('checking-amount').value;
  dollarDeposit = parseInt(dollarDeposit);
  accountType = "checkingAccount";
  bank.withdraw(dollarDeposit, accountType);
  $ ('#checking-balance')[0].innerHTML = bank.account.checkingAccount;
  $ ('#savings-balance')[0].innerHTML = bank.account.savingsAccount;
  colourCheck();
  console.log('the button was clicked. dollarDeposit = ' + dollarDeposit + "the account impacted was: " + accountType)
  })

  $( "#savings-withdraw" ).click(function(dollarDeposit, accountType) {
    var dollarDeposit = document.getElementById('savings-amount').value;
    dollarDeposit = parseInt(dollarDeposit);
    accountType = "savingsAccount";
    bank.withdraw(dollarDeposit, accountType);
    $ ('#savings-balance')[0].innerHTML = bank.account.savingsAccount;
    debugger;
    $ ('#checking-balance')[0].innerHTML = bank.account.checkingAccount;
    colourCheck();
    console.log('the button was clicked. dollarDeposit = ' + dollarDeposit + "the account impacted was: " + accountType)
    })

  }); //end of .ready
