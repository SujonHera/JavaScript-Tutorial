class Developer {
    constructor(name, phone, email, language, expriment) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.language = language;
        this.expriment = expriment;
    }
    print() {
        console.log("Programer Name: " + this.name);
        console.log("Phone Number: " + this.phone);
        console.log(this.email);
        console.log(this.language)
        console.log(this.expriment)
    }
    check() {
        if (this.language.toLowerCase() === 'javascript') {
            return "Javascript"
        } else {
            return "C"
        }
    }
    static canAnything() {
        return 203 * 2 * 23
    }
}

const Sujon = new Developer('Sujon Hossain', "29372394712", "m.sujon.hossain1@gmail.com", "JavaScript", 1)
Sujon.print()

console.log(Sujon.check());

console.log(Developer.canAnything());