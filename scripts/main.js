//Objects
const person = {
  name:{
    first:'Bob',
    last: 'Smith'},
  age:32,
  bio(){
    console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
  },

  introduceSelf(){
    console.log(`Hi, my name is ${this.name.last}`);
  }
};

//get properties of objects
//dot notation
console.log(person.name.first);

console.log(person.age);
 console.log(person.bio());


 //bracket notation
 console.log(person["name"]["first"]);

 console.log(person["age"]);

 console.log(person["bio"]());

 console.log(person["introduceSelf"]());

//setting properties of objects

person["name"]["first"] = "Harry";

person["name"]["last"] = "Styles";

console.log(person["name"]["first"]);

person.age = 35;

person.farewell = function(){
  console.log(`${this.name.first} ${this.name.last} has left the building, bye for now.`);
}
person.eyes = "blue";

//Constructors

function Person(name){
  this.name = name;
  this.age = 27;
  this.introduceSelf = function(){
    console.log(`Hi, my name is ${this.name}`);
  }
}

//call Person constructor using new keyword

const frank = new Person ('Frank');
frank.name;
frank.age;
frank.introduceSelf();
console.log(frank.name);
console.log(frank.age);
console.log(frank.introduceSelf());

//object prototype:in-built property of objects

const myCity = {
  name : 'New York',

  population: 8000000,

  greetings (){
    console.log( `Greetings from ${this.name}`);
  }
}

console.log(myCity.greetings());

//get prototype of object myCity

console.log(Object.getPrototypeOf(myCity));

//shadowing properties
const myDate = new Date(1921,3,04);

console.log(myDate.getYear());

myDate.getYear = function (){
  console.log(`Its the end of the world as we know it.`);
}
console.log(myDate.getYear());

//setting a prototype
//using object.create(

const personPrototype = {
  greet (){
    console.log(`Hello there Beautiful`)
  }
}
const carl = Object.create(personPrototype);
console.log(carl.greet())
//using a constructor with object personPrototype and method greet

const personPrototype = {
  greet (){
    console.log(`Hello, my name is ${this.name}`);
  }

}

function Person2 (name){
  this.name = name;
}

Person2.prototype = personPrototype; //set person prototype property to point at personPrototype
Person2.prototype.constructor = Person2; //set person constructor property to the fuction used to create Person objects





















