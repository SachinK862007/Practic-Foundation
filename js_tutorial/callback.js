sum(display, 5, 9);


function sum(callback, x, y){
    let s;
    s = x + y;
    callback(s)
    //console.log(s);

}

function rolldice(s){
    let a;

    a = s * 3;
    console.log(a);
}

function display(s){
    document.getElementById("hedding").textContent = s;
}