//class rest{
//    constructor(width, height){
//        this.width = width;
//        this.height = height;
//    }
//
//    set width(newwidth){
//        if(newwidth > 0){
//            this._width = newwidth;
//        }
//        else{
//            console.log("Width must be in positive only ");
//        }
//    }
//
//    set height(newheight){
//        if(newheight > 0){
//            this._height = newheight;
//        }
//        else{
//            console.log("Height must be in positive only ");
//        }
//    }
//
//    get width(){
//        return this._width;
//    }
//
//    get height(){
//        return this._height;
//    }
//
//    get area(){
//        return this._width * this._height;
//    }
//}
//
//const rectn = new rest(3, 4);
//
////rectn.width = -2;
////rectn.height = "pp";
//
//console.log(rectn.width);
//console.log(rectn.height);
//console.log(rectn.area);
//
//
//
//class person{
//    constructor(firstname, lastname, age){
//        this.firstname = firstname;
//        this.lastname = lastname;
//        this.age = age;
//    }
//
//    set firstname(firstname1){
//        if(typeof firstname1 === "string" && firstname1.length > 0){
//            this._firstname = firstname1;
//        }
//        else{
//            console.error("First name must be a non-Empty string");
//        }
//    }
//
//    set lastname(lastname1){
//        if(typeof lastname1 === "string" && lastname1.length > 0){
//            this._lastname = lastname1;
//        }
//        else{
//            console.error("Last name must be a non-Empty string");
//        }
//    }
//
//    set age(age1){
//        if(typeof age1 === "number" && age1 >= 0){
//            this._age = age1;
//        }
//        else{
//            console.error("Age must be a non-negative number");
//        }
//    }
//
//
//    get firstname(){
//        return this._firstname;
//    }
//
//    get lastname(){
//        return this._lastname;
//    }
//
//    get age(){
//        return this._age;
//    }
//
//    get fullname(){
//        return `Your name is ${this._firstname} ${this._lastname}`;
//    }
//}
//
//const p = new person("Master", "SK", 19);
//
//console.log(p.firstname);
//console.log(p.lastname);
//console.log(p.age);
//console.log(p.fullname);



//destructuring in js


