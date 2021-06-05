const nums = [1, 2, 3, 4, 5]
// 0
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
let sum = 0

for (let num of nums) {
    sum += num
}

console.log(sum)

// const sumReduce = nums.reduce(function (previous, current) {
//     return previous + current
// }, 0)

const sumReduce = nums.reduce((p, c) => p + c, 0)

console.log(sumReduce)
