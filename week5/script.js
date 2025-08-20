console.log("yo, what's going on mate yuhhhh");

// const = constant
// string variables
const name = "Deez Nuts";
const age = "16";
console.log(name, age);

// camelCase, first letter capital after first word
let myName = "Calvin Vuong";
console.log(myName, "the goat ren");

// number variables add/subtract/multiply/divide
let a = 10;
let b = 1000;
let c = a + b;
console.log(a * b + c);

// object = collection of similar variables
const myStudentRecord = { name: "Calvin", id: 4956, city: "Melbourne" };
console.log(myStudentRecord.city);

const myAsRecord = { As1: 90, As2: 80, As3: 90 };
const total = myAsRecord.As1 + myAsRecord.As2 + myAsRecord.As3;
console.log(total);

// boolean = test condition check True or False
const isItEvening = true;
const itItRaining = false;

let score = 55;
if (score > 80) {
  console.log("congrats on getting HD!");
} else if (score <= 80 && score > 70) {
  console.log("meh you're aight i guess");
} else if (score <= 70 && score > 50) {
  console.log("aye man you getting close to failing");
} else if (score < 50) {
  console.log("you are terrible");
}

// comparing/checking values, use 3 "="
let marks = "88";
let marks2 = 88;
console.log(marks === marks2);

// ` = back ticks
// replaces the "" allows code/empty lines to be in different lines
// shows content in console in different lines
const myAddress = `rmit university 124
latorbe st

melbourne`;
console.log(myAddress);
const myDetails = `hello, I am ${myName}`;
console.log(myDetails);

// const stud1 = "Alice";
// const stud2 = "Sarah";
// const stud3 = "Jack";
// const stud4 = "Mike";
// console.log(`Hello, ${stud1}`);
// console.log(`Hello, ${stud2}`);
// console.log(`Hello, ${stud3}`);
// console.log(`Hello, ${stud4}`);

// Array = [0,1,2,3,4...]
let stud = ["Alice", "Sarah", "Jack", "Mike", "Emily"];
// console.log("hello", stud[0]);
// console.log("hello", stud[1]);
// console.log("hello", stud[2]);
// console.log("hello", stud[3]);
// console.log("hello", stud[4]);

// For Loop = Optimised Array Code
console.log("array size", stud.length);
for (let i = 0; i < stud.length; i++) {
  console.log("value of i", i);
  console.log("hello", stud[i]);
}
