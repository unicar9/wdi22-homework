//I'm using this file to attempt to make the GUI code DRYer. Please ignore. At the moment, it's just a copy and paste from the master.

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
