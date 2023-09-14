/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message. */
//  Create Function
let size = "Large";
let message = "Hi I am working as a Full Stack Developer";
function make_shirt(size, message) {
    console.log(`Shirt Size: ${size} & Message: ${message}`);
    return `Size: ${size} , Message: ${message}`;
}
// Calling function
make_shirt(size, message);
make_shirt("Medium", "Hi I am working as a WEB Developer");
make_shirt("Large", "Hi I am working as a Dot Net Developer");
export {};
