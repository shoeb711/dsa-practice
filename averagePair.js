function averagePair(array, targetAvg) {
  let first = 0;
  let next = array.length - 1;

  while (first < next) {
    const avg = (array[first] + array[next]) / 2;

    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      first++;
    } else {
      next--;
    }
  }

  return false;
}

const array = [1, 2, 3]; // true
// // const array = [1, 3, 3, 5, 6, 7, 10, 12, 19]; // true
// const array = [1, 3, 3, 5, 6, 7, 10, 12, 19];

// function averagePair(array, targetAvg) {
//   let j = 0;
//   for (let i = array.length - 1; i > j; i--) {
//     const avg = (array[i] + array[j]) / 2;
//     if (avg === targetAvg) {
//       return true;
//     }else if(avg < targetAvg){

//     }
//   }
//   return false
// }

const res = averagePair(array, 8);
console.log(res);
