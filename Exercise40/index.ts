/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. Call the function three times, 
using a different number of arguments each time. */


function make_sandwich(...items:string[]):void
{
    console.log("Sandwich Summary")
    if(items.length === 0)
    {
        console.log("- You ordered an empty sandwich please add some item")
    }
    else
    {
        items.forEach((items,i) => {
            console.log(`   ${i + 1}.${items}`);
        });
    }
    console.log("\n");
}
make_sandwich();
make_sandwich("Butter","Peanut","Juice","Icecream");
make_sandwich("Butter","Peanut","Chicken Sandwich","Beef Sandwich");

