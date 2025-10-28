function sumZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
}

const arr = [-3, -2, -1, 0, 1, 2, 3];

const res = sumZero(arr);

console.log("res =>", res);
