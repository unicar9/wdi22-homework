// Badger's Revenge
//
// Fed up with students clapping him after every warmup, Badger devises a cunning plan to put an end to it - or at least look like he's putting an end to it. You see, Badger secretly enjoys the adulation - mocking though it may be - so he doesn't want the clapping to stop altogether.
//
// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.
//
// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.
//
// Your program should:
//
// Track how many times each student in the class has clapped this week (just make up the numbers);
// Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// Pick a random student to deliver the solution to Friday's warmup.
// If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.

console.log("Bager's coming for you");

var bagersrevenge = {

  clappedTimes: {

    Dama: 4,
    Douban: 6,
    Zhihu: 3,
    Xiami: 2,
    Fage: 1,
    Weixin: 0,
    Baishua: 4

  }, // key, studens and clapped times in the first 4 days of a week

  getStudents: function () {
    var targetStudents = [];

    for ( var key in this.clappedTimes ) {

      if ( this.clappedTimes[key] > 2 ) {
        targetStudents.push(key);
      }

    } // for loop

    console.log(targetStudents);
    return targetStudents;

  }, // key


  oneLucky: function () {
    var winner;
    var candidates = this.getStudents();


    if ( candidates.length === 0 ) {
      winner = "Bager";

    } else {

      var luckyNumber =  Math.floor( Math.random() * candidates.length );
      winner = candidates[luckyNumber];

    }

    console.log(winner + " is chosen");
  } // key

} // end of object

bagersrevenge.oneLucky();
