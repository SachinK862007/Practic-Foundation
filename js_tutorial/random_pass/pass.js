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
    
    
    while(pass.length < length){
        const random = Math.floor(Math.random() * allow.length);
        pass += allow[random]
    }
    
    return pass;
}


let inputvalue = document.getElementById("input");
const lable = document.getElementById("L2");
const includelowercase = true;
const includeuppercase = true;
const includenumber = true;
const includesymbols = true;
const button = document.getElementById("but");

button.onclick = function(){
    const pass = Number(inputvalue.value);

    if(pass < 8){
        lable.textContent = 'Password length must be grater than 8';
        return;
    }

    if(pass > 20){
        lable.textContent = 'Password length must be grater than 8 and bellow 20';
        return;
    }

    const password = genrate(pass, includelowercase, includeuppercase, includenumber, includesymbols);

    lable.textContent = password;
}

