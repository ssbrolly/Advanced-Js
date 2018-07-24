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

// let years = [1996, 1979, 1977, 2017];

// function calcArray(arr, fn) {
//     arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     };
//     return arrRes;
// };

// function calcAge(birthYear) {
//     return 2018 - birthYear;
// };

// function isFullAge(age) {
//     return age >= 21;
// };

// function maxHeartRate(age) {
//     if (age >= 18 && age <= 81) {
//         return Math.round(206.9 - (0.67 * age));
//     } else {
//         return -1;
//     }
// };

// let ages = calcArray(years, calcAge);
// let legalAge = calcArray(ages, isFullAge);
// let heartRate = calcArray(ages, maxHeartRate);

// console.log(ages);
// console.log(legalAge);
// console.log(heartRate);


// let years = [1956, 1979, 1978, 1977, 2007];

// function calcArray(arr, fn) {
//     let arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     };
//     return arrRes;
// };

// function calcAge(year) {
//     return 2018 - year
// };

// function fullAge(age) {
//     return age >= 18;
// };

// function retirement(age) {
//     return 65 - age;
// };

// function yearBorn(age) {
//     return 2018 - age;
// };

// function reverse() {
//     return ages.reverse();
// };


// let ages = calcArray(years, calcAge);
// let adult = calcArray(ages, fullAge);
// let retired = calcArray(ages, retirement);
// let birthYear = calcArray(ages, yearBorn);


// console.log(ages);
// console.log(reverse());
// console.log(adult);
// console.log(retired);
// console.log(birthYear);

// functions returning functions

// function interviewQuestions(job) {
//     if (job === "teacher") {
//         return function(name) {
//             console.log("What subject do you teach " + name + "?");
//         };
//     } else if(job === "designer") {
//         return function(name) {
//             console.log("So " + name + " Can you tell me somthing about UX");
//         };
//     } else {
//         return function(name) {
//             console.log("So then, what do you do? " + name);
//         };
//     };
// };

// interviewQuestions("teacher")("Mark");
// interviewQuestions("designer")("Bark");
// interviewQuestions("driver")("jane");

// IIFE Imediately Invoked Function Expression data privacy;

// (function() {
//     let score = Math.random() * 10;
//     console.log(score >= 6);
// }) ();

// (function(luck) {
//     let score = Math.random() * 11; 
//     if (score >= 6) {
//         console.log("Win");
//     } else {
//         console.log("Loose");
//     }
// }) (2);

// Closures

function retirement(retirementAge) {
    let a = " years left until retirement.";
    return function(birthYear) {
        let age = 2018 - birthYear;
        console.log((retirementAge - age) + a);
    };
};

let retirementUS = retirement(66);
retirementUS(1979);

retirement(65)(1979);
