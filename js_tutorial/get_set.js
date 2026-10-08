class rest{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newwidth){
        if(newwidth > 0){
            this._width = newwidth;
        }
        else{
            console.log("Width must be in positive only ");
        }
    }

    set height(newheight){
        if(newheight > 0){
            this._height = newheight;
        }
        else{
            console.log("Height must be in positive only ");
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return this._width * this._height;
    }
}

const rectn = new rest(3, 4);

//rectn.width = -2;
//rectn.height = "pp";

console.log(rectn.width);
console.log(rectn.height);
console.log(rectn.area);



class person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(firstname1){
        if(typeof firstname1 === "string" && firstname1.length > 0){
            this._firstname = firstname1;
        }
        else{
            console.error("First name must be a non-Empty string");
        }
    }

    set lastname(lastname1){
        if(typeof lastname1 === "string" && lastname1.length > 0){
            this._lastname = lastname1;
        }
        else{
            console.error("Last name must be a non-Empty string");
        }
    }

    set age(age1){
        if(typeof age1 === "number" && age1 >= 0){
            this._age = age1;
        }
        else{
            console.error("Age must be a non-negative number");
        }
    }


    get firstname(){
        return this._firstname;
    }

    get lastname(){
        return this._lastname;
    }

    get age(){
        return this._age;
    }

    get fullname(){
        return `Your name is ${this._firstname} ${this._lastname}`;
    }
}

const p = new person("Master", "SK", 19);

console.log(p.firstname);
console.log(p.lastname);
console.log(p.age);
console.log(p.fullname);



//destructuring in js

//exp1 swap 2 num

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a, b, '\n');

//swap 2 elements in an array

const colors = ['red', 'green', 'blue', 'black', 'white'];

[colors[0], colors[3]] = [colors[3], colors[0]];

console.log(colors, '\n');


//assign array elements to variables

const[first, second, third, ...ext] = colors;

console.log(first);
console.log(second);
console.log(third);
console.log(ext, '\n');

// extract from obj

const p1 = {
    name1 : 'Master',
    last1 : "SK",
    age : 19
}

const p2 = {
    name1 : 'Iron',
    last1 : "Knock",
    age : 20
}

const {name1, last1, age} = p1;
console.log(name1);
console.log(last1);
console.log(age, '\n'); 