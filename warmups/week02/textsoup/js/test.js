// menu = {"id": "file",
// 	      "value": "File",
// 	      "popup": {"menuitem": [{"value": "New",
// 			                       "onclick": "CreateNewDoc()"},
// 			                        {"value": "Open",
// 			                        "onclick": "OpenDoc()"},
// 			                        {"value": "Close",
// 			                         "onclick": "CloseDoc()"}]
//         }
//       }
// wdi = {
//   class: 22,
//   startDate: "15/05/2017",
//   instructors: ["Luke Hammer", "Matty Edge"],
//   students: {
//     enrolled: ["Max", "Quinn", "Reeta", "Malcolm in the Middle", "Anusha"],
//     notEnrolled: ["Rick and Morty", "Bill Gates"]
//   },
//   enjoymentLevel: ">9000"
// }

var $cat = $('#cat');
var $catjet = $('#catjet')
console.log('we are here', cat);
var catMoveIncrement = 10;

window.setInterval(function(){
  var left = $cat.css('left');   // $cat.css('left');
  left = parseInt(left);
  if(left > window.innerWidth - $cat.width()){
    $cat.css('transform', 'scaleX(-1)');
    catMoveIncrement = -10;
  } else if(left < 0){
    $cat.css('transform', 'scaleX(1)');
    catMoveIncrement = 10;
  }
  $cat.css('left', (left + catMoveIncrement) + 'px');
  // debugger;
}, 65);

var takeOff = function(){
  if( === 230){
    window.clearInterval();
    $cat.hide();
    $catjet.hide();
  }
};
console.log("weee");
takeOff();
