var promptYear = prompt('What number do you want?');
promptYear = parseInt(promptYear);

var isDivisibleBy = function(num, divider) {
  return num % divider === 0;
};
var isLeapYear = function(year) {
    var result;
    result = false;
    if (isDivisibleBy(year, 4) && (!isDivisibleBy(year,100) || isDivisibleBy(year, 400))) {
      result = true;
    };
    if (result) {
      result = ""
    }
      else {
        result = " not";
      };
    console.log(year + " is" + result + " a leap year.")
  };

isLeapYear(promptYear);
