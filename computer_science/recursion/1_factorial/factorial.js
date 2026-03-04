const factorial = function(n) {
  if (n <= 0) {
    return 'Please, insert a positive integer number'
  } else if (n == 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
};

console.log(factorial(0));

// Do not edit below this line
module.exports = factorial;