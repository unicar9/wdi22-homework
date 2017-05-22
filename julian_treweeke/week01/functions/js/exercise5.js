// var celciusTemperature = 50;
// console.log(celciusTemperature + " Celcius  is " + (celciusTemperature * 9 / 5 + 32) + " Fahrenheit" );
// var fahrenheit = 60;
// console.log(fahrenheit +  " Fahrenheit  is " + (fahrenheit - 32 * 5 / 9) + " Celcius" );

//
// var celcius = 47;
// var fahrenheit = (celsius * 1.8) + 32;
//
// console.log(celsius + ' is ' + fahrenheit + );
//
// fahrenheit = 116.6;
// celsius = (fahrenheit - 32) / 1.8;
//
// console.log(fahrenheit + ' is ' + celsius + ' ');

var celsiusToFahrenheit = function( celsius ){

  var fahrenheit = (celsius * 1.8) + 32;
  console.log(celsius + 'C is ' + fahrenheit + 'F');

}

var fahrenheitToCelcius = function( fahrenheit ){

  var celsius = (fahrenheit - 32) / 1.8;
  console.log(fahrenheit + 'F is ' + celsius + 'C');

};

celsiusToFahrenheit( 47 );
fahrenheitToCelcius( 68 );
