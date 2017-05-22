var helloWorld = function(lang){
	if (lang == 'fr') {
		console.log('Bonjour tout le monde');
        return 'Bonjour tout le monde';
    } else if (lang == 'es') {
    	console.log('Hola, Mundo');
        return 'Hola, Mundo';
    } else {
		console.log('Hello, World');// one time here or down console
        return 'Hello, World';
    }
};

/*console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('es'));*/
helloWorld('en');
helloWorld('fr');
helloWorld('es');