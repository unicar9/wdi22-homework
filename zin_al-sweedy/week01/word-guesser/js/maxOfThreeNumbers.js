var maxOfTwoNumbers = function(num1,num2,num3){
  var max=0;
  if (num1 > max){
    max=num1;
  }
  else if (num2 > max) {
    max = num2;
  }
  console.log('max of three numbers'+ num1+ num2 +num3+'is '+ max);
  return max;
};
