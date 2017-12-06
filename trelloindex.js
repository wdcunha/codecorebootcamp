const hello = {
    'Tester Board': {
      'To Do': ['Laundry', 'Buy Apples', 'Pay Phone Bill'],
      'Doing': ['Laundry', 'Studying Javascript', 'Studying HTML', 'Studying Ruby'],
      'Done': ['Laundry']
    },
    'Dreams': {
      'Wish List': ['Conquer the Seven Kingdoms', 'Get my baby back', 'My hand needs to chill'],
    }
};

let getKeys = function(obj){
  let keys = [];
  for(let key in obj){
     keys.push(key);
  }
  let listKeys = function(arr){
    let list = "";
    let array_length = arr.length;
    for(let x=0; x<array_length; x++){
      list = `-------- \n${x+1}- ${arr[x]} \n`;
    }
    console.log(list);
    return list;
  }
  return listKeys(keys);
}


let createBoard = function(obj, boardName){
  if (obj[boardName]) {
    console.log('already exists');
  } else {
    obj[boardName] = {};
  }
}

let removeBoard = function(obj, boardName) {
  if (obj[boardName]) {
    delete obj[boardName];
  } else {
    console.log("board doesn't exist");
  }
}

let createList = function(obj, boardName, listName){
  if (obj[boardName] && obj[boardName][listName]) {
    console.log('this list already exists');
  } else if (!obj[boardName]) {
    console.log('this board does not exist');
  } else {
    obj[boardName][listName] = [];
  }
}

let displayBoard = function(obj, boardName){
  let list = "";
  if (!obj[boardName]) {
    console.log('this board does not exist')
  } else {
    for (let lists in obj[boardName]) {
      list += `\n|-----------------\n| ${lists} \n|----------------- `;
        for (let listItems of obj[boardName][lists]) {
          list += `\n|> ${listItems}`;
        }
    }
    console.log(list);
  }
  return list;
}


let createCard = function(obj, boardName, listName, cardName) {
  if (obj[boardName] && obj[boardName][listName]){
    obj[boardName][listName].push(cardName);
  } else if (!obj[boardName]) {
    console.log('this board does not exist');
  } else if (!obj[listName]) {
    console.log('this list does not exist');
  }
}

let removeList = (obj, boardName, listName) => {
  if (obj[boardName][listName]) {
    delete obj[boardName][listName];
  } else if (!obj[boardName]) {
    console.log('this board does not exist');
  } else if (!obj[listName]) {
    console.log('this list does not exist');
  }
}

let moveCard = (obj, boardName, fromList, toList, fromCardIndex, toCardIndex) => {
  if (obj[boardName][listName][fromCardIndex])
}
