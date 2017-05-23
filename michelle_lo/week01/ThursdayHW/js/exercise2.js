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

var bankDetails = [
  {currentBalance: 100,
  name: "bob"},
  {currentBalance: 200,
  name: "gary"},
  {currentBalance: 200,
  name: "craig"},
  {currentBalance: 500,
  name: "elmo"}
]

// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

//add account
var addAccounts = function (newBalance, newName) {
  bankDetails.push ({currentBalance: newBalance, name: newName}); {
    console.log(newName + "'s account is open. Its balance is $" + newBalance)
  }
};

//show balance of individual account
var displayBalanceIndiv = function (name) {
  console.log(name + ("'s account has $") + bankDetails["name"].currentBalance)
};

//show balance of all accounts
var displayBalance = function () {
  for (var i = 0; i < bankDetails.length; i++) {
    console.log(bankDetails[i].name + ("'s account has $") + bankDetails[i].currentBalance)
  };

//show total balance for Bank

//deposit money

// withdraw money

// tranfser money between acounts (check both accounts exist and then move it over)
