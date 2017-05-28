// JavaScript Bank
//
// In this homework, you'll create a basic bank in Javascript.
// The bank has many accounts and the following capabilities
// that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts.
// The bank needs a method that will return the total sum of
// money in the accounts. It also needs an addAccount method
// that will enroll a new account at the bank and add it to
// the array of accounts. There is no need to create additional
// functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects
// that all share a set of common functionality.

var bank = [
  {name: "Adam"; account: 100},
  {name: "Bill", account: 120},
  {name: "Carl", account: 150}
]

var totalAccount = function (act) {
  var sum = 0;
  for (var i = 0; i < act.length; i++) {
    sum += act.account[i];
  };
  return sum;
}

console.log(totalAccount(bank));

// To add account

var addAccount = function (holder, acct) {
  var newAccount = {name: holder, account: act};
  bank.account.push(newAccount);
}

console.log(totalAccount("Desmond", 200));

// Accounts
//
// Accounts have a current balance and owner's name. You
// should be able to deposit or withdraw from an account to
// change the balance.
//
// There is no need to write a user interface. Make sure
// functions return values -- you may also have your functions
// console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript
// commands that shows that the methods do indeed work as
// expected: add some accounts, show the total balance, make
// some deposits and withdrawals, show the new total balance.

var accounts = [
  {owner: "Adam", currentBalance: 100},
  {owner: "Bill", currentBalance: 150},
  {owner: "Carl", currentBalance: 120}
]

var depositMoney = function(name, amount) {
  var newBalance = 0;
  for (var i = 0; i < bank.account.length; i++) {
    if (bank.account[i].name === name) {
    newBalance = bank.accounts[i].balance;
    };
  }
  return newBalance;
}

depositMoney("Adam", 100);

var withdrawMoney = function(name, amount) {
//  var newBalance = 0;
  for (var i = 0; i < bank.account.length; i++) {
    if (bank.accounts[i].name === name) {
      if (bank.accounts[i].balance - amount > 0) {
        bank.accounts[i].balance -= amount;
      } else {
        console.log(('insufficient funds'));
      }
      console.log('Receipt\n' + );
      }
    newBalance = bank.accounts[i].balance;
    };
  }
  return newBalance;
}

depositMoney("Adam", 100);

// Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to
// transfer amounts between two accounts.
//
// Additional
//
// Begin exploring the JavaScript Koans. Fork, clone
// and start trying them.
