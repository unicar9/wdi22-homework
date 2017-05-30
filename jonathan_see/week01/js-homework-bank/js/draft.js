
var bank = [
  {name: "Adam", account: 100},
  {name: "Bill", account: 120},
  {name: "Carl", account: 150}
]

var totalAccount = function (act) {
  var sum = 0;
  for (var key in act) {
    sum += act.account[i];
  };
  return sum;
}

console.log(totalAccount(bank));

// To add account

// var addAccount = function (holder, acct) {
//   var newAccount = {name: holder, account: act};
//   bank.account.push(newAccount);
// }
//
// console.log(totalAccount("Desmond", 200));
