// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien_color = 'green';
console.log("1st version where align color is green");
if (alien_color === 'green') {
    console.log("Congratulations! you just earned 5 points");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! you just earned 10 points");
}
else if (alien_color === 'red') {
    console.log("Congratulations! you just earned 15 points");
}
else {
    console.log("unknow alien color");
}
//version 2nd
console.log("2nd version where align color is yellow");
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("Congratulations! you just earned 5 points");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! you just earned 10 points");
}
else if (alien_color === 'red') {
    console.log("Congratulations! you just earned 15 points");
}
else {
    console.log("unknow alien color");
}
// 3rd Version
console.log("3rd Version where alig color is red");
alien_color = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! you just earned 5 points");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! you just earned 10 points");
}
else if (alien_color === 'red') {
    console.log("Congratulations! you just earned 15 points");
}
else {
    console.log("unknow alien color");
}
export {};
