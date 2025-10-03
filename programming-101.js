console.log("Hello World");
console.log(8);
console.log(true);

const a = 10;
const b = 9;

let firstName = "Saket";
let lastName = "Abhishek";

const sum = a + b;
const multiply = a * b;
const diff = a - b;

console.log(sum, multiply, diff);

let fullName = firstName + " " + lastName;
console.log(fullName);

let arr = [1, 2, 3, 4, 5];
console.log(arr[2]);
console.log(arr.length);
let arr2 = ["akshay", "Abhishek", "John", "Doe"];
console.log(arr2[2]);
console.log(arr2.length);
let arr3 = [2, "Saket", true, "Hello", [1, 2, [3, 4]]];

console.log(arr3[4][2][0]);

let obj = {
  name: "Saket",
  age: 21,
  isStudent: true,
  courses: ["JavaScript", "Python", "Java"],
  address: {
    city: "Delhi",
    state: "India",
  },
};

// Stored in Table for Object like key value pair
console.log(obj.name);
console.log(obj.age);
console.log(obj.isStudent);
console.log(obj.courses);
console.log(obj.courses[1]);
console.log(obj.address.city);
