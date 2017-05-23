console.log('Welcome to the FAI Bank');

// our main bank objects
var bank = {
  accounts: [
    {name: "Max", balance: 1000 }
  ],

  addAccount:function( name ){
    var newAccount = {
    name: name,
    balance: 0.00
  };

  this.accounts.push( newAccount );
  console.log( this.accounts );

  } //addAccount

};

bank.addAccount( "Edgy" )
