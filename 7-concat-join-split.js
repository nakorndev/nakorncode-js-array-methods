const input1 = ['a', 'b', 'c']
const input2 = ['d', 'e', 'f']

console.log(input1 + input2)
console.log([input1, input2])
console.log([...input1, ...input2])
console.log(input1.concat(input2))

console.log(input1.join('+')) // array to string
console.log(input1.join(''))

const input3 = 'apple;banana;cherry'
console.log(input3)
console.log(input3.split(';')) // string to array
