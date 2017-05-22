// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// for (var i = 0; i<11; i++){
//   var timesNine = i*9;
//   console.log(i + " * 9 = " + timesNine);
// }


for (var i = 0; i<=10; i++){
  for (var x =1; x<=10; x++){
    var times = i*x;
    console.log(i + " * " + x + " = " + times);
  }


  // var timesNine = i*9;
  // console.log(i + " * 9 = " + timesNine);
}
