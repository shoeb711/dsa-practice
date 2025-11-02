// using frequency counter

// function areThereDuplicates(...params) {
//   let obj = {};

//   for (let char of params) {
//     if (obj[char]) {
//       return true;
//     } else {
//       obj[char] = 1;
//     }
//   }

//   return false;
// }

// using two pointer

function areThereDuplicates(...params) {
  const sortedArr = params.sort((a, b) => a - b);
  console.log("sortedArr", sortedArr);
  let first = 0;
  let next = 1;
  const last = params.length - 1;

  while (first < last) {
    if (params[first] === params[next]) {
      return true;
    } else {
      first++;
      next++;
    }
  }

  return false;
}

const res = areThereDuplicates(1, 2, 3, 4, 5, 6, 1);
console.log(res);
