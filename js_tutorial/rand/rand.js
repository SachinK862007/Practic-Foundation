const button = document.getElementById("sk3");
const label = document.getElementById("sk1");
const min = 1;
const max = 100;
let randomnum;

button.onclick = function() {
    randomnum = Math.floor(Math.random() * max) + min;
    label.textContent = randomnum;
}