


// 
// var accounts1 =
// {
//   accountName: 'James',
//   accountType:['Cheque', 'Savings', 'Credit'],
//   account amount:[10000.34, 10340.1, 23.6]
// },
// {
//   accountName: 'Miss Piggy'
//   accountType:['Cheque', 'Savings', 'Credit'],
//   account amount:[324.3, 23566.2, 24.12]
// };

//
var whichAccount = function() {
// function chooses which account to be used. Cheque/Savings/Credit. call transChoice to ensure no errors.
}

var stringToText = function () {
  moneyAmount = prompt();
  moneyAmount = parseFloat(moneyAmount);
  return moneyAmount
}

var transChoice = function() {
  var inputChoice = prompt();
  inputChoice = transChoice.toUpperCase()
}

var addAccount = function(){

}

var makeTransaction = function () {
  alert('Hello. Welcome to the Bank of James. Give us your money. Please type either DEPOSIT or WITHDRAWAL')

  transChoice();

    switch (transChoice) {
     case 'DEPOSIT':
      alert('which account would you like to deposit into?')
      whichAccount();
      alert('How much would you like to deposit?')

      console.log('no.1');
    // prompt to ask their account eg Cheque, Savings, Credit to define which account to withdraw/deposit
    // prompt amount and calculate against balance
      break;
    case 'WITHDRAWAL':
      alert('which account would you like to deposit into?')
      whichAccount();
      alert('How much would you like to withdraw?')

    console.log('even better');
    // prompt to ask their account eg Cheque, Savings, Credit to define which account to withdraw/deposit
    // prompt amount and calculate against balance
      break;
    default:
      alert('Not a valid choice')
      makeTransaction();
  }
}
makeTransaction();
// stringToText();

// There is only one bank. This bank has an array of accounts.
// The bank needs a method that will return the total sum of money in the accounts.
// It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts.

// Accounts have a current balance and owner's name.
// You should be able to deposit or withdraw from an account to change the balance.
//
//
////////// //You should write a basic story through a series of JavaScript commands
////////// //that shows that the methods do indeed work as expected: add some accounts, show the total balance,
////////// //make some deposits and withdrawals, show the new total balance.

//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
//
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
