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
// Do this in Javascript!
// Sign up for free
//


var Sieve = {
    numbers = [];
    counter = 0;
    calculatePrimes: function(max) {
      this.counter = 0; // reset each tim we call calculatePrimes
      //initialise all numbers in the range to TRUE for prime iniliase array
      for (var i = 0; i < max; i++) { // build array of true only in this loop
        this.numbers[i] = true;
      }
      // iterate through all the numbers in our range

      for (var i = 2; i < this.numbers.length; i++) { // use the index only to work with
        var currentNumber = i; // helps with radability
        for (var j = currentNumber + 1; j < this.numbers.length; j++) {// make it without +1 and -1
          // if we havent already processed this numbr and it is divisible by current number
          if ((this.numbers[j] === true) && (j % currentNumber === 0)) {
            // then that means it is Not prime
            this.numbers[j] = false;

          } // if
          this.counter++;
        } // for
      } // outer for
      console.log(this.numbers);
      this.printPrimes(this.numbers);

    },
    printPrimes: function (primes){
      // output our results in an array
      // can join array as well to make a long starting
      var primeList=[];
      for (var i = 1; i < primes.length; i++) {
        if (prime === true){
          primeList.push(i)
        }

      }
      console.log("Prime found:"+primeList.length)
      console.log("Prime :",primeList.joim(', '));// join with comma and space
    }

};

    // prime has two number  factors and it slf
