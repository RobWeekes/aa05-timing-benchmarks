// Adds up positive integers from 1-n
function addNums(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += addNums(i);
    }
    return sum;
}


// local testing

console.log(addNums(1)); // 1
console.log(addNums(2)); // 3
console.log(addNums(3)); // 6
console.log(addNums(4)); // 10
console.log(addNums(5)); // 15
console.log(addNums(10)); // 55

// console.log(addManyNums(3)); // 10
// console.log(addNums(10000)); // 50005000

// const startTime = Date.now();
// addNums(10000000);
// const endTime = Date.now();

// const runtime = endTime - startTime;
// console.log(`Runtime: ${runtime}`)



module.exports = [addNums, addManyNums];