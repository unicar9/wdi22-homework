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

var accounts = [{
    name: "Henderson",
    balance: 100
  },
  {
    name: "Reily",
    balance: 100
  },
  {
    name: "Black",
    balance: 100
  },
  {
    name: "Evans",
    balance: 100
  },
  {
    name: "Paulson",
    balance: 100
  },
]

//Making a deposit

var deposit = function(depositAmount, depositAccount) {
  accounts[depositAccount].balance += depositAmount;
  console.log(accounts[depositAccount].name + " deposited $" + depositAmount);
}

//Making a withdrawal

var withdraw = function(withdrawAmount, withdrawAccount) {
  if (withdrawAmount < accounts[withdrawAccount].balance) {
    accounts[withdrawAccount].balance -= withdrawAmount;
    console.log(accounts[withdrawAccount].name + " withdrew $" + withdrawAmount);
  } else {
    console.log('Insufficient funds for ' + accounts[withdrawAccount].name + " withdrawal.");
  }
}

//Adding a new account

var addAccount = function(addName, addBalance) {
  if (addBalance > 0) {
    var newObject = {
      name: addName,
      balance: addBalance
    }
    accounts.push(newObject);
    console.log(addName + " created and account and deposited $" + addBalance);
  } else {
    console.log("Sorry " + addName + ", you cannot deposit negative funds.")
  }
}

//Logging accounts to console

var accountsListing = function() {
  for (i = 0; i < accounts.length; i++) {
    console.log(accounts[i])
  }
}

// Making a transfer

var makeTransfer = function(to, from, transfer) {
  accounts[to].balance += transfer;
  accounts[from].balance += transfer;
  console.log(accounts[from].name + " transferred $" + transfer + " to " + accounts[to].name)
}

//Totalling the banks money - theres a bug in this.

var theBank = 0;

// var bankTotal = function() {
//   for (var key in accounts) {
//     var total = parseFloat(accounts[key].balance);
//     theBank += total;
//   }
//   console.log("Total deposits held by ABC bank are $" + theBank);
// }

var bankTotal = function() {
  for (var k = 0; k < accounts.length; k++) {
    var total = parseFloat(accounts[k].balance);
    theBank += total;
  }
  console.log("Total deposits held by ABC bank are $" + theBank);
}

// Object.keys(accounts);

console.log("~ Opening accounts listings ~")

accountsListing();

bankTotal()

console.log("~ Activities ~");

addAccount("Chandler", 100);

addAccount("Turnbull", -101);

deposit(200, 0);

withdraw(900, 1);

withdraw(90, 5);

makeTransfer(3, 2, 50)

console.log("~ Closing account listings ~")

accountsListing();

bankTotal()
