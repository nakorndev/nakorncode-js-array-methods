const data1 = [1, 2, 3, 4]
const data2 = [8, 9, 10, 11]
const data3 = [11, 12, 13, 14]

// let result = true
// for (let item of data1) {
//     if (item >= 10) {
//         result = false
//     }
// }
// console.log(result)

// const shouldNotMoreThan = function (count) {
//     return function (value) {
//         return value < count
//     }
// }

const shouldNotMoreThan = c => v => v < c

// every = and (true && true)
console.log(data1.every(shouldNotMoreThan(10)))
console.log(data2.every(shouldNotMoreThan(10)))
console.log(data3.every(shouldNotMoreThan(10)))

// some = or (true || false)
console.log(data1.some(shouldNotMoreThan(10)))
console.log(data2.some(shouldNotMoreThan(10)))
console.log(data3.some(shouldNotMoreThan(10)))
