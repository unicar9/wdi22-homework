
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
//

var choices = ["blue","green","red"];
for (var i = 0; i < choices.length; i++ ){
   console.log('My #' + (i+1) + " choice is " + choices[i] )
}

var choices = ["blue","green","red","purple","black","white"];
for (var i = 0; i < choices.length; i++ ){
    var suffix = ['st','nd','rd','th','th','th','th','th','th','th','th','th'];

   console.log('My ' + (i+1) + suffix[i] +  " choice is " + choices[i] )
}

var dogs = ['Novia Scotia Duck Tolling Retreiver', 'Staffy', 'Blacklab' , 'Kelpie'];
for (var i = 0; i < dogs.length; i++) {
    var currentDog = dogs[i];

    var suffix = '';

    if( i == 0){
      suffix = 'st';
    } else if ( i === 1){
      suffix = 'nd';
    } else if ( i === 2 ){
      suffix = 'rd';
    } else {
      suffix = 'th';
    }

    console.log('My ' + (i+1) + 'th choice of dog is ' + currentDog);
}






// st is used with numbers ending in 1 (e.g. 1st, pronounced first)
// nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
// rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
// As an exception to the above rules, all the "teen" numbers ending with 11, 12 or 13 use -th (e.g. 11th, pronounced eleventh, 112th, pronounced one hundred [and] twelfth)
// th is used for all other numbers (e.g. 9th, pronounced ninth).
