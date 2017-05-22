var notBad= function(str) {
  var notIndex = str.indexOf('not');
  var badIndex = str.indexOf('bad');
  if (notIndex == -1 || badIndex == -1 || badIndex < notIndex)//badIndex < notIndex to make  the condition not working flase
   {
  	console.log(str);
  	return str;
  }
  else{ 
  	console.log(str.slice(0, notIndex) + 'good' + str.slice(badIndex + 3));
  	return (str.slice(0, notIndex) + 'good' + str.slice(badIndex + 3));// cat after first position and put good the cut after bad position(badIndex)for 3 characters bec bad is 3 chars
  }
};

notBad('This dinner is not that bad!');//: 'This dinner is good!'
notBad('This movie is not so bad!');//: 'This movie is good!'
notBad('This dinner is bad!');//: 'This dinner is bad!'