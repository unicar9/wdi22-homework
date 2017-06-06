// The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.
//
// Create your range, starting at two and ending at the given limit.
//
// The algorithm consists of repeating the following over and over:
//
// take the next available unmarked number in your list (it is prime)
// remove all the multiples of that number (they are not prime)
// Repeat until you don't have any possible primes left in your range.
//
// When the algorithm terminates, all the numbers in the list that have not been removed are prime.
//


var sieve = {

  numbers: [],
  counter: 0,

  calculatePrimes: function(max){

    this.counter = 0; //reset each time we call calculatePrimes

    //initialise all numbers in the rnag to TRUE for prime
    for (var i = 0; i < max; i++) {
      this.numbers[i] = true;
      }

    //iterate through all the numbers in our range
    for (var i = 2; i < this.numbers.length; i++) {
      var currentNumber = i;  //helps with readability
      for (var j = currentNumber + 1; j < this.numbers.length; j++) {
        //if we havent already proccessed this number AND  it is divisble by current number.
        if ( (this.numbers[j] === true) && (j % currentNumber === 0) ){
        //then that means it is NOT prime
        this.numbers[j] = false;

        }//if
      this.counter++
      }//for
    }//outer for
    console.log(this.numbers);
    this.printPrimes( this.numbers);
  },

  printPrimes: function(primes) {
    //output our results in an array
    // can join array as well to make a long starting
    var primesList = [];
    for (var i = 1; i < primes.length; i++) {

      if(primes[i] === true){
        primesList.push(i)

      }
    }
    console.log("Primes found : " + primesList.length);
    console.log("Primes : ",  primesList.join(', ') );
  }
}

sieve.calculatePrimes(100);
