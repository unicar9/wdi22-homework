// var radius = 4;
// var diameter = radius * 2;
// var circumferance = Math.PI * diameter;
// console.log('"The circumferance is ' + circumferance);
// // console.log(diameter);
// var area = Math.PI * (radius * radius);
//
// console.log('The area is ' + area);
//



// var circumferance = Math.PI x 2 x radius;
// console.log('"The circumference is ' + circumference);

var calcCircumerence = function( radius ){
  var circumference = 2 * radius * Math.PI;
  console.log('The circumference is ' + circumference);

};

var calcArea = function( radius ){

  var area = Math.PI * radius * radius;
  console.log('The area is ' + area);
};

calcCircumerence( 72 );

calcArea( 72 );
