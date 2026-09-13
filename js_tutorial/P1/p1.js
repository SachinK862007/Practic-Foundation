const decBt = document.getElementById("dec");
const resBt = document.getElementById("res");
const incBt = document.getElementById("inc");
const countBt = document.getElementById("count");
let count = 0;

incBt.onclick = function() {
    count++;
    countBt.textContent = count;
}

decBt.onclick = function() {
    count--;
    countBt.textContent = count;
}

resBt.onclick = function() {
    count = 0;
    countBt.textContent = count;
}