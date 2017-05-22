var fixStart = function(str){
	var ch = str.charAt(0);
	console.log (ch+ str.slice(1).replace(new RegExp(ch,'g'),'*'));
	return(ch+ str.slice(1).replace(new RegExp(ch,'g'),'*'));
};	
fixStart('babble');