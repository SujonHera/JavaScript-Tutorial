const studentsResult = [
    { name: 'Sujon Hossain', cgpa: 3.5 },
    { name: 'Ripa Hossain', cgpa: 3.6 },
    { name: 'shibbir Hossain', cgpa: 3.0 },
    { name: 'Modhu Islam ', cgpa: 1.6}
]

const numbers = [3, 2, 1, 5, 6, 7, 85, 75, 3, 77, 88, 9]

const filterNumber = numbers.filter(number => {
    return number > 4
})

console.log(filterNumber)

const filterStudent = studentsResult.filter(student => student.cgpa > 2)
console.log(filterStudent)