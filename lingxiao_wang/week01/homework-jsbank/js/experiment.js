
// a function to find the account with name

var getAccount = function(name, obj){

  for (var i = 0; i < obj.accounts.length; i++) {
    if ( name === obj.accounts[i] ) {
      
    }
  }


};


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
  }, // key

  transfer: function(acctName, amount){


  } // end of key

} //close jsBank



// call and log results;
console.log("The total amount in JS BANK is $" + jsBank.totalSum());
jsBank.addAcct("Emeng", 100);
jsBank.deposit("Emeng", 10000);
jsBank.withdraw("Caipi", 5000);
jsBank.withdraw("Bailuo", 500);
