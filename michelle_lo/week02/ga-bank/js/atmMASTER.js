// $(document).ready(function () {
  var bank = {
    account: {checkingAccount: 20,
                  savingsAccount: 100
                }, // keep track of acc balance

    deposit: function(dollarDeposit, accountType){
      var newBalance;
      bank.account[accountType] += dollarDeposit;
      newBalance = bank.account[accountType]
      console.log("I'm in " + accountType + " it has " + newBalance)
      return newBalance;
    },//close deposit function

    withdraw: function(dollarWithdraw, accountType){
      var newBalance;
      var totalBalance = bank.account.checkingAccount + bank.account.savingsAccount;
      //if you try to WD more than you have in current account
      if (dollarWithdraw > bank.account[accountType]){
        //if you try to WD more than you have in total (savings and checking) -> NO
        if (dollarWithdraw <= totalBalance) {
          // if you have enough in total, withdraw max from current account, and take rest from other account.
          var runningBalanceOfWD; //creating a working withdrawal amount, which we can deduct from
          runningBalanceOfWD = dollarWithdraw; // start with running bal = total to WD

          runningBalanceOfWD -= bank.account[accountType];         //reduce runningBalance of current account
          bank.account[accountType] = 0; // make current account = 0;
          console.log(accountType + "'s balance is: " + bank.account[accountType] + ". The running Balance of WD is: " + runningBalanceOfWD )
          //to take rest of money from other account
          if (accountType === "checkingAccount") {
            bank.account.savingsAccount -= runningBalanceOfWD; // ie take savings
            newBalance = bank.account.savingsAccount;
            console.log("I tried to WD from" + accountType + " but it ran out of money, so i'm WD the remainder, which is " + runningBalanceOfWD + " from Savings. The new balance of Savings is" + newBalance);
            return newBalance;
          } else { //ie where you dont have sufficient funds in savings account
            bank.account.checkingAccount -= runningBalanceOfWD; // ie take savings
            newBalance = bank.account.checkingAccount;
            console.log("I tried to WD from" + accountType + " but it ran out of money, so i'm WD the remainder, which is " + runningBalanceOfWD + " from Checking. The new balance of Checking Account is" + newBalance);
            return newBalance;

          }
        } else {
          console.log ('what are you doing??')
          }// else statement
      } else {//if statement re WD more than currentBalance
      bank.account[accountType] -= dollarWithdraw;
      newBalance = bank.account[accountType]
      console.log("I'm in " + accountType + " it has " + newBalance)
      return newBalance;
    }//close else (if you can WD from account as requested (ie there is sufficient money) )
    } // close withdraw function

  }//closing object
  // bank.withdraw(110,"savingsAccount")
  //
  // var colorChange = function() {
  //   if (bank.account.savingsAccount === 0) {
  //     var box = $('#savings-balance');
  //     box.css('backgroundColor', 'red')
  //   }
  // }
  //GUI
  // to change color...NOT WORKING
  // if (bank.account.savingsAccount === 0) {
  //   var box = $('#savings-balance');
  //   box.css('backgroundColor', 'red')
  // }
  // // ( box.css('backgroundColor', 'red')

  // to change balance on screen
  // var screenBalance = $('#savings-balance');

  // }); //end of .ready
