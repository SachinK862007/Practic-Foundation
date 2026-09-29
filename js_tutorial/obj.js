const p = {
    firstname : "Matsre",
    lastname : "SK",
    age : 19,
    isstudent : true,
    say : function(){console.log("Welcome Master SK!")},
}

const p1 = {
    firstname : "Dumb",
    lastname : "Ass",
    age : 20,
    isstudent : false,
}

p.say();

console.log(p.firstname);
console.log(p.lastname);
console.log(p.age);
console.log(p.isstudent, '\n');

console.log(p1.firstname);
console.log(p1.lastname);
console.log(p1.age);
console.log(p1.isstudent);


const p2 = {
    name : "SK",
    food : "Pizza",

    //this keyword will not work with the arrow function
    say : function(){console.log(`I am ${this.name}`)},
    eat : function(){console.log(`${this.name} is eating ${this.food}`)},
}

p2.say();
p2.eat();

console.log('\n', p2);



//constructors in js

function Car(make, model, year, color, cost){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.cost = cost,
    this.drive = function(){console.log(`You drive ${this.model}`);}
}

const car1 = new Car("BMW", "M4-Compitation", "2024", "Red and Black", "$200k");
const car2 = new Car("Ford", "Mustang", "1997", "Red", "$250k");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log(car1.cost, '\n');
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
console.log(car2.cost, '\n');
car2.drive();


//class in js

