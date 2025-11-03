function findAllDuplicate(array) {
  let obj = {};
  let duplicate = [];

  for (let char of array) {
    if (obj[char]) {
      duplicate.push(char);
    } else {
      obj[char] = 1;
    }
  }
  return duplicate
}

const array = [1, 2, 3, 3,1];

const res = findAllDuplicate(array);

console.log(res);
