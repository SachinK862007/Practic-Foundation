function genrate(length, lowercase, uppercase, num, symbol){
    
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numb = '1234567890';
    const symb = '~!@#$%^&*()_+-';

    let allow = "";
    let pass = "";

    allow += lowercase ? lower : "";
    allow += uppercase ? upper : "";
    allow += num ? numb : "";
    allow += symbol ? symb : "";
    
    for(let i = 0; i < length; i++){
        const random = Math.floor(Math.random() * allow.length);
        pass += allow[random]
    }
    
    return pass;
}


const inputvalue = document.getElementById("input");
const lable = document.getElementById("L2");
const passwordlength = inputvalue.value;
const includelowercase = true;
const includeuppercase = true;
const includenumber = true;
const includesymbols = true;
//const button = document.getElementById("but");

//const password = genrate(passwordlength, includelowercase, includeuppercase, includenumber, includesymbols);

while(true){
    const button = document.getElementById("but");
    if(button.onclick){
        const password = genrate(passwordlength, includelowercase, includeuppercase, includenumber, includesymbols);
        lable.textContent = password;
    }
}