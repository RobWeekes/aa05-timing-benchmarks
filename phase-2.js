const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
    let sumsArr = [];
    for(let i = increment; i <= increment * 10; i += increment) {
        sumsArr.push(addNums(i));
    }
    return sumsArr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
    let sums = [];
    for(let i = increment; i <= increment * 10; i += increment) {
        sums.push(addManyNums(i));
    }
    return sums;
}

// function addManyNums(n) {
//   let sum = 0;
//   for(let i = 1; i <= n; i++) {
//       sum += addNums(i);
//   }
//   return sum;
// }


// const increment = 1;
// const sums = addNums10(increment);
// console.log(sums);
// console.log(sums[7]); // 36
// console.log(sums[9]); // 55

// const increment2 = 10;
// const sums2 = addNums10(increment2);
// console.log(sums2);
// console.log(sums2[0]) // 55; // Sum of nums 1 through 10
// console.log(sums2[1]) // 210; // Sum of nums 1 through 20
// console.log(sums2[5]) // 1830; // Sum of nums 1 through 60
// console.log(sums2[9]) // 5050; // Sum of nums 1 through 100


// const increment = 1;
// const sums = addManyNums10(increment);
// console.log((sums[0])) // 1 // addManyNums(1)
// console.log((sums[1])) // 4 // addManyNums(2)
// console.log((sums[2])) // 10 // addManyNums(3)
// console.log((sums[3])) // 20 // addManyNums(4)
// console.log((sums[4])) // 35 // addManyNums(5)
// console.log((sums[5])) // 56 // addManyNums(6)
// console.log((sums[6])) // 84 // addManyNums(7)
// console.log((sums[7])) // 120 // addManyNums(8)
// console.log((sums[8])) // 165 // addManyNums(9)
// console.log((sums[9])) // 220 // addManyNums(10)

// const increment10 = 10;
// const sums10 = addManyNums10(increment10);
// console.log(sums10[0]) // 220; // addManyNums(10)
// console.log(sums10[1]) // 1540; // addManyNums(20)
// console.log(sums10[2]) // 4960; // addManyNums(30)
// console.log(sums10[3]) // 11480; // addManyNums(40)
// console.log(sums10[4]) // 22100; // addManyNums(50)
// console.log(sums10[5]) // 37820; // addManyNums(60)
// console.log(sums10[6]) // 59640; // addManyNums(70)
// console.log(sums10[7]) // 88560; // addManyNums(80)
// console.log(sums10[8]) // 125580; // addManyNums(90)
// console.log(sums10[9]) // 171700; // addManyNums(100)

// let start = Date.now();
// const increment50 = 100;
// const sums50 = addManyNums10(increment50);
// console.log(sums50[0]) // 220; // addManyNums(10)
// console.log(sums50[1]) // 1540; // addManyNums(20)
// console.log(sums50[2]) // 4960; // addManyNums(30)
// console.log(sums50[3]) // 11480; // addManyNums(40)
// console.log(sums50[4]) // 22100; // addManyNums(50)
// console.log(sums50[5]) // 37820; // addManyNums(60)
// console.log(sums50[6]) // 59640; // addManyNums(70)
// console.log(sums50[7]) // 88560; // addManyNums(80)
// console.log(sums50[8]) // 125580; // addManyNums(90)
// console.log(sums50[9]) // 171700; // addManyNums(100)
// // let end = Date.now();
// console.log(`Runtime: ${Date.now() - start}`)

module.exports = [addNums10, addManyNums10];
