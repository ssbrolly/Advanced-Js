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

// function retirement(retireAge) {
//     let a = " years until retirement";
//     return function(birthYear) {
//         let age = 2018 - birthYear;
//         console.log((retireAge - age) + a);
//     };
// };

// let retirementUS = retirement(66);
// let retirementGermany = retirement(65);
// let retirementIceland = retirement(67);

// retirementUS(1977);
// retirementGermany(1977);
// retirementIceland(1977);

// retirement(65)(1979);

// function interviewQuestions(job) {
//     return function(name) {
//         if (job === "designer") {
//             console.log("So " + name + " Can you tell me somthing about UX");
//         } else if (job === "teacher") {
//             console.log("What subject do you teach " + name + "?");
//         } else {
//             console.log("So then, what do you do? " + name);
//         };
//     };
// };

// let teacher = interviewQuestions("teacher");
// teacher("john");

// interviewQuestions("designer")("dave");

// let john = {
//     name: "John",
//     age: 26,
//     job: "teacehr",
//     presentation: function(style, timeOfDay) {
//         if (style === "formal") {
//             console.log("Good " + timeOfDay + " Ladies and Gentlemen! I'm " + this.name + ", I'm a" + this.job + " and I'm " + this.age + " years old." );
//         } else if (style === "friendly") {
//             console.log("Hey What's up ? " + "I'm " + this.name + ", I'm a " + this.job + " and I'm " + this.age + " years old. Have a nice " + timeOfDay );
//         }
//     }
// };

// let emily = {
//     name: "Emily",
//     age: 35,
//     job: "designer"
// };

// let johnFriendly = john.presentation.bind(john, "friendly");
// let emilyFormal = john.presentation.bind(emily, "formal");

// emilyFormal("afternoon");
// johnFriendly("morning");
// john.presentation("formal", "afternoon");
// john.presentation("friendly", "evening");
// john.presentation.call(emily, "friendly", "afternoon");

// let years = [1975, 2000, 1979, 1945, 1953];

// function calcArray(arr, fn) {
//     let arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     };
//     return arrRes;
// };

// function calcAge(age) {
//     return 2018 - age;
// };

// function calcFullAge(limit, age) {
//     return age >= limit;
// };

// let ages = calcArray(years, calcAge);
// let fullJapan = calcArray(ages, calcFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);


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

// (function () {
//     function Question(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     };

//     Question.prototype.displayQuestions = function () {
//         console.log(this.question);

//         for (let i = 0; i < this.answers.length; i++) {
//             console.log(i + ":" + this.answers[i]);
//         }
//     };

//     Question.prototype.checkAnswers = function (ans) {
//         if (ans === this.correct) {
//             console.log("Correct Answer");
//         } else {
//             console.log("Wrong Answer");
//         };
//     };

//     let question1 = new Question("whats up", ["yes", "no",], 0);
//     let question2 = new Question("whats down", ["not up", "not down", "not anything"], 0);
//     let question3 = new Question("what is not", ["not is not", "not is hot", "not is fat"], 0);
//     let questions = [question1, question2, question3];
//     let n = Math.floor(Math.random() * questions.length);

//     questions[n].displayQuestions();

//     let answer = parseInt(prompt("Please select the correct answer"));

//     questions[n].checkAnswers(answer);
// })();

function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
};

q1 = new Question("question1", ["wrong", "wrong", "right"], 2);
q2 = new Question("question2", ["wrong", "right", "wrong"], 1);
q3 = new Question("question3", ["right", "wrong", "wrong"], 0);
q4 = new Question("question4", ["wrong", "wrong", "right"], 2);

let questions = [q1, q2, q3, q4];