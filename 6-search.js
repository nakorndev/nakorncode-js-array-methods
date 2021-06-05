let fruits = ['grape', 'apple', 'banana', 'cherry', 'melon']

console.log(fruits)
console.log(fruits.indexOf('cherry'))
console.log(fruits.includes('cherry'))

// search & remove
const search = 'cherry'
const index = fruits.indexOf(search)

if (index >= 0) {
    fruits.splice(index, 1)
}

console.log(fruits)
