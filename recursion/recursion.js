const array = [1,2,3,4];


function sum(array){
  if(array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1));
  }
}


const array = [1,2,3,4,5];


// Spread Syntax

[num, ...subArray] = array;
num; // has value of 1;
subArray; // has value of [2,3,4,5];

function sum([firstItem, ...restOfArray]){
  if(array.length === 0){
    return 0;
  } else {
    return firstItem + sum(restOfArray);
  }
}

function factorial(number){
  if(number === 0){
    return 1;
  } else {
    return number * factorial(number-1);
  }
}


function reverse(string) {
  if(string.length === 1) {
    return string.charAt(0);
  } else {
    return string.charAt(-1) + reverse(string);
  }
}

function reverse(string) {
  if(string.length === 0) {
    return string;
  } else {
    return string[string.length -1] + reverse(string.substring(0, string.length-1));
  }
}


function squareArray(array){
  if(array.length === 0){
    return array;
  } else {
    return (array[0]**2).concat(squareArray(array.slice(1, array.length)));
  }
}


// doube([3,5,7])
// ([9]).concat(double[3,5,7])

function squareArray(array){
  if(array.length === 0){
    return array;
  } else {
    return ([array[0]**2]).concat(squareArray(array.slice(1, array.length)));
  }
}



// BENCHMARKING


function factorialRecursive(number){
  if(number === 0){
    return 1;
  } else {
    return number * factorialRecursive(number-1);
  }
}


function factorialLoop(n){
  let result =1;
  for(let i=n; i>=1; i--) {
    result *= i;
  }
  return result;
}

console.time("Factorial Recursive");
for(let j=0; j<1e7; j++){
  factorialRecursive(100);
}
console.timeEnd("Factorial Recursive");
