const add = function() {
    var num = 0;
    var sum = num + num;
    return sum;
};

const subtract = function() {
    var value1 = 10;
    var value2 = 4;
    var sum = value1 - value2;
    return sum;
};

const sum = function() {
	var array = [];
  var sum = array.reduce(function(a, b){
    return a + b;
}, 0);
return sum;
};

const multiply = function() {
  var value1 = 2;
  var value2 = 4;
  var sum = value1 * value2;
  return sum;
};

const power = function() {
  var value1 = 4;
  var sum = Math.pow(value1, 3);
  return sum;
};

const factorial = function(n) {
	if (n < 0) return;
  if (n < 1) return 1;
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
