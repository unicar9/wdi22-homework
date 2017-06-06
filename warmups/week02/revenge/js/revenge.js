
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

var revengeOfBadger = {
  studentClaps: {
    'Alice': 3,
    'Max': 100,
    'Quinn': 4,
    'Reeta': 14,
    'Ryan': 1
  },

  shortlist: [], //Initialise an empty list

  getCandidates: function() {
    for(var name in this.studentClaps){
      if( this.studentClaps[ name ] > 2){
        //add the name to to the end of shortlist.
        this.shortlist.push( name );
      }
    }
    return this.shortlist.length;
  },

  draw: function(){
    this.shortlist = [];
    var winner;
    var numberOfCandidates = this.getCandidates();

    if ( numberOfCandidates === 0) {
      winner = "Badger";
    } else {
      //choose a ranodm studend from the shortlist
      // get a random number
      // use that number as an index in the array shortlist
      var random = Math.floor( Math.random() * numberOfCandidates);
      winner = this.shortlist[random];
    }
    console.log("Lucky " + winner + ", is doing the warm up today!!!!");
    return winner;
  }
};

revengeOfBadger.draw();
