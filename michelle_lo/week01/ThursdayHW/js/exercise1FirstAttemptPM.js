//to re do post demo

//hw demo notes: MAKE FUNCTION CALLED GET ACCOUNT - takes name and does loop, and returns index of account in that array. re use GET ACCOUNT for check, deposit, withdrawal etc

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
var bankDetails = [
  {currentBalance: 100,
  name: "bob"},
  {currentBalance: 200,
  name: "gary"},
  {currentBalance: 200,
  name: "craig"},
  {currentBalance: 500,
  name: "elmo"}
]

// The following code was trying to print all information - does not work:
// var totalAccounts = bankDetails.length
// var detailsAll = function() {
// for (var i = 0; i < totalAccounts; i++) {
//   var bankDetails = bankDetails[i];
//   console.log(bankDetails.name + "'s account balance is $" + bankDetails.currentBalance);
// };}
//
// detailsAll()

//to print all bankDetails:
for (var k in bankDetails) {
console.log(bankDetails[k])}


//code from http://stackoverflow.com/questions/27879827/sum-of-object-properties-within-an-array
// var totalAmount = function(bankDetails) {
//   var Amount = 0;
//   for (var i = 0; i <bankDetails.length;i++) {
//     Amount += bankDetails[i].Amount;
//   }
// console.log(totalAmount(bankDetails))
// }
//
// totalAmount();

//TO ADD ACCOUNT (THIS WORKS)
var addAccounts = function (newBalance, newName) {
  bankDetails.push ({currentBalance: newBalance, name: newName}); {
    console.log(newName + "'s account is open. Its balance is $" + newBalance)
  };
};
addAccounts(100, 'Michelle');

//DEPOSIT - this only works if you have the index of the account. should run a loop/key? against data to check against name.
var deposit = function(i, addMoney) {
  bankDetails[i].currentBalance += addMoney;
  {console.log(bankDetails[i].name + " deposited $" + addMoney);}
}
deposit(1,30)
//
// var deposit ;
// var changeAmount = function(amount) {
//   if (deposit) {
//     bankDetails.i.currentBalance += deposit
//   }
//   else {
//     bankDetails.i.currentBalance -= withdraw
//   }
// }
//
// // Accounts
// //
// // Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
// //
// // There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
// //
// // You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
// //
// // Tips
// //
// // Don't overthink this. Shorter code is probably the answer.
// //
// // Bonus
// //
// // Ensure that the accounts cannot have negative values.
// // Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
//
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
