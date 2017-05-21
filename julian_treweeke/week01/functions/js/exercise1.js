// Write a function named tellFortune that:
//
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

var tellFortune = function( numberOfChildren, partnersName, geographicLocation, jobTitle){
    var fortune = "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids.";
    return fortune;
}

var result = tellFortune(4,"Amanda","Sydney","Workaholic");
console.log(result);

tellFortune(8,"Bob","Melbs","Workaholic");
tellFortune(2,"Satan","Heaven","Angel");
