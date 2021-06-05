const data = [1, 2, 3, [4, 5, [6, [7, 8, [9, 10, 11]]]]]

console.log(data)
console.log(data.flat(2))
console.log(data.flat(Infinity))
