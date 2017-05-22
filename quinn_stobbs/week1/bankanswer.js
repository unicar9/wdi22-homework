// JavaScript Bank
//
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts

console.log("Welcome to teh FAI Bank");

var bank = {

  accounts: [
    {name: "Max", balance: 1000.00}

  ]

  getAccount: function ( name ){
      for (var i = 0; i < this.accounts.length; i++) {
          var currentAccount = this.accounts[i];
          if (currentAccount.name === name){
            return currentAccount;
          }
      }// for : if we have got to the end of the for loop we are at the end of the function
      return false;
  }


  addAccoun: function ( name ){
    var newAccount = {
      name: name;
      balance: 0.00;
    };

    //push the account into the
    this.account.push ( newAccount );

    // or this.accounts.push ( {name: name, balance: 0.00})

    console.log ( "New value of all the accounts " + this.accounts );

    };

    // deposit

    deposit: function ( name, amount ){

      var account = this.getAccount ( name );

      // test for error case: account not found
      if( account === false || typeof amount !== "number" ){
        return false;
      }

      account.balance += amount;

      return account;

    },

    withdraw: function ( name, ){

      var account = this.getAccount ( name );
      // test for error case: account not found
      if( account === false || typeof amount !== "number" ){
        return false;
      }

      if ( (account.balance - amount) < 0 ){
        // console.log("Insufficient funds");
          return { error: "Insufficient funds"};
      }

    account.balance -= amount;

      return account;

    }




  };

bank.addAccount ( "Edgy Lord" );

console.log( 'getAccount:("Max")', bank.getAccount("Max"));
console.log( 'getAccount:("aasdfs")', bank.getAccount("asdfadsa")'');

console.log( "Add $10.00 to Edgedawg and his broke ass", bank.deposit ("Edgedawg", 100.00));


// ? The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
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


var arr = [
    { name: "Edgy", eyes: "mustard", height: false},
    { title: "JS love", cost: 5.00, inStock: false},
    { first: 12, second: "cavoodle", third: [1,12,15]}
];

var value = function (){
  for (var i = 0; i < arr.length; i++) {
    array[i];
  }

  console.log( );

};
