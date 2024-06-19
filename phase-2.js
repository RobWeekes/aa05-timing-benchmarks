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
  // Fill this in

}


const increment = 1;
const sums = addNums10(increment);
console.log(sums);
console.log(sums[7]); // 36
console.log(sums[9]); // 55

const increment2 = 10;
const sums2 = addNums10(increment2);
console.log(sums2);
console.log(sums2[0]) // 55; // Sum of nums 1 through 10
console.log(sums2[1]) // 210; // Sum of nums 1 through 20
console.log(sums2[5]) // 1830; // Sum of nums 1 through 60
console.log(sums2[9]) // 5050; // Sum of nums 1 through 100




module.exports = [addNums10, addManyNums10];
