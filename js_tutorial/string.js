Name = "Master SK";
Name1 = "Master  ";
Name2 = "        Master  ";
let s, s1, s2, s3, s4, s5, s6;

console.log(Name);
console.log(Name.length);
console.log(Name.charAt(0));
console.log(Name.charAt(1));
console.log(Name.charAt(2));
console.log(Name.indexOf('S'));
console.log(Name.lastindexOf('S'));
console.log(Name.repeat(3));

s1 = Name2.trim();
console.log(s1);
console.log(Name1.toUpperCase())
console.log(Name1.toLowerCase())

if(s3 = Name2.startsWith(" ")){
    console.log("It has space in it !!");
}


if (s = Name.includes(" ")){
    console.log("your name has ' space ' in it ");
}
else{
    console.log("your name has no ' space ' in it ");
}

