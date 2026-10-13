const box = document.getElementById("box");

function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕";
}
box.addEventListener("click", changeColor);

function changeColor1(event){
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do this 😢";
}
box.addEventListener("mouseover", changeColor1);

function changeColor2(event){
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "click Me 😁";
}
box.addEventListener("mouseout", changeColor2);