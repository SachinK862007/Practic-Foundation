////web Event listner in js
//
//const box = document.getElementById("box");
//
//function changeColor(event){
//    event.target.style.backgroundColor = "tomato";
//    event.target.textContent = "OUCH! 🤕";
//}
//box.addEventListener("click", changeColor);
//
//function changeColor1(event){
//    event.target.style.backgroundColor = "yellow";
//    event.target.textContent = "Don't do this 😢";
//}
//box.addEventListener("mouseover", changeColor1);
//
//function changeColor2(event){
//    event.target.style.backgroundColor = "lightgreen";
//    event.target.textContent = "click Me 😁";
//}
//box.addEventListener("mouseout", changeColor2);
//
// event listner keyup, keydown in js
//
//const x1 = document.getElementById("x1");
//const move = 10;
//let x = 0;
//let y = 0;
//
//document.addEventListener("keydown", event => {
//
//    if(event.key.startsWith("Arrow")){
//        switch(event.key){
//            case "ArrowUp":
//                y -= move;
//                break;
//            case "ArrowDown":
//                y += move;
//                break;
//            case "ArrowLeft":
//                x -= move;
//                break;
//            case "ArrowRight":
//                x += move;
//                break;
//        }
//
//        x1.style.top = `${y}px`
//        x1.style.left = `${x}px`
//    }
//    
//});
//
//
// hide and show in js 

const mybut = document.getElementById("mybut");
const myimg = document.getElementById("myimg");

mybut.addEventListener("click", event =>{

    if(myimg.style.display === "none"){
        myimg.style.display = "block";
        mybut.textContent = "Hide";
    }
    else{
        myimg.style.display = "none";
        mybut.textContent = "Show";
    }
    
});