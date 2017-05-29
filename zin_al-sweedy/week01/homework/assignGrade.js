var assignGrade = function(score){
	if (score > 90){
		return 'A';
	}
	if (score > 80){
		return 'B';
	}
	if (score > 70){
		return 'C';
	}
	if (score > 65){
		return 'D';
	}
	else{
		return 'F';
	}
};


console.log('You got a ' + assignGrade(95));
console.log('You got a ' + assignGrade(65));