wdi = {
       class: 22,
       startDate: "15/05/2017",
       instructors: ["Luke Hammer", "Matty Edge"],
       students: {
            enrolled: ["Max", "Quinn", "Reeta", "Malcolm in the Middle", "Anusha"],
            notEnrolled: ["Rick and Morty", "Bill Gates"]
      },
      enjoymentLevel: ">9000",
      updated: function (studentName){
        var enrolled = wdi.students.enrolled;
        var index = enrolled.indexOf(studentName);
        wdi.instructors.push(studentName);
        enrolled.splice[index,index];

      }
};
//
var enrolled = wdi.students.enrolled
var index = enrolled.indexOf("Malcolm in the Middle");
enrolled.splice[index,index];// slice doesn't work. I know it's the opposite of 'push'
