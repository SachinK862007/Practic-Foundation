//for loop
console.log(`Table using for loop `)
let s = 240;
let i, r;
for(i = 1; i <= 10; i++){
    r = s * i;
    console.log(`${s} X ${i} = ${r}`);
}
console.log("\n");

//while Loop
console.log(`Backword Table using While loop`)
let s1 = true;
let i1 = 10;
let r1, n = 2;
while(s){
    if(0 < i1){
        r1 = n * i1;
        console.log(`${n} X ${i1} = ${r1}`);
        i1--;
    }
    else{
        s1 = false;
    }
}

console.log('DONE');