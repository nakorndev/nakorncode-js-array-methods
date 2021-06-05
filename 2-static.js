const input1 = 'string'
const input2 = 123
const input3 = ['string', 123]

console.log(Array.isArray(input1))
console.log(Array.isArray(input2))
console.log(Array.isArray(input3))

// const num = Array.from({ length: 10 }, function (value, index) {
//     return index + 1
// })

// const obj = { length: 20 }
// const fn = function (value, index) {
//     return index + 1
// }

// const num = Array.from(obj, fn)

const num = Array.from({ length: 10 }, (v, i) => i + 1)

console.log(num)
