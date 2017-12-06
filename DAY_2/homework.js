// Capitalize Even Numbers
let string = prompt('enter a string');

function upperCaseEven(string) {
  return string.split('').map(function(c, i) {
    return i % 2 ? c.toUpperCase() : c.toLowerCase();
  }).join('');
}

upperCaseEven(string);


// Exponents

let x = prompt('enter base');
let y = prompt('enter power');

let power = (x, y) => {
  let result = 1;
  if (y < 0) {
    return 1 / power(x, -y);
  }
  for (let i = 1; i <= y; i++) {
    result = result * x;
  }
  return result;
}

power(x, y);


// Rolling Dice

let x = prompt('please enter number of dice');

let sum = 0;
function getDiceValues(y) {
  let value = Math.floor(Math.random() * (y - 1 + 1) + 1); {
    console.log(value);
    sum = sum + value;
  }
  return sum;
}
while (x > 0) {
  let y = prompt('please enter number of faces');
  if (y < 4) {
    alert('please choose a valid face number');
    y = prompt('please enter number of faces');
  }
  getDiceValues(y);
  x--;
}
console.log(sum);



// Hashtag Pyramid
let x = prompt('enter a number');
let emptyString1 = "";
let emptyString2 = "";
for (let y=1; y<=x; y++) {
  emptyString += "#"
    for (let z=1; z<=x; z++) {
      emptyString2 += "\\"
    }
  let newString = emptyString2.concat(emptyString1);
  console.log(newString);
  // console.log(emptyString += "#");
}


// Guessing Game

let value = parseInt(Math.floor(Math.random() * (100 - 1 + 1) + 1));

// let value = 50;

let x = parseInt(prompt('guess the number'));
let attempts = 1;

while (x !== value) {
  x = numberChecker(x);
  if (x === value) {
    break;
  }
}
console.log(attempts);

function numberChecker(x) {
  let guess;
  if(x>value) {
    guess = parseInt(prompt('too high, guess again'));
    attempts = attempts + 1;
  } else if (x<value) {
    guess = parseInt(prompt('too low, guess again'));
    attempts = attempts + 1;
  } else {
    alert(`congrats, you guessed it in ${attempts} tries`);
    guess = x;
    attempts = attempts + 1;
  }
  return guess;
}


// Alternating Case

let string = prompt('enter a string');

function alternateCase(string) {
  return string.split('').map(function(c, i) {
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  }).join('');
}
alternateCase(string);
