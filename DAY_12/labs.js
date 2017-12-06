// FIND MAXIMUM

    // iteration

const loopMax = (array) => {
  let result = 0;
  for(let numbers of array){
    if(numbers > result){
      result = numbers;
    }
  }
  return result;
}


    // recursion


function recursiveMax(array){
  if(array.length === 1){
    return array[0];
  } else if(array[0] < array[1]){
    array.splice(0,1);
  } else {
    array.splice(1,1);
  }
  return recursiveMax(array);
}


    // TA MAX: MAX RECURSIVE

function maxRec(arr){
  if(arr.length ===1){
    return arr[0];
  }
  let first = arr[0];
  let maxRestOfArray = maxRec(arr.slice(1));
  if (first > maxRestOfArray) {
    return first;
  } else {
    return maxRestOfArray;
  }
}




// BRACKETS BALANCE

function areBalanced(string){
  let bracket1 = [];
  let bracket2 = [];
  for(let x=0; x<string.length; x++){
    if(string[x] === ")"){
      bracket1.push(string[x]);
    } else if(string[x] === "("){
      bracket2.push(string[x]);
    }
  }
  if(bracket1.length == bracket2.length){
    return true;
  } else {
    return false;
  }
}

function areBalanced(string){

}



areBalanced("(1 + (2 * 8) ** (3 + 4))") // returns true
areBalanced("(4 + 4 + (6 * 9)") // returns false
areBalanced("function rob (arg) { return (arg }") // returns false
areBalanced("hello )") // returns false



// BINARY SEARCH


function binarySearch(value,array){
  let min = 0;
  let max = array.length - 1;
  let searchIndex = Math.floor((min + max)/2);

  while(array[searchIndex] != value && min < max) {
    if (value < array[searchIndex]) {
      max = searchIndex -1;
    } else if(value > array[searchIndex]){
      min = searchIndex + 1;
    }
    return searchIndex = Math.floor((min + max)/2);
  }
  return (array[searchIndex] == value) ? searchIndex : -1;
}


 // REVERSE FLATTEN



 function flatten(array){
   if(array.length === 0){
     return array;
   } else if(typeof(array[0]) !== 'object'){
       return array[0];
     } else {
       return flatten(array.slice(1));
     }
 }


 function flatten(array){
   if (array.length == 0){return array}
   else if (!Array.isArray(array[0])){
     return [array[0]].concat(flatten(array.slice(1)))
   } else {
     return flatten(array[0]).concat(flatten(array.slice(1)))
   }
 }
