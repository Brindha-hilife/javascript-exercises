const ftoc = function() {
  var temprature = 32;
  var celsius = parseFloat(temprature-32)/1.8;
  return celsius;
};

const ctof = function() {
  var degree = 0;
  var fehrenheit = parseFloat((degree*1.8)+32);
  return fehrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
