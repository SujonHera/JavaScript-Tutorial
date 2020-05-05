const numbers = [22, 2, 3, 33, 53, 22, 52, 75]

const newNumbers = numbers.find(num => 30 <= num)
console.log(newNumbers)

// find method work for array 
// find method work in a condition and return one element
// first element send from array

const studentsResult = [
    {name: 'Sujon Hossain', cgpa: 2.0},
    {name: 'Ripa Hossain', cgpa: 3.6},
    {name: 'shibbir Hossain', cgpa: 3.0}
]

const newStudentResult = studentsResult.find((student, index) => {
    return student.name === "Sujon Hossain"
})

const newStudentResultMap = studentsResult.map(student => {
    return student.name === "Sujon Hossain"
})

console.log(newStudentResult) // {name: "Sujon Hossain", cgpa: 2}

console.log(newStudentResultMap)// [true, false, false]