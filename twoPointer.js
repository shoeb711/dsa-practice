const arr = [-3, -2, -1, 0, 1, 2, 4];

// using normal for loop - O(n^2) / quadratic
function sumZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
}

// using two pointer - O(n) / linear

function sumZeroWithLoopPointer(array) {
  //using for loop

  for (let left = 0, right = array.length - 1; left < right; ) {
    const sum = array[left] + array[right];

    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

function sumZeroWithWhilePointer(array) {
  let left = 0;
  let right = array.length - 1;

  // while
  while (left < right) {
    const sum = array[left] + array[right];

    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const res = sumZeroWithLoopPointer(arr);

console.log("sumZeroWithPointer res =>", res);
