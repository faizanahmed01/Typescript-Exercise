//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let myGuestLists = [
    "Omer",
    "Arsalan",
    "Hassan",
];
// for(let myGuestList of myGuestLists)
// {
//     console.log(`${myGuestList} I am inviting you on dinner tonight`)
// }
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//guests can’t make the dinner
let guestcantmakethedinner = "Hassan";
console.log(`${guestcantmakethedinner} Cant make it to dinner`);
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let newguest = "Yasir";
let indexofguestHowCanMakeit = myGuestLists.indexOf(guestcantmakethedinner);
//console.log(indexofguestHowCanMakeit);
//console.log(`${newguest} i am invitng you on dinner tonight please come and join us`);
if (indexofguestHowCanMakeit !== -1) {
    myGuestLists[indexofguestHowCanMakeit] = newguest;
}
console.log(myGuestLists[2]);
//Print a second set of invitation messages, one for each person who is still in your list.
console.log("Second set of invitation message:");
myGuestLists.forEach((guest) => {
    console.log(`Dear ${guest},you are invited to dinner.`);
});
export {};
