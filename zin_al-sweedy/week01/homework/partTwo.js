var partTwo= function (num){
var half=num/2;
var square= half*half;	
//Math.pow(4, 3);**2
var area = Math.PI * square* square;
console.log('The area of circle with radius 2 digits ' + area + ' is ' + (Math.floor(area * 100) / 100).toFixed(2));
};
partTwo(7);