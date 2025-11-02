function missingNumber(array) {
  const sortedArr = array.sort();

  const largestNum = sortedArr[sortedArr.length - 1];

  for (let i = 0; i <= largestNum; i++) {
    if (array[i] !== i) {
      return i;
    }
  }
}

// const array = [3, 0, 1]; // 2
// const array = [9, 6, 4, 2, 3, 5, 7, 0, 1]; // 8
const array = [0, 1]; // it should return 2 but getting undefined

const res = missingNumber(array);
console.log(res);
