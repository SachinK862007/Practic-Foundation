const input = document.getElementById("sk1");
const F_to_C = document.getElementById("sk2");
const C_to_F = document.getElementById("sk4");
const button = document.getElementById("sk6");
const finalout = document.getElementById("sk7"); 
let temp, result;




function covert(){
    temp = Number(input.value);

    if(F_to_C.checked){

        temp = (temp - 32) * (5/9);
        result = temp.toFixed(1) + "°C"
        finalout.textContent = `${result}`;
    }
    else if(C_to_F.checked){

        temp = (temp * 9/5) + 32;
        result = temp.toFixed(1) + "°F"
        finalout.textContent = `${result}`;
    }
    else{
        finalout.textContent = `Select a Unit`;
    }
}