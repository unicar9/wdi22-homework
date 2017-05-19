// The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.


// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// var assignGrade = function(score){
//   var result = score;
//   if (score >= 90){
//     grade='A';
//   } else if (score >= 80 ){
//     grade='B';
//   } else if (score >= 60 ){
//     grade='C';
//   } else if (score >= 40 ){
//     grade='D';
//   } else if (score <40){
//     grade='E';
//   };

  // for (var i = 60; i<101; i++ ){
  //   console.log("For " + i + " , you got a " + assignGrade(i));
  // }
  //









// my version

var assignGrade = function(score){
  var result = score;
  if (score >= 90){
    grade='A';
  } else if (score >= 80 ){
    grade='B';
  } else if (score >= 60 ){
    grade='C';
  } else if (score >= 40 ){
    grade='D';
  } else if (score <40){
    grade='E';
  };

  for (var i = 60; i<=100; i++  ){
    console.log("For " + result + " , you got a " + grade);
  }

  return assignGrade;
}

assignGrade(90);










// assignGrade(36);
// assignGrade(26);
// assignGrade(86);




// var assignGrade = function(score){
//   if (score >= 90){
//     console.log("A")
//   } else if (score >= 80 ){
//     console.log("B")
//   } else if (score >= 60 ){
//     console.log("C")
//   } else if (score >= 40 ){
//     console.log("D")
//   } else if (score <40){
//     console.log("F");
//   };
//   return assignGrade;
// }
//
// assignGrade(56);
// assignGrade(36);
// assignGrade(26);
// assignGrade(86);
