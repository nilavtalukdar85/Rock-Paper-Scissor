//Classes and objects
const student = {
    fullName : 'Nilav Talukdar',
    marks : 94.4,
    printMarks : () => {
        console.log(`marks = ${student.marks}`);
    }
}
const employee = {
    fullName : 'Nilav Talukdar',
    Education : 'B.Tech in EEE',
    calcTax : (salary) => {
        let tax = (10 / 100) * (salary);
        let final_Salary = (salary) - (tax);
        console.log(final_Salary);
        
    }
} //Propotype is a special property of object in javascript, it's type is a refernce to a function
const Nilav = {
    salary : 100000,
    calcTax : (salary) => {
        let tax = (20 / 100) * (salary);
        let final_Salary = (salary) - (tax);
        console.log(final_Salary);
    }
}
Nilav.__proto__ = employee;
Nilav.calcTax(Nilav.salary);
class car {
    constructor(color) {
        console.log('Creating new object');
        this.color = color;
    }
    start() {
        console.log('start'); //will follow single responsibility principle, we will create different classes for different purpose
    }
    stop() {
        console.log('stop')
    }
    setBrand(brand) {
        this.brandName = brand; //We can also use it in a constructor at the time of initialization
    }
}
let SF90 = new car('Red'); //used when we need to set some properties for an object at the time of initilization
SF90.setBrand('Ferrari');
console.log(SF90);
let LaFerrari = new car;
LaFerrari.setBrand('Ferrari');
console.log(LaFerrari);
//Inheritance
class parent {
    hello() {
        alert('Hello');
    }
}
class child extends parent {}
const childObj = new child;
console.log(childObj);
class person {
    constructor(name) {
        this.species = 'Human';
        this.name = name;
    }
    eat() {
        console.log('Eat');
    }
    sleep() {
        console.log('codes');
    }
    work(){
        console.log('Eat 5 star do nothing')
    }
    setGender() {
        this.gender = 'Male';
        this.LGBT = 'None'
    }
}
class engineer extends person { //child class is also called as derived class
    constructor(branch, name) {
        super(name);
        this.branch = branch;

    }
    work() {
        super.eat();
        console.log('Solve problems'); //child method will override the parent method
        super.sleep();
    }
    setGender() {
        this.gender = 'Female';
    }
}
const engineerObj = new engineer('Electrical', 'Nilav');
engineerObj.setGender();
console.log(engineerObj);
//Practice questions
//1st question
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log(`User Email = ${this.email}`);
        console.log(`User Name = ${this.name}`);
    }
}
//2nd question
class Admin extends User {
    constructor(name, email) {
        super(name, email);
    } 
    editData() {
        let userName = prompt('Edit user name');
        let userEmail = prompt('Edit user email');
        this.name = userName;
        this.email = userEmail;
    }
}
const studnetData1 = new User('Nilav', 'nilav976@gmail.com');
const studentData2 = new Admin('Nilav', 'nilavtalukdar49@gmail.com');
console.log(studnetData1);
console.log(studentData2);
//Error handelling
let a = 5;
let b = 10;
console.log(`a + b = ${a + b}`);
console.log(`a + b = ${a + b}`);
try { //because of a small error the code after the error will not run, that's why error handelling is necessary
    console.log(`a + b = ${a + c}`);
} 
catch(err) {
    console.log(err); //err is an error object containing information about the error that can be passed as an argument to the catch method.
}
console.log(`a + b = ${a + b}`);