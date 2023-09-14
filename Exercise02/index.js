//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
let myNameLowerCase = "faizan ahmed";
myNameLowerCase = myNameLowerCase.toLowerCase();
console.log("Lower Case: ", myNameLowerCase);
let myNameUpperCase = "faizan ahmed";
myNameUpperCase = myNameUpperCase.toUpperCase();
console.log("UpperCase: ", myNameUpperCase);
let myName = "faizan ahmed";
const newName = myName.split(" ").map((l) => l[0].toUpperCase() + l.substring(1)).join(" ");
console.log(newName);
export {};
