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


var jsBank =  //jsBank is the bank, an object
{
  accounts: [
      { name: 'Afei', balance: 200 },
      { name: 'Bailuo', balance: 400 },
      { name: 'Caipi', balance: 5000 },
      { name: 'Dulu', balance: 10 },
  ], // key

  totalSum: function(){
      var totalBalance = 0;
      for (var i = 0; i < this.accounts.length; i++) {
        totalBalance += this.accounts[i].balance;
      } // for
      return totalBalance;
  }, // key

  addAcct: function(acctName, startBalance) {
      var newAcct = { name:acctName, balance: startBalance }
      this.accounts.push(newAcct);
      console.log("New account added. Name: " + newAcct.name + ", Balance：$" + newAcct.balance);
  }, // key

  deposit: function(acctName, amount) {
      for (var i = 0; i < this.accounts.length; i++) {
        if(acctName === this.accounts[i].name){
          this.accounts[i].balance += amount;
          console.log( "Deposit made. Name: " + acctName + ", Amount: $" + amount + ", Balance: $" + this.accounts[i].balance );
        }
      } // for
  }, //key

  withdraw: function(acctName, amount) {
      for (var i = 0; i < this.accounts.length; i++) {
        if( acctName === this.accounts[i].name){
          if ( this.accounts[i].balance - amount >= 0 ) {
            this.accounts[i].balance -= amount;
            console.log( "withdrawal made. Name: " + acctName + ", Amount: $" + amount + ", Balance: $" + this.accounts[i].balance );
          } else {
            console.log("withdrawal from " + acctName + " failed. Not enough money");
          } //else
        } // if find the account
      } //for
  } // key

} //close jsBank


// call and log results;
console.log("The total amount in JS BANK is $" + jsBank.totalSum());
jsBank.addAcct("Emeng", 100);
jsBank.deposit("Emeng", 10000);
jsBank.withdraw("Caipi", 5000);
jsBank.withdraw("Bailuo", 500);
