console.log ('welcome');

// out main bank object
var bank = {
  accounts: [
    {name: "Max", balance: 1000}
  ],
  //to find account
  getAccount: function(name) {
    for (var i = 0; i < this.accounts.length; i++) {
      var currentAccount = this.accounts[i];
      if (currentAccount.name === name) {
        return currentAccount;

      }//if
    }//for
    return false; //only get to this line if the above for loop returns nothing ie no account is found. if account is found (if = true) then it will return (and stop)
  },
  //create Add account. only argument it takes is name
  addAccount: function(name) {
    //   var newAccount = {
    //   name: name,
    //   balance: 0.00
    // };
    //
    // this.accounts.push(newAccount); //inside a method inside bank, therefore 'this' refers to the method we're inside (i.e 'this' = bank)

    this.accounts.push ( {name:name, balance:0} ); // wording commented out can be called as above instead of this current line
    console.log( 'new value of accounts: ', this.accounts);

  }, //addAccount

  //deposits
  deposit: function (name, amount){
    var account = this.getAccount( name );
    if( account === false || (typeof amount) !== "number" ) { // ie if no account is returned once checked by getAccount, a false value will be returned. if the result of getAccount === false, then the following code will run. second part of 'OR' is to ensure deposit is a number a
      return false;
    }
    account.balance += amount;

    return account; //name and balance
  }

  //withdraw
  withdraw: function (name, amount) {
    var account = this.getAccount( name );
    if( account === false || (typeof amount) !== "number" ) {
      return false;
    }

    if ((account.balance - amount) <= 0){
      return { error: "insufficient funds"};
    }

    account.balance -= amount;
    return account;



  } //withdraw close bracket
};

bank.addAccount("Edgy Lord");

//lots of console logging so we are checking we're returning what we think we're meant to
console.log('getAccount("Max"):', bank.getAccount("Max"));
console.log('getAccount("gfgfdgdg"):', bank.getAccount("gfgfdgdg"));

console. log ('Add $xx',
              bank.deposit('Edgy Lord', 100) );
