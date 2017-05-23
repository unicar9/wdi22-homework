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


var bank = {
  accounts: [{name: 'Zhushi', balance: 73824},
             {name: 'Liufen', balance: 87651},
             {name: 'DaiGou', balance: 11230},
             {name: 'Hongli', balance: 99061}],

  //method1: totalSum
  totalSum: function () {
    var n = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      n += this.accounts[i].balance;
    }
    console.log('The total sum is $' + n);
  },

  //method2: addAccount
  addAccount: function (obj) {
    this.accounts.push(obj);
    console.log('New account added. Name: ' + obj.name + ', Current balance: $' + obj.balance);
  },

  //method3: makeDeposits
  makeDeposits: function (index, amount1) {
     var balanceNew;
     balanceNew = this.accounts[index].balance + amount1;
     console.log('Your current balance is $' + balanceNew);
   },

  //method4: makeWithdrawals
  makeWithdrawals: function (index, amount2) {
     var balanceNew;
     balanceNew = this.accounts[index].balance - amount2;

     if (balanceNew < 0) {
       console.log('Not sufficient funds!');
     } else {
       console.log('Your current balance is $' + balanceNew);
     }
   },

   //method5: makeTransfer
   makeTransfer: function (index1, index2, amount) {
     var balanceNew1;
     var balanceNew2;

     balanceNew1 = this.accounts[index1].balance - amount;
     balanceNew2 = this.accounts[index2].balance + amount;

     if (balanceNew1 < 0) {
       console.log('Not sufficient funds! Transfer failed');
     } else {
       console.log(this.accounts[index1].name + "'s account current balance is $" + balanceNew1);
       console.log(this.accounts[index2].name + "'s account current balance is $" + balanceNew2);
     }
   }

  };


//test
bank.totalSum();
bank.addAccount({name: 'LiBo', balance: 2831});
bank.makeDeposits(2, 34);
bank.makeWithdrawals(3, 939393);
bank.makeTransfer(0, 3, 989898);
