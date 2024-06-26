// const stud1 = {
//     name: 'Maanav',
//     age: 26,
//     marks: 90,
//     getMarks: function () {
//         return this.marks;
//     },
// };

// const stud2 = {
//     name: 'Aum',
//     age: 25,
//     marks: 85,
//     getMarks: function () {
//         return this.marks;
//     },
// };

// const stud3 = {
//     name: 'Yash',
//     age: 26,
//     marks: 89,
//     getMarks: function () {
//         return this.marks;
//     },
// };

// let arr = [1,2,3];
// arr.sayHello = () => {
//     console.log("Hello! i am arr");
// };

// Factory function
// function PersonMaker(name,age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };

//     return person;
// }

// let p1 = new Person("adam",25);
// let p2 = new Person("eve",25);

// Consturctor- nothing returned & start with capital
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`Hi, I am ${this.name}`)
// }

// let p1 = new Person("adam",25);
// let p2 = new Person("eve",25);

// Classes
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, I am ${this.name}`);
//     }
// }

// let p1 = new Person("adam",25);
// let p2 = new Person("eve",25);

// Inheritance
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks = marks;
    }
    
}

let stu1 = new Student("adam",25);

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject;
    }
    
}

let tech1 = new Teacher("adam",25);

