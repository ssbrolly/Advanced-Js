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

function Person(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

Person.prototype.calcAge = function() {
    console.log(2018 - this.birthYear); 
};


let john = new Person("Jon", 1979, "teacher");
let jane = new Person("Jane", 1996, "Designer");
let mark = new Person("Mark", 1975, "SalesPerson");

john.lastName = "Smith";
john.fullName = function() {
    console.log(this.name + " " + this.lastName);
};
john.fullName();
john.calcAge();
console.log(john.name + john.lastName);
;