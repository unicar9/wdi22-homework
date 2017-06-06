var mixUp = function(str1,str2){
	
	console.log(str2.slice(0,2)+str1.slice(2)+" "+ str1.slice(0,2)+str2.slice(2));
	return(str2.slice(0,2)+str1.slice(2)+" "+ str1.slice(0,2)+str2.slice(2));
};
mixUp('mix','pod');
mixUp('dog', 'dinner');