let grades = [
    [1, 2, 4, 52, 23, 44],
    [34, 54, 55, 35, 66, 77],
    [22, 35, 56, 66, 66]
]

console.log(grades)

for (let i = 0; i < grades.length; i++) {
    let element = grades[i];
    for (let j = 0; j < element.length; j++) {
        const element2 = element[j];
        console.log(element2);
    }
    
}

let marks = [
    ...[1, 2, 4, 52, 23, 44],
    ...[34, 54, 55, 35, 66, 77],
    ...[22, 35, 56, 66, 66]
]
console.log(marks)

let arr = [2, 3, 54, 21, 45, 93, 200, 2, 25, 94, 62, 6]
let largest = arr[0]
let index = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > largest){
        largest = arr[i]
        index = i;
    }
    
}

console.log(largest)
console.log(index)