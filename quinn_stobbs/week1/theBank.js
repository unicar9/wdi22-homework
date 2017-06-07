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
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

//THE BANK


// This should go at the end

// want to make all the functions first to then call back at the end


// var bank = [
//     account:
//         { accountName: "John Snow",
//         accountBalance: 10,
//         },
//         {
//         accountName: "Tyrion Lannister",
//         accountBalance: 1000,
//         }
//   }
// ]

// var bank = [];



//
// //pulling all account balances
// var result = _.map(Bank, _.property("account1.accountBalance"));
//

// callback is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

//
//
// ADD NEW ACCOUNT using constructor function
//
// var newAccount = new Account ("The hand", 100, "301")
//
// console.log(bank);



//Old adding in code
// for(var i = 1; i <= 3; i++) {
//     myArray[i] = accountBalance (2000 + i, 1, 1);
// }
//
// myArray.forEach(function (item) {
//     document.write(item.getFullYear());
// });
//

//
// Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

// PRESENTATIONS

// you have to make sure to loop through


//Practise

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// var library = [
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games',
//        readingStatus: false
//    }];
//
// for (var i = 0; i < library.length; i++) {
//   var book = " " + library[i].title + " " + library[i].author + " ";
//
//     if (library[i].readingStatus) {
//       console.log("Already read" + book);
//     } else {
//       console.log("You still need to read" + book);
//     }
// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
