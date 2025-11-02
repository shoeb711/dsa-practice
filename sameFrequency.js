function sameFrequency(num1, num2) {
  const strNum1 = String(num1);
  const strNum2 = String(num2);

  const obj1 = {};
  const obj2 = {};

  if (strNum1.length !== strNum2.length) return;

  for (let char of strNum1) {
    obj1[char] = obj1[char] + 1 || 1;
  }
  for (let char of strNum2) {
    obj2[char] = obj2[char] + 1 || 1;
  }

  for (const key in obj1) {
    if (!(obj2.hasOwnProperty(key) && obj2[key] === obj1[key])) {
      return false;
    }
  }
  return true;
}

const num1 = 149;
const num2 = 941;

const res = sameFrequency(num1, num2);
console.log(res);
