let student = {
    firstName: "Sujon",
    lastName: "Hossain",
    age: 21,
    height: 173,
    studentInfo:function(){
        console.log(`Name: ${this.firstName} ${this.lastName} Age: ${this.age} Height: ${this.height}`);
        
    }
}
// student.age = 22
// console.log(student.age);

// student.lastName = "Hera"
// console.log(student.firstName);
// console.log(student.lastName);

student.studentInfo()

var person = [{
    name: 'Sujon Hossain',
    age: 21,
    skills: ['Javascript', 'React', 'C program'],
    print: function () {
        console.log(`Name: ${this.name} Age: ${this.age} Skill: ${this.skills}`);
        console.log(this.name);

    }
},
    {
        name: 'Sujon Hossain',
        age: 21,
        skills: ['Javascript', 'React', 'C program'],
        print: function () {
            console.log(`Name: ${this.name} Age: ${this.age} Skill: ${this.skills}`);
            console.log(this.name);

        }
    },
    {
        name: 'Sujon Hossain',
        age: 21,
        skills: ['Javascript', 'React', 'C program'],
        print: function () {
            console.log(`Name: ${this.name} Age: ${this.age} Skill: ${this.skills}`);
            console.log(this.name);

        }
    }]

// person.print()

// for (const i in person) {
//    console.log(person[i]);
   
// }
// for (const i in person){
//     console.log(person[i]);
    
// }
console.log(person.map(person => person.name) );


person.forEach(person => {
    console.log(person.skills);
    
});