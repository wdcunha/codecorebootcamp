const sentence = ['i','went','to','school','today'];
sentence.join(' ');

const arr = [1,2,3,4,5];
arr.concat([6,7,8]);

//POP
arr.pop(); // removes the last element of the array
let x = arr.pop(); // x will = element removed

//SLICE
const arr = [1,2,3,4,5];
arr.slice(0,2) //starts at index 0 and goes to index 2 but does not include index 2

//SHIFT
arr.shift(); // removes the first element of the array

//PUSH
arr.push(55); // adds 55 to the end of the array

//UNSHIFT
arr.unshift(55); // adds 55 to the beginning of the array


//INCLUDES
arr.includes(4); // checks to see if an array contains the value 4



const arr = ['hello', 'bootcamp', 'students'];

for(let i=0; i< arr.length; i++) {
  console.log(`length of ${arr[i]} is ${arr[i].length}`);
}

arr.forEach(function(word){
  console.log(`length of ${word} is ${word.length}`);
});

for(let word of arr) {
  console.log(word.toUpperCase());
}


// Exercise
const arr = [2,4,6,8,'dog'];
let sum = 0;
function sumArray (arr) => {
  for(let x=0; x<arr.length; x++){
    if(arr[x] != NaN) {
      result = sum + arr[x];
    }
  }
  return result
}
sumArray(arr);
