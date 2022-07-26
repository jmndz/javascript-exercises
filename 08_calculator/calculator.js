const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(array) {
	let sum = 0;
  for(num of array){
    sum += num;
  }
  return sum;
};

const multiply = function(array) {
  let product = 0;
  for(num of array){
    if(product === 0) product = num;
    else product *= num;
  }
  return product;
};

const power = function(num, exponent) {
  return num ** exponent;
};

const factorial = function(num) {
  let result = 1;
	for(let i=1;i<=num;i++){
    result *= i;
  }
  return result;
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
