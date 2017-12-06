// Write an higher-order function, find, from scratch that takes two arguments:
//
// the first is an array
// the second is a callback that will be called once for every element in the array with 3 arguments:
// the current value of the element
// the current index of the element
// the array itself
// find returns a the first element in the array for which the callback (or, second argument) returns true.
let arr = [1,2,3,4,5];
const even = (number) => {return number%2===0};
const odd = (number) => {return !even(number)};
const above = function (min) {
  return function (n) {
    return n > min;
  }
}


const find = (array, fn) => {
  for(let x=0, max=array.length; x < max; x++){
    if(fn(array[x])){
      return array[x];
    }
  }
}

find(arr, even);

find(arr, above(3));




// Write an higher-order function, filter, from scratch that takes two arguments:
//
// the first is an array
// the second is a callback that will be called once for every element in the array with 3 arguments:
// the current value of the element
// the current index of the element
// the array itself
// filter returns a new array that only contains elements of provided array where the callback function returns true.


let arr = [1,2,3,4,5];
const even = (number) => {
    if(number%2===0){
      return number;
    }
};
const odd = (number) => {
    if(number%2!==0){
      return number;
    }
};
const above = function (min) {
  return function (n) {
    return n > min;
  }
}


const filter = (array, fn) => {
  let newArray = [];
  for(let x=0, max=array.length; x < max; x++){
    if(fn(array[x], x, array)){
      newArray.push(array[x]);
    }
  }
  return newArray;
}

filter(arr, even);
filter(arr, odd);
filter(arr, above(3));




// LAZY NUMBER SEQUENCE


function numberSeq(){
  let initialValue = -1;
  return function(){
    initialValue += 1;
    return initialValue;
  }
};
const numbers = numberSeq();

numbers();
numbers();

function numberSeq (begin=0,step=1) {
  let result = begin - step;
  return function () {
    result += step;
    return result;
  }
}

// HIGHER ORDER UTILITIES
const add = function (a,b){return a +b};
function before(n, fn){
  let initialValue = 0;
  return function (...args){
    if(initialValue < n){
      initialValue += 1;
      return fn(...args);
    }
  };
}

function after(n, fn){
  let initialValue = 0;
  return function (...args){
    if(initialValue >= n){
      return fn(...args);
    } else {
      initialValue += 1;
    }
  }
}



const addAfter3Tries = after(3, add);
const only3Times = before(3, add);

only3Times(5,4);
only3Times(5,4);
only3Times(5,4);
only3Times(5,4);

addAfter3Tries(5,4);
addAfter3Tries(5,4);
addAfter3Tries(5,4);
addAfter3Tries(5,4);



// GUESS THE number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessTheNumber(theNumber, from, to) {
  min = from;
  max = to;
  console.log(`Im thinking of a number from ${from} to ${to}`);
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}


function guessTheNumber(theNumber, from, to) {
  let guessCount = 0;
  min = from;
  max = to;
  console.log(`Im thinking of a number from ${from} to ${to}`);
  return function(...args){
    if(guessCount >= 20){
      console.log('I give up');
    } else {
      let x = (Math.floor(Math.random() * (max - min + 1)) + min);
      console.log(`I am guessing ${x}`);
      if(x === theNumber){
        console.log("Yes it is!");
      } else {
        console.log("Nope, try again");
        guessCount += 1;
      }
    }
  }
}


guessTheNumber(10, 0, 20)(...args)


// REDUCE

[1,2,3,4,5].reduce(function(acc,elem,index,array){
  console.log(acc,elem,index);
  return acc + elem;
}, 0);


    // our REDUCE
function reduce(arr, fn){
  let acc = 0;
  for(let i in arr) {
    fn(acc, elem, index, array)
  }
}

// EDUARDO's reduce

const plus = function (a, b) { return a + b };
const mult = function (a, b) { return a*b };
const multAndPlus = function (a, b, c) { return plus(mult(a,b), c) };

function reduce(array, fn) {
  let acc = array[0]
  for (let i = 1, max = array.length; i < max; i += 1) {
    acc = fn(acc, array[i], i)
  }
  return acc
}


let arr = [1,2,3,4,5];


console.log(reduce(arr, plus)); // returns 15
console.log(reduce(arr, mult)); // returns 120
console.log(reduce(arr, multAndPlus)); // returns 239



// Lazy fib SEQUENCE

function fibSeq () {
  let arr = [1,0];
  return function () {
    arr.push(arr[arr.length-2] + arr[arr.length-1])
    return arr[arr.length-1];
  };
}

const numbers = fibSeq();

console.log(numbers());
console.log(numbers());
console.log(numbers());
console.log(numbers());
console.log(numbers());
console.log(numbers());
