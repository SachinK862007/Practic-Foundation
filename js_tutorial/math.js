let x = 3.12;
let y = 2;
let z;

z1 = Math.round(x);
z2 = Math.floor(x);
z3 = Math.ceil(x);
z4 = Math.trunc(x);
z5 = Math.pow(x, y);
z6 = Math.sqrt(x);
z7 = Math.log(x);
z8 = Math.sin(x);
z9 = Math.cos(x);
z0 = Math.tan(x);
z11 = Math.abs(x);
z12 = Math.sign(x);

let max = Math.max(2, 8, 4);
let min = Math.min(2, 3, 8);

a = [z1,z2,z3,z4,z5,z6,z7,z8,z9,z0,z11,z12];

for(let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

console.log(max)
console.log(min)