//OLD DRAFT with if/elseif/else
var bank = {
  account: {checkingAccount: 20,
                savingsAccount: 100
              }, // keep track of acc balance

  deposit: // update this to run against keys?? i tried making this a for loop with checking/savings as the trigger for different 'this. accounttype' objects, but it didnt work

    function(dollarDeposit, accountType){
      if (accountType === "checkingAccount") {
        var checkingBalance = this.accountType.checkingBalance;
        checkingBalance = dollarDeposit + checkingBalance;
        console.log("this is working! The new balance is: " + checkingBalance)
      }
      else if (accountType === "savingsAccount") {
        var savingsBalance = this.accountType.savingsAccount;
        savingsBalance = dollarDeposit + savingsBalance;
        console.log("this is working! The new savings balance is: " + savingsBalance)
      } else {
        console.log ('what are you trying to do?')
      }
    }, // close deposit function

  withdraw:
    //
    // function(dollarWithdraw, accountType){
    //   var account = this.checkingBalance[accountType];
    //   // this.checkingBalance = this.checkingBalance - dollarWithdraw;
    //   console.log(account)

    function(dollarWithdraw, accountType){
      var newBalance;
      bank.account[accountType] -= dollarWithdraw;
      newBalance = bank.account[accountType]
      console.log("I'm in " + accountType + " it has " + newBalance)
      return newBalance;
      }

      //
      // var planTrip = function(startLine, startStation, destLine, destStation) {
      //   if (startLine === destLine){
      //     var startStationsVar = metroLines[ startLine ];
      //       // console.log("TEST A " + startStationsVar + " this is test of var stations = metroLines[ startLine ]");

     // close withdraw function

}


//
// }//closing bank object


// var checkBalance = 0.0
// var checkingFunction = function(amountDeposited) {
// 	return (checkBalance+amountDeposited)}
//
//
  var checkBalance = 0.0
  var deposit = function(dollarDeposit){
   checkBalance = dollarDeposit + checkBalance
  }
