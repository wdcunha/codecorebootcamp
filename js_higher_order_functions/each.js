// special function. calls a passed argument as a function on each element of an array

function each(fn, arr) {
  for (let val of arr) {
    fn(val);
  }
}

function each(fn, arr) {
  for (let i = 0, max = arr.length; i < max; i ++) {
    fn(arr[i], i);
  }
}


each((val, index) => console.log(val, index), [1,2,3,4,5])
