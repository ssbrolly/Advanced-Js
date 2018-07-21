// function constructor

// var john = {
//     name: "John",
//     birthYear: 1990,
//     job: "teacher"
// };

// let Person = function(name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
//     // this.calcAge = function() {
//     //     console.log(2018 - this.birthYear);
//     // };
// };

// function Person(name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
// }

// Person.prototype.calcAge = function() {
//     console.log(2018 - this.birthYear); 
// };

// let john = new Person("Jon", 1979, "teacher");
// let jane = new Person("Jane", 1996, "Designer");
// let mark = new Person("Mark", 1975, "SalesPerson");

// Person.prototype.lastName = "Smith";

// john.fullName = function() {
//     console.log(this.name + " " + this.lastName);
// };
// john.fullName();
// john.calcAge();
// console.log(john.name + john.lastName);
// ;

// Object.create

let personProto = {
    calcAge: function() {
        console.log(2018 - this.birthYear);
    }
};

let john = Object.create(personProto);
john.name = "John";
john.birthYear = 1990;
john.job = "teacher";

let jane = Object.create(personProto, {
    name: {value: "Jane"},
    birthYear: {value: 1992},
    job: {value: "Designer"}
});

function Person(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
    this.age = function() {
        return 2018 - this.birthYear;
    }
}

let dan = new Person("jon", 1993, "driver");
console.log(dan.age());