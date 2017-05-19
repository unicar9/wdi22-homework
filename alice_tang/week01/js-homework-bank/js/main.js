// # JavaScript Bank
//
// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
//
// #### Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// // #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// ### Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// ## Bonus
//
// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//
// ## Additional
//
// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.

var bank = {
  accounts: [
    {
      name: "ali",
      balance: 100
    },
    {
      name: "lisa",
      balance: 200
    },
    {
      name: "lucy",
      balance: 300
    }
  ],

  addAccount: function(name) {
    var account = {name:name, balance:0};
    bank.accounts.push(account);
    console.log(account.name + " has been successfully added.");
  },

  showTotalSum: function() {
    var sum = 0;
    for (var i = 0; i < bank.accounts.length; i++) {
      var account = bank.accounts[i];
      sum += account.balance;
    }
    console.log("the total sum of money in the accounts: " + sum);
  },

  deposit: function(name, amount) {
    var newBalance;
    for (var i = 0; i < bank.accounts.length; i++) {
      var account = bank.accounts[i];
      if (name === account.name) {
        if (amount>0 || (account.balance + amount)>=0) { //deposit or enough money for withdrawal
          account.balance += amount;
          newBalance = account.balance;
          console.log(name +"'s new balance is " + newBalance);
        } else {  //not enough money for withdrawal, banlance not changed
          newBalance = account.balance;
          console.log(name + "'s current balance is " + newBalance);
          console.log(name + " does not have enough money to withdraw " + amount);
        }
      }
    }
    if(!newBalance){
      console.log(name + " does not have an account in this bank");
    }
  },

  transfer: function(from,to, amount) {
    var fromAccount;
    var toAccount;

    if (from===to){
      console.log("No need to transfer");
      return;
    }

    for (var i = 0; i < bank.accounts.length; i++) {
      var account = bank.accounts[i];
      if (from === account.name) {
        fromAccount = account;
      } else if(to === account.name) {
        toAccount = account;
      }
    }

    if (fromAccount && toAccount) {
      if ((fromAccount.balance - amount)>=0) { //source account has enough money to transfer
          fromAccount.balance -= amount;
          toAccount.balance += amount;
          console.log(amount +" has been successfully transfered from  " + from + " to " + to);
      } else {  //not enough money for withdrawal, banlance not changed
          console.log("not enough money to transfer " + amount +" from " + from + " to "+ to);
      }
    } else {
      console.log("one or both account not found, transfer failed")
    }
  }
};

bank.addAccount("ben",400);
bank.showTotalSum();
bank.deposit("ali", 50);
bank.deposit("ali",-200);
bank.deposit("zinh",200);
bank.transfer("lisa","lucy",50);
