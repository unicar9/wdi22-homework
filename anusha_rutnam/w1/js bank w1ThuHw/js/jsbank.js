//luke's walk through bank
// bank{
//   - array of accounts
//   each account has:
//     - name
//     - balance
// addAccount():name
//     -takes name and creates new object in our accounts array
// deposit():name amount
// - find the acount with the specified name
// - add the specified balance to that account
// - return an error if the account does not exist
//

console.log('Welcome to the FAI Bank');
//out main bank object
var bank = {

  accounts: [
    {name:"Max", balance: 1000.00}
],

getAccount: function  (name){
  for (var i = 0; i < this.accounts.length; i++) {
    var currentAccount = this.accounts[i];
    if(currentAccount.name === name){
      return currentAccount;
    }
  }//for
  return false;
},

addAccount: function (name){
  var newAccount = {
    name = name,
    account = 0.00
  };

    this.accounts.push({name: name, balance: 0.00});
  console.log(this.accounts);

}//add account

};
bank.addAccount("edgy");

console.log('get account("max"):'bank.getAccount);

// 'type of str'//when put into console e.g "number" shown as a string
// }

// if somehting occurs enough, make it a function??




var bankAccounts = [
      {accountName: "John Smith",
        balance: 4,
      },

      {accountName: "Jane Doe",
        balance: 70000,
      },

      {accountName: "George Bush",
        balance: 2000,
      }
    ];

    // better format (and nest?):
    //
    // accounts: {
    //   "Max":100.00
    //   "edgey":0
    // },


    }

    // whole thing as one big object ('bank') bank.accounts as key with array as values

for (var i = 0; i < bankAccounts.length; i++) {
  var bankTry = bankAccounts[i];

  var accountName2 = bankTry.accountName;
  var balance2 = bankTry.balance;

console.log ("there is $" + balance2 + " in " + accountName2 + "'s account" );

}
//if blocks don't need; after }
var newAccount = function (x,y) {bankAccounts[bankAccounts.length] = {accountName: x, balance: y}}

newAccount("Sally", 12 );

var transfer = function (z) {
  if (z < bankAccounts.balance) {
    var newRich = (bankAccounts[2].balance = bankAccounts[2].balance+z)
    var newPoor = (bankAccounts[0].balance = bankAccounts[0].balance-z)}

  else if (z > bankAccounts[0].balance) {
  console.log("Screw You! Eat the Rich!");}
//
// }
//
// //pres 1
//
//
//
//
//
// // // occasions on which to use brackets: 1. console.log() 2. function();
// // // 1) can i minimise the repetitive keys using switch?
// // // 2) I couldn't work out how to run the transfer without putting specific object numbers in
// //
// //
// //
// // // JavaScript Bank
// // //
// // // In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
// // //
// // // Bank
// // //
// // // There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
// // //
// // // The bank has many accounts. Accounts should be objects that all share a set of common functionality.
// // //
// // // Accounts
// // //
// // // Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
// // //
// // // There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
// // //
// // // You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
// // //
// // // Tips
// // //
// // // Don't overthink this. Shorter code is probably the answer.
// // //
// // // Bonus
// // //
// // // Ensure that the accounts cannot have negative values.
// // // Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// //
// //
// // var rectangle = {
// //   length: 4,
// //   width: 5
// // };
// //
// // var recL = rectangle.length
// // var recW = rectangle.width
// //
// // var squareOrRec = function (length,width) {
// //   if (rectangle.length === rectangle.width) {console.log('square');}
// //
// //   else {console.log('rectangle');}
// //
// // };
// //
// // var area = function (recL,recW) {
// //   return ("The area is " + recL*recW);}
// //
// // var perim = function (recL,recW) {
// //   return ("The perimeter is " + (recL+recW)*2);}
// //
// //
// //
// // // squareOrRec(recL,recW)
// //
// // // Geometry Function Lab
// // //
// // // Part 1, Rectangle
// // //
// // // Given the following a rectangle object like the one below, write the following functions:
// // //
// // // isSquare - Returns whether the rectangle is a square or not
// // // area - Returns the area of the rectangle
// // // perimeter - Returns the perimeter of the rectangle
// // // var rectangle = {
// // //   length: 4,
// // //   width: 4
// // // };
// //
// //
// //
// //
// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

// // var perim = function (recL,recW) {
// //   return ("The perimeter is " + (recL+recW)*2);}

// var isEquilateral = function (sideA,sideB,sideC) {
//   if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {console.log('eqo');}
//

  //
  //
  // var DogFactory = function (name, breed) {
  //     var dog = {};
  //
  //     dog.name = name;
  //     dog.breed = breed;
  //
  //     return dog;
  // };
  //
  // var tamaskan = DogFactory("Tammy", "Tamaskan");
  // var buddy = DogFactory("Buddy", "Labrador");

  // what in console

  //
  // Inheritance with Factories
  // var AnimalFactory = function (name) {
  //     var animal = {};
  //     animal.alive = true;
  //     return animal;
  // }
  //
  // var DogFactory = function (name, breed) {
  //     var dog = AnimalFactory( name );
  //
  //     dog.name = name;
  //     dog.breed = breed;
  //
  //     return dog;
  // };
  //
  // var tamaskan = DogFactory("Tammy", "Tamaskan");
// //
// // //   var isIsosceles = function (sideA,sideB,sideC) {
// // //     if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || ) {console.log('iso');}
// // //
// // // }
// //
// //
// // //gave up on iso, above
// // // Part 2, Triangle
// //
// //
// // // Given the following a triangle object like the one below, write the following functions:
// // //
// // // isEquilateral - Returns whether the triangle is equilateral or not
// // isIsosceles - Returns whether the triangle is isosceles or not
// // area - Returns the area of the Triangle
// // isObtuse - Returns whether the triangle is obtuse or not
// // var triangle = {
// //   sideA: 3,
// //   sideB: 4,
// //   sideC: 4
// // };
// // Raw
var triangle = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};


var isEquilateral = function (sideA,sideB,sideC) {
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC)
    console.log('eqo');
};

//factory
var TriangleFactory = function (a,b,c) {
  var tri = {};
  tri.sideA = a;
  tri.sideB = b;
  tri.sideC = c;
return tri;
// what do i use this return for
};



// // constructor
// var Triangle = function (a, b, c) {
//   this.sideA = a;
//   this.sideB = b;
//   this.sideC = c;
// }
//
// var factoryTriangle = TriangleFactory(5,5,5);
