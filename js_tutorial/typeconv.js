//let age = window.prompt("How old u are?");
//age = Number(age);
//age = age + 1;
//
//console.log(age);
//console.log(typeof age);
//

//let x = "0";
//let y = "0";
//let z = "0";
//
//x = Number(x);
//y = String(y);
//z = Boolean(z);
//
//console.log(x, typeof x);
//console.log(y, typeof y);
//console.log(z, typeof z);

// using Const in js

const pi = 3.14159;
let radius;
let circumference;

//radius = window.prompt('Enter radius');
//radius = Number(radius);
//
//circumference = 

console.log(circumference);
document.getElementById("sk3").onclick = function() {
    radius = document.getElementById("sk2").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("sk4").textContent = circumference + "cm";
}