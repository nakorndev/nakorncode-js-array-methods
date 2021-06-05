const fruits = ['Apple', 'Banana', 'Cherry']
// const fruits = new Array('Apple', 'Banana', 'Cherry')

Array.prototype.toString = function () {
    return this.join('/')
}

console.log(fruits)
console.log(fruits.toString())
