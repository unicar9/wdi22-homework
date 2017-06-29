// Allergies Warmup
//
// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).
//
// The list of items (and their value) that were tested are:
//
// eggs (1)
// peanuts (2)
// shellfish (4)
// strawberries (8)
// tomatoes (16)
// chocolate (32)
// pollen (64)
// cats (128)
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
//
// Now, given just that score of 34, your program should be able to say:
//
// Whether Tom is allergic to any one of those allergens listed above.
// All the allergens Tom is allergic to.

var allergyCheck = function( score ) {

  this.allergens = {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  };

  this.allergy = [];

  var allergyList = Object.keys( this.allergens ).map( Number ).reverse()

  for (var i = 0; i < allergyList.length; i++) {
    if ( score >= allergyList[i] ) {

      this.allergy.push( this.allergens[ allergyList[i]]);
      score -= allergyList[i]

    }
  }



}


var myAllergies = new allergyCheck (34)
