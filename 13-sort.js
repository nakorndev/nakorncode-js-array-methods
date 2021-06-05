const data = [2, 4, 3, 5, 1]

// data.sort(function (a, b) {
//     // a = 4, b = 2
//     // a = 3, b = 4
//     // a = 5, b = 3
//     // a = 1, b = 5

//     // a - b
//     // 4 - 2 = 2 right
//     // 3 - 4 = -1 left
//     // 5 - 3 = 2 right
//     // 1 - 5 = -4 left
// })

console.log(data)
console.log(data.sort())
console.log(data.reverse())

const users = [
    { name: 'John', salary: 25000 },
    { name: 'Joe', salary: 18000 },
    { name: 'Jane', salary: 26000 },
    { name: 'Jim', salary: 19000 },
]

console.log(users.sort(function (a, b) {
    return a.salary - b.salary
}))

console.log(users.sort(function (a, b) {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()
    if (nameA < nameB) {
        return -1
    }
    if (nameA > nameB) {
        return 1
    }
    return 0
}))
