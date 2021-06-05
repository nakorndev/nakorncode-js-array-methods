const users = [
    { id: 11, name: 'John', grade: 3.55 },
    { id: 12, name: 'Joe', grade: 3.24 },
    { id: 13, name: 'Jane', grade: 3.98 }
    // { id, name, grade, greatGrade }
]

const sumGrade = users.map(function (value) {
    value.id = String(value.id).padStart(5, '0')
    value.greatGrade = value.grade >= 3.5
    return value
})

console.log(sumGrade)
