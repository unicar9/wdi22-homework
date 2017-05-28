// var age = 30;
// var maxAge = 100;
// var snack = 2;
//
// console.log('You will need ' + (((maxAge-age)*snack)*365.25) + ' to last you until the ripe old age of ' + maxAge );

// Write a function named calculateSupply that:
//
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var calculateSupply =  function( age, snackAmount ){
  var maxAge = 100;
  var yearsLeft = maxAge - age;
  var yearsNeeded = yearsLeft * snackAmount * 365.25;
  console.log('You will need ' + yearsNeeded + ' snacks to last you until the ripe old age of ' + maxAge );
};

calculateSupply( 30, 2 );
calculateSupply( 33, 1 );
calculateSupply( 44, 100 );
