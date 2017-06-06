var verbing =function(str){
	if (str.length >=3 ){
		if(str.slice(-3)==='ing'){
		console.log(str + 'ly');
		return(str+'ly');
		}
		else {
		console.log(str + 'ing');
		return(str + 'ing');
		}
	}
	else {
		console.log(str);
		return(str);
	}
	
};
verbing('swim');
verbing('go');
verbing('swiming');