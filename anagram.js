function anagram(str1,str2){
    let obj1 = {}
    let obj2 = {}
    for(let char of str1){
        obj1[char] = obj1[char] + 1 || 1
    }
     for(let char of str2){
        obj2[char] = obj2[char] + 1 || 1
    }
    for(let key in obj1){
        if(!(key in obj2)){
            return false
        }
        if(obj1[key] !== obj2[key]){
            return false
        }   
    }
    return true
}
const str1 = "aab"
const str2 = "baa"
const res = anagram(str1,str2)
console.log(res)