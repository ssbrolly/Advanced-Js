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

// let personProto = {
//     calcAge: function() {
//         console.log(2018 - this.birthYear);
//     }
// };

// let john = Object.create(personProto);
// john.name = "John";
// john.birthYear = 1990;
// john.job = "teacher";

// let jane = Object.create(personProto, {
//     name: {value: "Jane"},
//     birthYear: {value: 1992},
//     job: {value: "Designer"}
// });

// function Person(name, birthYear, job ) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
// }

// let mike = new Person("Mike", 1993, "Trucker");
// Person.prototype.lastName = "Smith";

// let nike = Object.create(personProto)
// nike.name = "name";
// nike.lastName = "lastName";
// nike.birthYear= 1345;

// Primitive and Objects.

// primitives
// let a = 42;
// let b = a;
// a = 45;
// console.log(a);
// console.log(b);

// // objects
// let object1 = {
//     name: "Ike",
//     age: 26,
// }

// let object2 = object1;
// object1.age = 55;
// console.log(object2);
// console.log(object1);

// // Functions
// let age = 27;
// let obj = {
//     name: "Jonas",
//     city: "Lisbone",
// }

// function change(a, b) {
//     a = 30;
//     b = "San Francisco";
// }

// change(age, obj);
// console.log(age);
// console.log(obj.city);

// passing functions as arguments

let years = [1995,1965, 1937, 2005, 1998];

function calcArray(arr, fn) {
    let resArray = [];
};

let age = 27;
let obj = {
    a: 30,
    b: "Las Vegas",
}
age = obj.a;
console.log(age);