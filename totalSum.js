function totSum(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }

    return sum;
}

const res = totSum(5)
console.log("res =>", res)