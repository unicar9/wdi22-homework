// JavaScript Bank
//
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional



var accounts = [
    {
      ownerName: "Max Bausher",
      currentBalance: 1000,
      password: "shasta"
    },
    {
      ownerName: "Luke Hammer",
      currentBalance: 4000,
      password: "wdi22ismyfavoriteclass"
    }
  ];

// console.log(accounts);

// var depositAmount;
// var withdarawlAmount;

// var viewNewTotal = function (password) {
//   var sum = 0;
//   for (var i = 0; i < accounts.length; i++) {
//       if (password = accounts[i].password){
//         sum += accounts.currentBalance;
//         console.log(sum);
//       }
//     }
//   alert("Your new balance is " + sum + "!");
// };

var makeTransfer = function (transferToAccount, transferAmount, account) {
  console.log(account)
  for (var i = 0; i < accounts.length; i++) {
     if (accounts[i].ownerName == transferToAccount) {
       account.currentBalance -= parseInt(transferAmount);
       accounts[i].currentBalance += parseInt(transferAmount);
       alert("Transfer to " + accounts[i].ownerName + " successful! Your new balance is: " + account.currentBalance);
       console.log(accounts);
       break;
     }
  }
}

var makeDeposit = function (depositAmount, account) {
  console.log("===>" + depositAmount, account);

  account.currentBalance += parseInt(depositAmount);
  alert("Current balance is now: " + account.currentBalance);

  // console.log("This account has been received a deposit of " + account.currentBalance);
};

var makeWithdrawal = function (withdarawalAmount, account) {
  if (account.currentBalance - withdarawalAmount > 0) {
    account.currentBalance -= parseInt(withdarawalAmount);
    alert("Current balance is now: " + account.currentBalance);
  } else {
    alert("Insufficient funds! Please contact your local Bada$$ Bank branch");
  }

  // console.log("===> This account has been received a deposit of " + account.currentBalance)
  // console.log("viewCurrentBalance is alive!")
};

var viewCurrentBalance = function(password) {
  for (var i = 0; i < accounts.length; i++) {
      if (password === accounts[i].password){
        var res =  prompt("Welcome back " + accounts[i].ownerName + ", your current balance is " + accounts[i].currentBalance + ". Would you like to make a withdrawal, deposit, or transfer?");
        console.log(res);
            if (res === "deposit"){
            var depositAmount = prompt("Thank you for your business, how much would you like to deposit today?");
            console.log(depositAmount, accounts[i]);
            makeDeposit(depositAmount, accounts[i]);

        };
        if (res === "withdrawal"){
          var withdarawalAmount = prompt("Cash money!!!! How much would you like to take out this time?");
          console.log(withdarawalAmount);
           makeWithdrawal(withdarawalAmount, accounts[i]);
        }
        if (res === "transfer") {
          var transferToAccount = prompt("Who would you like to transfer to?")
          console.log(transferToAccount);
          var transferAmount = prompt("How much would you like to transfer");
          console.log(transferAmount);
          makeTransfer(transferToAccount, transferAmount, accounts[i]);
        }
      };
  }
  // console.log("viewCurrentBalance is alive!")
};

var createNewAccount = function () {
  var newCustomerName = prompt("Please provide your name: ");
  var initialDepositAmount = prompt("Great! We will be sending you an e-mail verification after your intial deposit. How much will you deposit this time?");
  var newPassword = prompt("One last step! Set your super secret password");
  var newAccount = {
    ownerName: newCustomerName,
    currentBalance: parseInt(initialDepositAmount),
    password: newPassword
  }
  accounts.push(newAccount);
  alert("Success! Your account is now set up. Please check your e-mail for verification. Thank you picking Bada$$ Bank!")
  // console.log(newAccount);
};

var promptStart = function () {
      var response = prompt('Welcome to Bada$$ Bank, if you are an existing user, please supply your password. If you want to start banking with us, respond: new customer');
        if (response === "new customer") {
          createNewAccount();
        } else {
          viewCurrentBalance(response);
        }
    };


promptStart();
// viewCurrentBalance(1);
// viewNewTotal();
// viewCurrentBalance(2);
// viewNewTotal();
