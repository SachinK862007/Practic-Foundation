//const p = {
//    firstname : "Matsre",
//    lastname : "SK",
//    age : 19,
//    isstudent : true,
//    say : function(){console.log("Welcome Master SK!")},
//}
//
//const p1 = {
//    firstname : "Dumb",
//    lastname : "Ass",
//    age : 20,
//    isstudent : false,
//}
//
//p.say();
//
//console.log(p.firstname);
//console.log(p.lastname);
//console.log(p.age);
//console.log(p.isstudent, '\n');
//
//console.log(p1.firstname);
//console.log(p1.lastname);
//console.log(p1.age);
//console.log(p1.isstudent);
//
//
//const p2 = {
//    name : "SK",
//    food : "Pizza",
//
//    //this keyword will not work with the arrow function
//    say : function(){console.log(`I am ${this.name}`)},
//    eat : function(){console.log(`${this.name} is eating ${this.food}`)},
//}
//
//p2.say();
//p2.eat();
//
//console.log('\n', p2);
//
//
//
////constructors in js
//
//function Car(make, model, year, color, cost){
//    this.make = make,
//    this.model = model,
//    this.year = year,
//    this.color = color,
//    this.cost = cost,
//    this.drive = function(){console.log(`You drive ${this.model}`);}
//}
//
//const car1 = new Car("BMW", "M4-Compitation", "2024", "Red and Black", "$200k");
//const car2 = new Car("Ford", "Mustang", "1997", "Red", "$250k");
//
//console.log(car1.make);
//console.log(car1.model);
//console.log(car1.year);
//console.log(car1.color);
//console.log(car1.cost, '\n');
//car1.drive();
//
//console.log(car2.make);
//console.log(car2.model);
//console.log(car2.year);
//console.log(car2.color);
//console.log(car2.cost, '\n');
//car2.drive();
//
//
////class in js
//
//class product{
//    constructor(name, price){
//        this.name = name;
//        this.price = price;
//    }
//
//    display(){
//        console.log(`Product : ${this.name}`);
//        console.log(`Price : $${this.price.toFixed(2)}`);
//    }
//
//    tax(selftax){
//        return this.price + (this.price * selftax);
//    }
//}
//
//const selftax = 0.05;
//
//p1 = new product("Bat Man", 25.55);
//p2 = new product("Iron Man", 55.55);
//p3 = new product("Thor", 70.00);
//p4 = new product("Loki", 100.00);
//
//p1.display();
//total = p1.tax(selftax);
//console.log(`After TAX : $${total.toFixed(2)}\n`);
//
//p2.display();
//total = p2.tax(selftax);
//console.log(`After TAX : $${total.toFixed(2)}\n`);
//
//p3.display();
//total = p3.tax(selftax);
//console.log(`After TAX : $${total.toFixed(2)}\n`);
//
//p4.display();
//total = p4.tax(selftax);
//console.log(`After TAX : $${total.toFixed(2)}\n`);
//
//
//
////nested objects in js
//
//
//const p1 = {
//    name1 : "Master",
//    last1 : "SK",
//    age : 19,
//    addres : {
//        number : 112,
//        city : "Sky city",
//        country : "int. Sky"
//    }
//}
//
//console.log(p1.name1);
//console.log(p1.last1);
//console.log(p1.age);
//
//for(p in p1.addres){
//    console.log(p1.addres[p]);
//}
//
//
//
//class person{
//    constructor(name2, age, ...address){
//        this.name2 = name2;
//        this.age = age;
//        this.address = new Address(...address);
//    }
//}
//
//
//class Address{
//    constructor(number, city, country){
//        this.number = number;
//        this.city = city;
//        this.country = country;
//    }
//}
//
//const p1 = new person("SK", 19, "123 cont st", "Up the sky city", "Int. Sky");
//
//console.log(p1.name2);
//console.log(p1.age);
//console.log(p1.address, '\n');
//console.log(p1.address.number);
//console.log(p1.address.city);
//console.log(p1.address.country, '\n');


// array of obj in js

const fruits = [{name : "apple", color : "red", calaries : 95},
                {name : "Orange", color : "orange", calaries : 45}, 
                {name : "Banana", color : "yellow", calaries : 105}, 
                {name : "Pinapple", color : "yellow", calaries : 35}];


console.log(fruits, '\n');

fruits.push({name : "coconut", color : "broun", calaries : 55});
console.log(fruits, '\n');

fruits.pop(4);
console.log(fruits, '\n');

fruits.forEach(f => console.log(f.name, f.color, f.calaries));
console.log('\n');

let ff = fruits.map(f => f.name);
console.log(ff);

let ff1 = fruits.map(f => f.color);
console.log(ff1);

let ff2 = fruits.map(f => f.calaries);
console.log(ff2, '\n');


let y = fruits.filter( f => f.color === "yellow");

let y2 = fruits.filter(f => f.calaries > 100);

let y3 = fruits.filter(f => f.calaries < 100);

console.log(y, '\n');
console.log(y2, '\n');
console.log(y3, '\n');


let r = fruits.reduce((max, fruit) => fruit.calaries > max.calaries ? fruit : max);
console.log(r);
console.log(r.calaries, '\n');

let r1 = fruits.reduce((min, fruit) => fruit.calaries < min.calaries ? fruit : min);
console.log(r1);
console.log(r1.calaries, '\n');