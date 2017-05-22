// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
// all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10,
// and multiplyArray([1,2,3,4]) should return 24.




var sumArray= function (numbers){
var sum = 0;
for(var i = 0; i < numbers.length; i++) {
  sum  = sum + numbers[i];
  console.log('orignal array'+numbers[i]);
}
console.log('sum of numbers array is '+ sum);
};

var multiplyArray = function (numbers){

var multiply = 1;


for (var i = 0; i < numbers.length; i++) {
  multiply*=numbers[i];
  console.log('original array'+numbers[i]);
}
console.log(' multpilying the numbers array is '+multiply);
};
var numbers=[1,2,3,4];

sumArray(numbers);
multiplyArray(numbers);
