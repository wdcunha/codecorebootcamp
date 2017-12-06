// Variadic Function
// a function that takes a variable amount of arguments

// use `...` in front of an argument name where we want to be able to get the rest of the arguments. The rest of the arguments will be elements of an array.
// this is very similar to ruby's splat `*`.

function sum(...numbers) {
  let total = 0;
  for (let number of numbers){
    total += number;
  }
  return total;
}
// usage:
sum(8,9); // returns 17
sum(1,2,3,4,5); // returns 15

arr = [1,2,3,4]
sum(...arr) // returns 10

// You can also use `...` to spread elements of an array as arguments to a function, which is essentially the reverse of using it to gather a variable amount of arguments in an array.

// usage:
sum(...[1,2,3]) // returns 6
const myArr = [1,2,3,4,5];
sum(0, ...myArr); // returns 15



// Exercise: A Loud function
function loud (fn) {
  console.log(`Calling ${fn.name}`);
  const returnedVal = fn();
  console.log(`Called ${fn.name} & returned ${returnedVal}`);
  return returnedVal;
}

function loud (fn, a, b) {
  console.log(`Calling ${fn.name}`);
  const returnedVal = fn(a,b);
  console.log(`Called ${fn.name} & returned ${returnedVal}`);
  return returnedVal;
}

function loud (fn, ...args) {
  console.log(`Calling ${fn.name} with`, args);
  const returnedVal = fn(...args);
  console.log(`Called ${fn.name} & returned ${returnedVal}`);
  return returnedVal;
}

// Exercise: custom logging function
function loud (logFn, fn, ...args) {
  logFn(`Calling ${fn.name} with`, args);
  const returnedVal = fn(...args);
  logFn(`Called ${fn.name} & returned ${returnedVal}`);
  return returnedVal;
}


// Exercise: loud is evolving

const loudAdd = loudWith(console.log, add);

loudAdd(1,2) // returns 3
// loud(console.log, add, 1, 2)

function loudWith (logFn, fn) {
  return function (...args) {
    logFn(`Calling ${fn.name} with `, args);
    const returnedVal = fn(...args); // ð `fn` is called.
    logFn(`Called ${fn.name} & returned ${returnedVal}`);
    return returnedVal;
  }
}
