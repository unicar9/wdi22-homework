// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

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
//   }
//
// }



// assignGrade(56);
// assignGrade(36);
// assignGrade(26);
// assignGrade(86);

var assignGrade = function(score){
  var grade;
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
return grade;
