//function s1(callback){
//    setTimeout(() => {console.log("Welcome Master SK"); callback();}, 3000)
//    
//}
//
//function s2(){
//    console.log("All done SK");
//}
//
//s1(s2);

//error handling in js

let div = 55;
let dd = "ss";

try{
    if(dd == 0){
        throw new Error("It cannot be devided by Zero");
    }
    if(isNaN(div) || isNaN(dd)){
        throw new Error("Pls input the Number only !");
    }
    else{
        console.log(div / dd);
    }
}
catch(error){
    console.log(error);
}
finally{
    console.log("All close");
}


console.log("All done to Final !");