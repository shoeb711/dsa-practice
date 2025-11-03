function isSubsequence(msg, str) {
  let tempStr = "";

  let i = 0;
  for (let j = 0; j < str.length; j++) {
    if (msg[i] === str[j]) {
      tempStr += str[j];
      i++;
    }
    if (tempStr === msg) {
      return true;
    }
  }

  return false;
}

// const res = isSubsequence("hello", "hello world");
const res = isSubsequence("sing", "sting");
// const res = isSubsequence("abc", "acb");
console.log(res);
