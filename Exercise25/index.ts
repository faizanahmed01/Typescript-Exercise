// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ["apple","mango","banana"]

console.log(`My Favourite Fruit is ${favorite_fruits}`)

if(favorite_fruits.includes("apple"))
{
    console.log("I like apples")
}
if(favorite_fruits.includes("mango"))
{
    console.log("mango are delicious")
}
if(favorite_fruits.includes("banana"))
{
    console.log("I enjoye banana")
}
if(favorite_fruits.includes("orange"))
{
    console.log("I like orange")
}



