let students = 30;

students = students + 7;
students = students - 7;
students = students * 2;
students = students / 2;
students = students ** 2;
let expstudents = students % 2; //most recomended to use a seprate variable for the modules operator

let result = 1 + 5 * 3 + 4 ** 2;
console.log(result)

console.log(students)


// this is a user input practice

let usernames;
usernames = window.prompt("what's your name?");

console.log(usernames);

document.getElementById("sk5").onclick = function() {
    username = document.getElementById("sk4").value;
    document.getElementById("sk0").textContent = `Hello ${username}`
}