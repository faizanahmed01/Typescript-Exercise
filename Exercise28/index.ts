// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

//list of current users
const current_users:string[] = ["Ahmed","Farhan","Irfan","Salman","Amir"];

//list of new users
const new_users:string[] = ["Ali","Farhan","Irfan","Salman","Rameez"];

function checkUserName(current_users:string[] , new_users:string[]) : void
{
    const lowerCaseCurrentUsers = current_users.map(users=>users.toLowerCase());

    for(const newUser of new_users)
    {
        const lowerCaseNewUsers = newUser.toLowerCase();
        if(lowerCaseCurrentUsers.includes(lowerCaseNewUsers))
        {
            console.log(`UserName "${newUser}" is already taken please enter a new user name`);
            
        }
        else
        {
            console.log(`UserName "${newUser}" is available`);
        }

    }

}   
checkUserName(current_users,new_users);
