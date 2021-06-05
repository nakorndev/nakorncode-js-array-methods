const fruits = ['apple', 'banana', 'cherry']

console.log(fruits)

for (let fruit of fruits) {
    console.log(fruit.toUpperCase())
}

// fruits.forEach(function (value) {
//     console.log(value.toUpperCase())
// })

// fruits.forEach(function (value, index) {
//     console.log(index, value.toUpperCase())
// })

fruits.forEach(v => console.log(v.toUpperCase()))
