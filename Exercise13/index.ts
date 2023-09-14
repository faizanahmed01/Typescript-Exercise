//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let myGuestLists:Array<string> = [

    "Omer",
    "Arsalan",
    "Hassan",
    
]

//step 1 - Informing people that you found a bigger dinner table.

for(let guest of myGuestLists)
{
console.log(`Hi ${guest} I just found a bigger dinner table`);
}


// step 2 : Add new guest to the beginning of your array

let NewGuest: string = "Ahmed";
myGuestLists.unshift(NewGuest);
//console.log(myGuestLists);




//step 3: Add one new guest to the middle of your array. 
let newguestInMiddle : string = "Asif khan";
let middleIndex:number = Math.floor(myGuestLists.length/2)
myGuestLists.splice(middleIndex,0,newguestInMiddle)
//console.log(myGuestLists);

//• Use append() to add one new guest to the end of your list.
let NewGuestAtEnd: string = "Sarfaraz Ahmed";
myGuestLists.push(NewGuestAtEnd);
//console.log(myGuestLists);

//• Print a new set of invitation messages, one for each person in your list.

console.log("New set of invitation messages");
for (let guest of myGuestLists)
{
    console.log(`Dear ${guest} you are invited to dinner`)
} 


    