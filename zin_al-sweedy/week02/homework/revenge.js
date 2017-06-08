// Badger's Revenge
//
// Fed up with students clapping him after every warmup, Badger devises a cunning plan to put an end to it -
// or at least look like he's putting an end to it. You see, Badger secretly enjoys the adulation - mocking though it may be -
// so he doesn't want the clapping to stop altogether.
//
// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a
// draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to
 // Friday's warmup.
//
// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this,
 // but if you can get it working using standalone functions, that's cool.
//
// Your program should:
//
// Track how many times each student in the class has clapped this week (just make up the numbers);
// Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than
 // twice that week);
// Pick a random student to deliver the solution to Friday's warmup.
// If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.


// create obj revengeOfBadger
// method inside object no [["cc",5]] vvvry complicated
var revengeOfBadger = {
  studentClaps : {// data structre
    'Alice':3,
    'Max':0,
    'Quinn':4,
    'Rayan':1
  },

  shortList:[], // Initialise an empty list to put output
  // let make a function
  // call function many times
  getCandidates: function() {// figure how many students in this obj has clapped more than twice.
    for(var name in this.studentClaps){// this same  with revengeOfBadger same from the code broken we put this may be we will change obj name it works change one time
      if ( this.studentClaps[name]>2){
        // add the name to the end of shortList.
        this.shortList.push(name);
      }
    }
    return this.shortList.length;
  },

  draw: function (){
    this.shortList = [];
    var winner;
    var numberOfCandidates = this.getCandidates();// link the two functions together gives only number 3

    if (numberOfCandidates === 0){
      winner = "Badger";
    } else {
      // choose a random student from the  shortList
      // get a random number
      // use that number as an index in the array shortList
      var random = Math.floor( Math.random() * numberOfCandidates);// 3 never more than 2
      winner = this.shortList[random];
    }
    console.log("Lucky"+winner +" , is doing the warmup today");
    }
};
// repeat the names
revengeOfBadger.draw();
