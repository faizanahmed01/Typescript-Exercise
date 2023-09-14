//Seeing the World: Think of at least five places in the world you’d like to visit.
//Step 1:  Store the locations in a array. Make sure the array is not in alphabetical order
let VisitWorld = ["Dubai", "Saudia", "Turkey", "Canada", "Malaysia"];
//Step 2: Print your array in its original order
console.log("Original Order");
console.log(VisitWorld);
//Step 3: Print your array in alphabetical order without modifying the actual list.
console.log("\n Array in Alphabetical order without modifying the actual list");
console.log([...VisitWorld].sort());
//Step 4: Show that your array is still in its original order by printing it.
console.log("Show that your array is still in its original order by printing it");
console.log(VisitWorld);
//Step 5: Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n Reverse Alphabetical Order of Array without changing the order of the original list");
console.log(...[VisitWorld].reverse());
//Step 6: Show that your array is still in its original order by printing it again
console.log("Your array is still in its original order");
console.log(VisitWorld);
//Step 7: Reverse the order of your list. Print the array to show that its order has changed
console.log("\n Reverse Alphabetical Order has Changed Now");
VisitWorld.reverse();
console.log(VisitWorld);
//Step 8: Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Back to Original");
VisitWorld.reverse();
console.log(VisitWorld);
//Step 9: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n Change to Alphabetical Order");
VisitWorld.sort();
console.log(VisitWorld);
//Step 10: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse Alphabetical Order Array");
VisitWorld.reverse();
console.log(VisitWorld);
export {};
