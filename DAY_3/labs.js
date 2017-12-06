// Loop Through Multi-Dimensional array
const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];

function printMulti(array){
  const joinedArray = myArray[0].concat(myArray[1]);
  joinedArray.forEach(function(num){
    console.log(num);
  })
}
printMulti(myArray);




// PARSE CSV - from EUGENE
let csvData = `id,first name,last name,email
1,jane,doe,wildmirror@yahoo.com
2,john,doe,tamepool@hotmail.com
3,sherlock,holmes,mag@glass.com
4,natalia,romanov,8legged@ninja.com
5,peter,quill,starlord@gmail.com`;

function parse(string){
 //store string into array
 const sentences = string.split('\n');
 //separte into 2-D
 const multiArr = [];
 let temp = [];
 for(let i = 0; i < sentences.length; i++) {
   temp = sentences[i].split(',');
   multiArr.push(temp);
 }
 
 let resultArr = [];

 for(let i = 1; i < multiArr.length; i++) {
   let tempArr = [];
   let tempObj = {};
   for(let j = 0; j < multiArr[0].length; j++) {
     tempObj[multiArr[0][j]] = multiArr[i][j];
   }
   resultArr.push(tempObj);
 }
 return resultArr;
}
console.log(parse(csvData));


// MERGE SETS

let array1 = [1, 2, 3, 5];
let array2 = [3,4,5];

function mergeSet(arr1,arr2){
  let array3 = arr1.concat(arr2);
    let items = array3;
    let uniqueItems = Array.from(new Set(items))
  return uniqueItems;
}

mergeSet(array1,array2);



// LARGEST NUMBER IN AN ARRAY

let arr = [1,20,30,50,35];

function largestNumber(array){
  let largeNumb = array[0];
  for(let numbers of array) {
    if(numbers >= largeNumb){
      largeNumb = numbers;
    }
  }
  return largeNumb;
}
largestNumber(arr);
