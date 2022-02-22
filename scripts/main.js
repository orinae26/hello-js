//Objects
const person = {
  name:['Bob', 'Smith'],
  age:32,
  bio: function (){
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },

  introduceSelf: function (){
    console.log(`Hi, my name is ${this.name[0]}`);
  }
};