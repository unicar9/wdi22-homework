

$(document).ready(function () {
  var bank = {
    account: {checkingAccount: 0,
              savingsAccount: 0
              }, // keep track of acc balance

    deposit: function(dollarDeposit, accountType){
      var newBalance;
      // debugger;
      bank.account[accountType] += dollarDeposit;
      newBalance = bank.account[accountType]
      console.log("I'm in " + accountType + " it has " + newBalance)
      return newBalance;
    },//close deposit function

    withdraw: function(dollarWithdraw, accountType){
      // debugger;
      var totalBalance = bank.account.checkingAccount + bank.account.savingsAccount;
      //if you try to WD more than you have in current account
      if (dollarWithdraw > bank.account[accountType]){
        //if you try to WD more than you have in total (savings and checking) -> NO
        if (dollarWithdraw <= totalBalance) {
          // if you have enough in total, withdraw max from current account, and take rest from other account.
          var runningBalanceOfWD = 0; //creating a working withdrawal amount, which we can deduct from
          runningBalanceOfWD = dollarWithdraw; // start with running bal = total to WD

          runningBalanceOfWD -= bank.account[accountType];         //reduce runningBalance of current account
          bank.account[accountType] = 0; // make current account = 0;
          console.log(accountType + "'s balance is: " +
          bank.account[accountType] + ". The running Balance of WD is: " + runningBalanceOfWD )
          //to take rest of money from other account
          if (accountType === "checkingAccount") {
            bank.account.savingsAccount -= runningBalanceOfWD; // ie take savings
            newBalance = bank.account.savingsAccount;
            console.log("I tried to WD from" + accountType + " but it ran out of money, so i'm WD the remainder, which is " + runningBalanceOfWD + " from Savings. The new balance of Savings is" + newBalance);
            console.log ('line 38 newBalance = '+ newBalance)
            return newBalance;
          } else { //ie where you dont have sufficient funds in savings account
            bank.account.checkingAccount -= runningBalanceOfWD; // ie take savings
            newBalance = bank.account.checkingAccount;
            console.log("I tried to WD from" + accountType + " but it ran out of money, so i'm WD the remainder, which is " + runningBalanceOfWD + " from Checking. The new balance of Checking Account is" + newBalance);
            console.log ('line 44 newBalance = '+ newBalance)
            // debugger;
            return newBalance;
          }
        } else {
          console.log ('what are you doing??')
          newBalance = bank.account[accountType];
          console.log( bank.account[accountType]);
          return newBalance;
          }// else statement
      } else {//if statement re WD more than currentBalance
      var newBalance;
      bank.account[accountType] -= dollarWithdraw;
      newBalance = bank.account[accountType];
      // debugger;
      console.log("I'm in " + accountType + " it has " + newBalance);
      return newBalance;
      }//close else (if you can WD from account as requested (ie there is sufficient money) )
    } // close withdraw function

  }//closing object


// GUI

// //colorChange
//   var colorChange = function(accountType) {
//     if (bank.withdraw === 0){
//       if (accountType = "savingsAccount") {
//         var box = $('#savings-balance');
//         box.css('backgroundColor', 'red')
//       } else {
//           var box = $('#checking-balance');
//           box.css('backgroundColor', 'red')
//       }
//     } // closing if 0 bal
//   }//closing colorChange functions
//   // var savingsBalance = $('#savings-balance')
//   // screenBalance[0].innerHTML

//theoretically, this will be triggered by clicking 'withdraw'

// GUI
  var withdrawAmount = function(dollarWithdraw, accountType) {
    bank.withdraw(dollarWithdraw, accountType);
    // if (accountType === "savingsAccount" ) {
      $('#savings-balance')[0].innerHTML = bank.account.savingsAccount;
      console.log('this is the current savings amount after the WD' + bank.account.savingsAccount);
    // } else if (accountType === "checkingAccount"){
    $('#checking-balance')[0].innerHTML = bank.account.checkingAccount;
    //colour check
    if (bank.account.savingsAccount === 0) {
      var $boxS = $('#savings-balance');
      $boxS.css('backgroundColor', 'red')
    }
     else if (bank.account.checkingAccount === 0) {
      var $boxC = $('#checking-balance');
      $boxC.css('backgroundColor', 'red')
    }

    };

  //theoretically, this will be triggered by clicking 'deposit'

var depositAmount = function(dollarDeposit, accountType) {
  bank.deposit(dollarDeposit, accountType);
  // if (accountType === "savingsAccount" ) {
  //   console.log(bank.account.savingsAccount)
    $('#savings-balance')[0].innerHTML = bank.account.savingsAccount;
  // } else if (accountType === "checkingAccount"){
    console.log(bank.account.checkingAccount);
  $ ('#checking-balance')[0].innerHTML = bank.account.checkingAccount;;
//   } else {
//       console.log('wrong function');
//   }
};


    // else if (transactionType === "withdraw" && accountType === "checkingAccount");
    //   {$('#savings-balance')[0].innerHTML = bank.deposit(dollarWithdraw, accountType);
    //   }


    // var boxInput = bank.withdraw()
    // savingsBalance[0].innerHTML = boxInput ;
    // var boxInput = bank.withdraw();
  // }
  //
  // var boxInput = bank.withdraw();
  // console.log(boxInput);
//functions being called to test

  depositAmount(34, "checkingAccount");
depositAmount(111, "savingsAccount");
  withdrawAmount(112, "checkingAccount");
  withdrawAmount(112, "checkingAccount");
//
  // depositAmount(444, "checkingAccount");
//
// bank.withdraw(10,"savingsAccount");
// colorChange();
//
// bank.withdraw(10,"checkingAccount");
// colorChange();

// updateAmount();
// // colorChange();
// bank.withdraw(10,"savingsAccount");
//
//   // bank.withdraw(110,"savingsAccount");
//     // updateAmount();
//     // colorChange();
//
//     bank.withdraw(10,"checkingAccount");
//       colorChange();
//       // updateAmount();


  // to change balance on screen
  // var screenBalance = $('#savings-balance');
  //
  }); //end of .ready
