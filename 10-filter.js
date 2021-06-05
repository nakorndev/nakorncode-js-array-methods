const users = [
    { id: 11, name: 'John', grade: 3.55 },
    { id: 12, name: 'Joe', grade: 3.24 },
    { id: 13, name: 'Jane', grade: 3.98 }
]

const usersWhoGreatGrade = users.filter(function (value) {
    return value.grade >= 3.5
})

// const usersWhoGreatGrade = users.filter(v => v.grade >= 3.5)

console.log(usersWhoGreatGrade)
