
//declaring  and initializing variables

let myVariable = "Hello World";
console.log(myVariable);

//data types

//strings
let myString = "Hello World";

//numbers
let myNumber = 5;

//booleans
let myBoolean = true;

//arrays
let myArray = [1, 2, 3, 4, 5];

//objects
let myObject = {address: "123 Main St", city: "New York", state: "NY"};

//comments
/* multiline
comment */

//operators
//addition
1+1;
//subtraction
1-1;
//multiplication
1*1;
//division
1/1;
//equality
1===1;

//objects

let person = { 
    name:"John",
    age : 30,
    isMarried : false,
    address :{
        street : "123 Main St",
        city : "New York",
        state : "NY"
    }

}

//retrieve values

console.log(person.name);
console.log(person.age);
console.log(person.isMarried);



//let objct =(Object.values(person));
console.log(Object.values(person.address));

//Arrays

let names = ["Sam","Alex", "Maria","John"];
//retrieve elements from an array, index starts at 0
console.log(names[0]);

//loop through an array

for (n of names){
    // print each element

    console.log(n);
}

//index of an element
names.forEach(function(name, index){
    console.log(index + " => " + name);
});


//functions
//addition
function addition(x,y){
    return x+y; ;
};
console.log(addition(4,6));

//subtraction
function subtraction(x,y){
    return x-y;
};

console.log(subtraction(6,4));

//multiplication
function multiplication(x,y){
    return x*y;
};

console.log(multiplication(4,6));

//division
function division(x,y){
    return x/y;
};

console.log(division(6,4));

//modulus

function modulos(x,y){
    return x%y;
};

console.log(modulos(6,4));



















