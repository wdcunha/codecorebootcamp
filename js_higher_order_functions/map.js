const repeat = (value,index) => {
  return value.repeat(index);
}

map(repeat,['a','b','c','d']);


let arr = ['a','b','c','d'];

function map (fn, arr) {
  let newArr = [];
  for(let i = 0, max = arr.length; i < max; i ++){
    newArr.push(fn(arr[i], i, arr));
  }
  return newArr;
}
