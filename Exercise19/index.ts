//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

//Function Create a fruit project



function createFruit(name:string,color:string,taste:string)
{
    return{
        name,
        color,
        taste,
    };
}

const fruits = [
    createFruit("Apple","Red","Sweet"),
    createFruit("Banana","Yellow","Sweet"),
    createFruit("Orange","Orange","Citrusy"),
    createFruit("Grapes","Green","Sweet"),
    createFruit("Stawebery","Red","Sweet"),
];

//Access an invalid index

const invalidIndex = 10; //There are only 5 elements  inthe array, so this will call an error

console.log(`Fruits in index${invalidIndex}:`,fruits[invalidIndex]);

fruits.forEach((fruits)=>
{
    console.log(`Name:${fruits.name}, Color: ${fruits.color}, Taste: ${fruits.taste}`);

});

export {};