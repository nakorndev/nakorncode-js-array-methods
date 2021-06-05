const users = [
    { id: 11, name: 'John', grade: 3.55 },
    { id: 12, name: 'Joe', grade: 3.24 },
    { id: 13, name: 'Jane', grade: 3.98 }
]

const getId12 = function (value) {
    return value.id == 12
}

const findUser = users.find(getId12)
const findUserIndex = users.findIndex(getId12)

console.log(findUser)
console.log(findUserIndex)
