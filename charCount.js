function charCount(str) {
  // const strWithout = str.replace(" ","")
  // console.log(strWithout)
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (obj.hasOwnProperty(str[i])) {
        obj[str[i]] = obj[str[i]] + 1;
      } else {
        obj[str[i]] = 1;
      }
    }
  }
  return obj;
}

const str = "Hello World";

const res = charCount(str);
console.log(res);
