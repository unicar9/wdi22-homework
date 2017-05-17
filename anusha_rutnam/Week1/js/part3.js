var drEvil = function (money) {
	if (money === 1000000)
		return  money + " dollars (pinky)";
		else if  (money !== 1000000)
			return money + " dollars";

};


drEvil();




//
// var drEvil = function (x) {
//   return "name" + x;
//
// };
//
// drEvil(20);

// 3 DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount,
//and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
