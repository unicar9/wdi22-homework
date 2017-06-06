var areaOfCircle = function(raduis){
var area = Math.PI * raduis* raduis;
console.log('The area of circle with radius ' + raduis + ' is ' + area);
//var fixedNum = area.toFixed(area);
console.log('The area of circle with radius 2 digits ' + raduis + ' is ' + (Math.floor(area * 100) / 100).toFixed(2));

return area;

};
areaOfCircle(2);