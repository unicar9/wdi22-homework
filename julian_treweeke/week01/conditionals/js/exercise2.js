//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
//


var helloWorld = function(x){
 if (x === 'gg' ){
   console.log("German Greeting");
 } else if (x ===  "gr") {
   console.log("Yasoo");
 } else if (x ===  "fr") {
   console.log('bonjour');
 } else {
   console.log('Hello World');
 }
}


helloWorld("gg");
helloWorld("gr");
helloWorld('fr');
helloWorld("au");
