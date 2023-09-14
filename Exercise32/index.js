/* T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
that should be printed on the shirt. The function should print a sentence summarizing
the size of the shirt and the message printed on it. Call the function. */
//  Create Function
let size = "Large";
let message = "Full Stack Developer";
function make_shirt(size, message) {
    console.log(`This is ${size} size`);
    console.log(`Hi i am working as ${message}`);
    return `Size: ${size} , Message: ${message} `;
}
// Calling function
make_shirt(size, message);
export {};
