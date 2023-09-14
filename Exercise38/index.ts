/* Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase 
 the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */



const magicianNames:string[] = ['Magic Man Fred.',' David Blaine','Harry Houdini','David Copperfield','Dai Vernon'];

function show_magicians(magicians:string[]): void
{
   for(const magician of magicianNames)
    {
        console.log(magician);
    }
}
function make_great(magicians:string[]):string[]
{
  const greatMagicians: string[] = magicians.map(magician => `the Great ${magician}`);
  return greatMagicians; 
}


//modifies the array of magicians by adding the phrase

const greatMagicianNames: string[] = make_great(magicianNames);

//calling function for Original Magician 
console.log("Original Magicians:");
show_magicians(magicianNames);

//calling function for Great Magician
console.log("\nGreat Magicians:");
make_great(greatMagicianNames);
