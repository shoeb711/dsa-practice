function constructNote(str1, str2) {
  const obj1 = {}
  const obj2 = {};

  for (let char of str1) {
    obj1[char] = obj1[char] + 1 || 1;
  }
  for (let char of str2) {
    obj2[char] = obj2[char] + 1 || 1;
  }

  console.log(obj1);
  console.log(obj2);
  

  for (const key in obj1) {
    if (!(obj2.hasOwnProperty(key) && obj2[key] >= obj1[key])) {
      return false;
    }
  }
  return true;
}

const str1 = "abc";
const str2 = "dcba";

const res = constructNote(str1, str2);
console.log(res);
