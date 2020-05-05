class Employee {
    constructor(giveName, givenExperience, givenSalary) {
        this.name = giveName
        this.experience = givenExperience
        this.salary = givenSalary
    }
    print() {
        return `Your Name: ${this.name} Your Experience: ${this.experience} Your Salary: ${this.salary}`
    }
}

class Programmer extends Employee {
    constructor(giveName, givenExperience, givenSalary, language, github) {
        super(giveName, givenExperience, givenSalary)
        this.language = language
        this.github = github
    }

    favoriteLanguage(){
        if(this.language.toLowerCase() == 'python'){
            return 'Python'
        }
        else{
            return 'Javascript'
        }
    }
    static addNumber(a, b){
        return a + b;
    }
}


const programmer =  new Programmer("Sujon Hossain", 3, 25000, 'c', 'SujonHera')

console.log(programmer)
console.log(programmer.favoriteLanguage())
console.log(Programmer.addNumber(30, 29));



let employeeName, employeeExperience, employeeSalary;

const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    const inputName = document.querySelector('#name').value
    const inputExperience = document.querySelector('#experience').value
    const inputSalary = document.querySelector('#salary').value

    newFunction(inputName, inputExperience, inputSalary)
})


const newFunction = (inputName, inputExperience, inputSalary) => {

    const newEmployee = new Employee(inputName, inputExperience, inputSalary)
    // console.log(newEmployee.print());
}



