function s1(callback){
    setTimeout(() => {console.log("Welcome Master SK"); callback();}, 3000)
    
}

function s2(){
    console.log("All done SK");
}

s1(s2);