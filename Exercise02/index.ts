//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase

let myNameLowerCase: string = "faizan ahmed";
myNameLowerCase= myNameLowerCase.toLowerCase();
console.log("Lower Case: ",myNameLowerCase);

let myNameUpperCase: string = "faizan ahmed";
myNameUpperCase = myNameUpperCase.toUpperCase();
console.log("UpperCase: ",myNameUpperCase);

let myName ="faizan ahmed";
const newName = myName.split(" ").map((l: string) => l[0].toUpperCase() + l.substring(1)).join(" ")
console.log(newName)

