// ARE VALUES ARRAYS
let arr0 = [[1],[2],[3]];
let arr1 = [1,2,[3],4];
function areValuesArrays(array){
  let status = 1;
  for(let elements of array) {
    typeof(elements) == "object" ? status = status * 1 : status = status * 0;
  }
  return !!status;
}
console.log(areValuesArrays(arr0));
console.log(areValuesArrays(arr1));

// IS HOMOGENOUS
let arr0 = [[1],[2],[3]];
let arr1 = [1,2,[3],4];
function isHomo(array){
  let status = 1;
  for(let elements of array) {
    typeof(elements) == typeof(array[0]) ? status = status * 1 : status = status * 0;
  }
  return !!status;
}


// FIND DUPLICATES
const arr = [1,2,4,6,4,5,6,6,8,9,1];
function findDups(array){
  const result = {};
  for(let elements of array){
    if(result[elements]>0){
      result[elements] +=1;
    } else {
      result[elements] = 1;
    }
  }
  function filterObj(object){
  const arr1 = [];
  for(let values in object){
    if(object[values] > 1) {
      arr1.push(values);
    }
  }
  return arr1;
  }
  return filterObj(result);
}
findDups(arr);


// CHALLENGE: LINKED LISTS
let x = {value: 2, next: {value: 3, next: {value: 4, next: null}}};

let y = [x.value, x.next.next.value]




// ZIP

let arr1 = [1,2,3];
let arr2 = [4,5,6];

function zip(array1,array2){
  if(array1.length !== array2.length){
    console.log("null");
  } else {
    function zipArray(array1,array2){
      const y = [];
      for(let x = 0; x < array1.length; x++){
        y[x] = [array1[x],array2[x]];
      }
      return y;
    }
  }
  return zipArray(array1,array2);
}
zip(arr1,arr2);


// COUNT WORDS

const paragraph = `Food truck palo santo actually post-ironic prism, bushwick synth. Intelligentsia leggings food truck glossier, pabst prism pinterest kickstarter keffiyeh microdosing cray wolf salvia. Locavore food truck helvetica kickstarter. Pabst prism pinterest kickstarter keffiyeh microdosing cray wolf salvia. Locavore food.`;


function countWords(string){
  x = string.replace(/[,.]/g , '');
  const arr = x.split(' ');
  const result = {};
  for(let elements of arr){
    const loChar = elements.toLowerCase();
    if(result[loChar] > 0) {
      result[loChar] += 1;
    } else {
      result[loChar] = 1;
    }
  }
  return result;
}

countWords(paragraph);


// CHALLENGE CLOSEST NEIGHBOR
const n = 20;
const a = 2;
const b = 3;
const c = 4;

function closestN(int,x,y,z){
  let arr = [];
  let num1 = int+1;
  let num2 = int-1;
  if(num1%x !== 0 && num1%y !== 0 && num1%z !== 0){
    num1 = num1 + 1;
  } else {
    arr.push(num1);
  }
  if(num2%x !== 0 && num2%y !== 0 && num2%z !==0){
    num2 = num2 - 1;
  } else {
    arr.push(num2)
  }
  return arr;
}
