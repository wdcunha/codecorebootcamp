const above = function (min) {
  return function (n) {
    return n > min;
  }
}

const arg = above(10);
// same as
const arg = function(n){
  return n > 10; // note: this 10 is not a fixed value, it is the 10 passed through above
}

find(arr, above(3));

find(arr, arg);
