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




var bank = {


  countMoney: function(){ // count all the banks money
    var cash = 0;
    for (var i = 0; i < bank.accounts.length; i++) {
    cash += bank.accounts[i].balance;
    }
  alert('Bank total profit is ' + cash);
  },



  addAccount: function(name,balance){ // add account to the bank
    var newAccount = {name: name, balance: balance }
    bank.accounts.push(newAccount);

  },

  // I tried cleaning up the code and it didn't work
  // depositMoney: function(name,amount){ // deposit money into an account
  //     for (var i = 0; i < bank.accounts.length; i++) {
  //       var accName = bank.accounts[i].name;
  //       var accBalance = bank.accounts[i].balance;
  //      if (accName === name){
  //        accBalance = accBalance + amount;
  //        console.log('Receipt\n Name: ' + accName + '\n Balance:' + accBalance);
  //      };
  //     }
  //     return;
  // },


  depositMoney: function(name,amount){ // deposit money into an account
      for (var i = 0; i < bank.accounts.length; i++) {
       if (bank.accounts[i].name === name){
         bank.accounts[i].balance += amount;
         console.log('Receipt\n Name: ' + bank.accounts[i].name + '\n Balance:' + bank.accounts[i].balance);
       };
      }
      return;
  },








  withdrawMoney: function(name,amount){ // withdraw money into an account
      for (var i = 0; i < bank.accounts.length; i++) {
           if (bank.accounts[i].name === name){
             if (bank.accounts[i].balance - amount > 0 ){
              bank.accounts[i].balance -= amount;
            } else {
              console.log('insufficient funds!')
             }
             console.log('Receipt\n Name: ' + bank.accounts[i].name + '\n Balance:' + bank.accounts[i].balance);
           };
    }
    return;
  },

  transferMoney: function(sender,amount,receiver){
    for (var i = 0; i < bank.accounts.length; i++) {
        if (bank.accounts[i].name === sender){
            bank.accounts[i].balance -= amount;
            var newSender = bank.accounts[i].name;

            for (var i = 0; i < bank.accounts.length; i++) {
              if (bank.accounts[i].name === receiver){
                 bank.accounts[i].balance += amount;
                 var receiver = bank.accounts[i].name;
              console.log('Receipt\n' + newSender + ' transferred ' + amount + ' to ' + receiver);


            } // last if




        } // second for
     } // firt if

  }
}, // function

  checkBalance: function(name){ // check someones balance
  for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].name === name){
          var newBalance = bank.accounts[i].balance;
          var newSender = bank.accounts[i].name;
          console.log('Receipt\n' + 'name:' + newSender + '\nBalance:' + newBalance);
        }
      }
    },




  accounts: [ // all of the banks accounts
    {
    name: "John",
    balance:100
    },
    {
    name: "Frank",
    balance:50
    },
  ]

}



bank.countMoney() // count all the money in the bank


bank.addAccount('Mark', 300); // add a new account


console.log(bank.accounts); // check all acounts

bank.depositMoney('Mark', 200);

bank.countMoney();

bank.withdrawMoney('Mark', 200);

bank.transferMoney('Mark',200,'John')

bank.checkBalance('Mark');







// var accounts = [
//  { name:john,
//   balance:100
//   },
//   { name:bob,
//    balance:100
//    },
// ]
