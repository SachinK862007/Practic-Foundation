const button = document.getElementById("jsk3");
const label = document.getElementById("sk1");
const min = 1;
const max = 100;
let randomnum;

button.onclick = function() {
    randomnum = Math.floor(Math.random() * (max - min + 1)) + min;
    label.textContent = randomnum;
}