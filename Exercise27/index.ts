// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

//Empty Array Case
const emptyArrayUserName:string[] = []

//Non-Empty Array
let userNames:string[]=['admin','Omer','Arsalan','Hassan','Basit'];

//Function
function greetUsers(userNames:string[]):void
{
    if(userNames.length===0)
    {
        console.log("We need to find some users!");
        return; 
    }

   for(const userName of userNames)
   {
    if(userName.toLowerCase() === 'admin')
    {
        console.log(`Hello admin, would you like to see a status report ?`)

    }
    else
    {
        console.log(`Hello ${userName},thank you for logging in again.`)
    }
   }

}


console.log("For Non - Empty UserName: \n");
greetUsers(userNames);

//
userNames = [];

console.log("/n/n For Empty UserName: \n");
greetUsers(userNames);

