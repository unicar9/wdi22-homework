// JavaScript Bank
//
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you
//  need to write.
//
// Bank
//
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the
//  accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts.
//   There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log()
//  values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected:
// add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
//
// Don't overthink this. Shorter code is probably the answer.
// Bonus
//
//     Ensure that the accounts cannot have negative values.
//     Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//

//------------------------------

var app = {};                           //use a namespace
app.BANK_NAME = "WESTPAC";              //constant name


/**
  * Author: John Politis
  * Date :   18/05/2017
  * Description : Define our account object (Constructor) type
  */
app.Account = function (accountNo , accountName , balance ) {
  this.accountNo = accountNo;
  this.name      = accountName;
  this.balance   = balance;
};

/**
  * Author: John Politis
  * Date :   18/05/2017
  * Description: just accumulate the funds, assume there is something there
  */
app.Account.prototype.deposit = function(amount){
  this.balance += amount;
}
/**
  * Author: John Politis
  * Date :   18/05/2017
  * Description: checks if funds are available prior withdrawing
  */
app.Account.prototype.withdraw = function(amount , cb ){

  if (this.balance === 0 || this.balance < amount ) {
    cb.error("Insufficient funds - Withdraw cannot be completed for account " + this.accountNo);
    return;
  }

  this.balance -= amount;

}

/**
* Author: John Politis
* Date :   18/05/2017
* Description:
*/
app.Account.prototype.getBalance = function(){
    return this.balance;
}

/**
  * Author: John Politis
  * Date :   18/05/2017
  * Description : Define our app object
  */
app.bank = {

  name: app.BANK_NAME ,
  accounts: [],                     //data structure for all the Accounts

  /**
    * Author: John Politis
    * Date :   18/05/2017
    * initializes the Bank with some dummy accounts
  */
  init: function() {

      for (var i = 0; i < 25; i++) {
        app.bank.createAccount("acc-00"+ i , "John Politis" , 1000 );
      }
  },
  /**
    * Author: John Politis
    * Date :   18/05/2017
    * Description: method to add create an account
    */
  createAccount: function(accountNo , accountName , balance ) {
      app.bank.accounts.push( new app.Account(accountNo, accountName , balance ) );
  },
  /**
    * Author: John Politis
    * Date :   18/05/2017
    * Description: method to add create an account
    */
  totalAmount: function() {
    var amt = 0;

    for ( account in app.bank.accounts) {
        amt += app.bank.accounts[account].balance;
    }

    return amt;
  },
  /**
    * Author: John Politis
    * Date :   18/05/2017
    * Description: locate the account
    */
  getCustomersAccount: function(accountNo) {

      if ( this.accounts.length > 0 ) {
          for (var i = 0; i < this.accounts.length ; i++) {
              if (this.accounts[i].accountNo === accountNo)  return this.accounts[i];
          }
      }

      return null;
  },
  /**
    * Author: John Politis
    * Date :   18/05/2017
    * Description: show all the accounts
    */
    displayAllAccounts : function() {
      for ( idx in app.bank.accounts) {
        console.log(app.bank.accounts[idx].accountNo + "        $" + app.bank.accounts[idx].balance );
      }
    },
  /**
    * Author: John Politis
    * Date :   18/05/2017
    * Description: locate the account
    */
  getCustomerCount : function() {
      return this.accounts.length;
  },
  /**
    * Author: John Politis
    * Date :   18/05/2017
    * Description: transfer funds
    */
  transfer : function(fromAcc, toAcc , amt , cb ) {

      fromCustomerAccount = this.getCustomersAccount(fromAcc);
      toCustomerAccount = this.getCustomersAccount(toAcc);

      if (fromCustomerAccount !== null && toCustomerAccount !== null && fromCustomerAccount.accountNo !== toCustomerAccount.accountNo ) {
          fromCustomerAccount.withdraw( amt , { error: function(m){  console.log(m); } } );

          toCustomerAccount.deposit(amt);
          cb.success("Transfered Success");
      }
      else {
        cb.error("Transfered Failed");
      }
  }
};



var testAccount = { accountId : "acc-001" , amount : 500 };
var testAccount2 = { accountId : "acc-002" , amount : 500 };


/**
  * Author: John Politis
  * Date :   18/05/2017
  * Description : Entry point
  */
app.bank.init();

console.log("--------------" + app.bank.name + " Bank --------------");
console.log("Bank Currently Holds     $" + app.bank.totalAmount() );
console.log("Bank accounts : " +  app.bank.getCustomerCount() );
console.log('');
console.log('');


console.log("Balance => for Account ( "+ testAccount.accountId + " )                  $" + app.bank.getCustomersAccount(testAccount.accountId).getBalance());
console.log("Balance => for Account2 ( "+ testAccount2.accountId + " )                  $" + app.bank.getCustomersAccount(testAccount2.accountId).getBalance());
console.log('');
console.log('');


console.log("Transaction => withdraw from ( " + testAccount.accountId + " )" + "      $" + testAccount.amount );
app.bank.getCustomersAccount(testAccount.accountId).withdraw(testAccount.amount,{ error: function(e){
  console.log(e);
}});

console.log("Balance => for Account ( " + testAccount.accountId + ")                  $" + app.bank.getCustomersAccount(testAccount.accountId).getBalance());

console.log('');
console.log('');
console.log("Bank Currently Holds     $" + app.bank.totalAmount() );
console.log('');
console.log('');


console.log("Transfering => Funds from ( " + testAccount.accountId + " )  To ( " + testAccount2.accountId + " )   amount $" + testAccount.amount );
app.bank.transfer(testAccount.accountId , testAccount2.accountId , testAccount.amount ,{ success: function(m) { console.log(m); },
                                                                                          error: function(e) { console.log(e); }
                                                                                      }
  );

console.log('');
console.log("Balance => for Account ( "+ testAccount.accountId + " )                  $" + app.bank.getCustomersAccount(testAccount.accountId).getBalance());
console.log("Balance => for Account ( "+ testAccount2.accountId + " )                  $" + app.bank.getCustomersAccount(testAccount2.accountId).getBalance());

app.bank.getCustomersAccount('acc-004').withdraw(testAccount.amount + 10000 ,{ error: function(e){
    console.log('');
    console.log(e);
}});


console.log('');
console.log('');
console.log("Bank Currently Holds     $" + app.bank.totalAmount() );
console.log('');

console.log('---------Dumping all accounts --------------');
app.bank.displayAllAccounts();
console.log('-----------------------');
