////static in js
//
//class user{
//    static u = 0;
//    constructor(name){
//        this.name = name;
//        user.u++;
//    }
//
//    display(){
//        console.log(`Hay this is ${this.name}`);
//    }
//
//    static count(){
//        console.log(`\nThere are total ${user.u} online\n`);
//    }
//
//}
//
//u1 = new user("SK");
//u2 = new user("Iron");
//u3 = new user("Goku");
//u4 = new user("Beru");
//
//u1.display();
//u2.display();
//u3.display();
//u4.display();
//user.count();
//
//
////inheritance in js
//
//let li = true;
//
//class animal{
//
//    alive(){
//        
//        if(li == true){
//            console.log(`${this.name} is alive`);
//        }
//        else{
//            console.log(`${this.name} is not alive`);
//        }
//    }
//
//    eat(){
//        console.log(`${this.name} is eating`);
//    }
//
//    sleep(){
//        console.log(`${this.name} is sleeping`);
//    }
//}
//
//
//class rabbit extends animal{
//    name = "Rabbit";
//
//    run(){
//        console.log(`${this.name} is running\n`);
//    }
//}
//
//class fish extends animal{
//    name = "Fish";
//
//    swim(){
//        console.log(`${this.name} is swiming\n`);
//    }
//}
//
//class Eagle extends animal{
//    name = "eagle";
//
//    fly(){
//        console.log(`${this.name} is flying\n`);
//    }
//}
//
//r = new rabbit();
//r.alive();
//r.eat();
//r.sleep();
//r.run();    // if u try using r.fly or r.swim it will show the error because it is not a inherited function 
//
//f = new fish();
//f.alive();
//f.eat();
//f.sleep();
//f.swim();
//
//e = new Eagle();
//e.alive();
//e.eat();
//e.sleep();
//e.fly();



//super in js

class sup{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`This animal ${this.name} moves at this speed ${speed}`);
    }
}

class rabbit extends sup{
    constructor(name, age, run){
        super(name, age);
        this.run = run;

    }

    runing(){
        console.log(`This animal ${this.name}`);
        supper.move(this.run);
    }
}

class fish extends sup{
    constructor(name, age, swim){
        super(name, age);
        this.swim = swim;

    }

    swim(){
        console.log(`This animal ${this.name}`);
        supper.move(this.swim);
    }
}

r = new rabbit("rabbit", 1, 25);
f = new fish("Goldy", 5, 30);


console.log(r.name);
console.log(r.age);
console.log(r.run, "\n");

console.log(f.name);
console.log(f.age);
console.log(f.swim);


