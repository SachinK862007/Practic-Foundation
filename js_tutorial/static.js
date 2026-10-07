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
    
}