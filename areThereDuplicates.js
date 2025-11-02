function areThereDuplicates(...params) {
  let obj = {};

  for (let char of params) {
    if (obj[char]) {
      return true;
    } else {
      obj[char] = 1;
    }
  }

  return false;
}

const res = areThereDuplicates("a", "b", "c");
console.log(res);
