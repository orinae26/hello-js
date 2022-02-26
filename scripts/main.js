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























