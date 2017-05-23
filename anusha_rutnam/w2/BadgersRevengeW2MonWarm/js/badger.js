// var classClaps = {
//   "Alice": [1, 1],
//   "Max": [1,1,1,1,1],
//   "Michelle": [1],
//   "Jonathan": [1,1,1,1],
//   "Ryan": [],
//   "Zinh": [1,1,1]
//
// };
//
//
//
// var howManyClaps = (name) {
//   var startIndex = (classClaps[name].length);
// if (classClaps.length > 2)
// //push to diff arry if more than 2, random draw from there
// console.log("yup");
//
// }



// solution
var revengeOfBadger = {
  //this is a method inside object
  studentClaps: {
    'Alice': 3,
    'Max': 0,
    'Quinn': 4,
    'Reeta': 14,
    'Ryan':1,
  },
  shortlist: [], //initialist an empty list
//what is getCandidates, because it is an object it doesn't need var before it
  getCandidates: function(){
    for(var name in this.studentClaps){
      if (this.studentClaps[name]>2){
      this.shortlist.push(name);
      }//if
    }//for
    return this.shortlist.length;
    //revengeOfBadger would work rather than 'this' but not if someone changed the var name
  },
  //as above, what is draw?, why no var
  draw: function () {
    this.shortlist = [];
    var winner;
    var numberOfCandidates = this.getCandidates();

    if (numberOfCandidates === 0){
      winner = "Badger";
    }
    else {
      var random = Math.floor(Math.random()* numberOfCandidates);
      winner = this.shortlist[random];
      //choose random student from shortlist
    }
    console.log("Lucky "+winner+", is doing the warm up today!");
  }

}







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
