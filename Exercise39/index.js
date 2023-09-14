/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged, return the
 new array and store it in a separate array. Call show_magicians() with each array to show that you
 have one array of the original names and one array with the Great added to each magician’s name.*/
const magicianNames = ['Magic Man Fred.', 'David Blaine', 'Harry Houdini', 'David Copperfield', 'Dai Vernon'];
function show_magicians(magicians) {
    for (const magician of magicianNames) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}
//modifies the array of magicians by adding the phrase
const greatMagicianNames = make_great(magicianNames);
//calling function for Original Magician 
console.log("Original Magicians:");
show_magicians(magicianNames);
//calling function for Great Magician
console.log("Great Magicians:");
make_great(greatMagicianNames);
export {};
