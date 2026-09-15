Name = "Master SK";
Name1 = "Master  ";
Name2 = "        Master  ";
num = '123-456-789';
let s, s1, s2, s3, s4, s5, s6, s7;

console.log(Name);
console.log(Name.length);
console.log(Name.charAt(0));
console.log(Name.charAt(1));
console.log(Name.charAt(2));
console.log(Name.indexOf('S'));
console.log(Name.lastIndexOf('S'));
console.log(Name.repeat(3));

s1 = Name2.trim();
console.log(s1);
console.log(Name1.toUpperCase())
console.log(Name1.toLowerCase())

if(s3 = Name2.startsWith(" ")){
    console.log(`It has space at start !! (${s3})`);
}

if(s3 = Name1.endsWith(" ")){
    console.log(`It has space at the end !! (${s3})`);
}


if (s = Name.includes(" ")){
    console.log(`your name has ' space ' in it ${s}`);
}
else{
    console.log(`your name has no ' space ' in it ${s} `);
}

s4 = num.replaceAll('-', "");
console.log(s4);


s5 = num.replaceAll('-', "/");
console.log(s5);

s6 = num.padStart(15, "0");
console.log(s6);


s7 = num.padEnd(15, "0");
console.log(s7);
