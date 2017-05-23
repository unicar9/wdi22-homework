var result =[];

var test = function (max, factor) {
  for (var i = 0; i < max; i++) {
      if (i % factor === 0) {
        var int = i;
        console.log(i, 'is a factor of ', factor);
      }
  }
  console.log('The following results contains the integers of ' + factor + ' from 0 to ' + max + ":" + result )
};
test(10,2);
