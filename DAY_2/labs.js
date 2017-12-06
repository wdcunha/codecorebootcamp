// FIZZ BUZZ
let x = prompt('enter first number');
let y = prompt('enter second number');

for (let a=0; a<100; a++) {
  if(a%x===0 && a!==0 && a%y!==0){
    console.log("fizz");
  } else if (a%y === 0 && a !== 0 && a%x !==0) {
    console.log("buzz");
  } else if (a%y ===0 && a%x === 0 && a!==0) {
    console.log("fizzbuzz");
  } else {
    console.log(a);
  }
}

// NUMBER SORTER
let x = prompt('enter a number');
let y = prompt('enter a number');
let z = prompt('enter a number');


if(x>y && x>z) {
  console.log(`${x} is your biggest number`);
} else if (y>x && y>z) {
  console.log(`${y} is your biggest number`);
} else {
  console.log(`${z} is your biggest number`)
}

// EXTRA
let x = prompt('enter a number');
let y = prompt('enter a number');
let z = prompt('enter a number');
let sortedNumbers = [];

for(let a=0; a<3; a++) {
  if(x<y && x<z) {
    sortedNumbers.push(x);
    x=x*Infinity;
  } else if (y<x && y<z) {
    sortedNumbers.push(y);
    y=y*Infinity;
  } else if (z<x && z<y) {
    sortedNumbers.push(z);
    z=z*Infinity;
  }
}
console.log(sortedNumbers);


// GRADE

let x = prompt('enter your grade');
if(x>=90) {
  console.log('A');
} else if (x>80) {
  console.log('B');
} else if (x>70){
  console.log('C')
} else {
  console.log('F')
}


// AREA OF TRIANGLE

let x = parseInt(prompt('enter a side'));
let y = parseInt(prompt('enter a side'));
let z = parseInt(prompt('enter a side'));

console.log(`the perimeter is ${x+y+z}`);
if (x>y && x>z && y<z) { // x y
  console.log(`the area is ${z*y*0.5}`);
} else if (z>x && z>y && y<x) { // z y
  console.log(`the area is ${x*y*0.5}`);
} else {
  console.log(`the area is ${x*z*0.5}`);
}


// 
