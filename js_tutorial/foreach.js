let arr = [1,2,3,'sk',33, 5.4];

arr.forEach(display);

function display(element){
    console.log(element);
}

console.log(document);

//dom navigation

//using .firstElementChild; 
const ele = document.getElementById("desserts");

const first = ele.firstElementChild;
first.style.backgroundColor = "yellow";

// .querySelectorAll();

const e = document.querySelectorAll("ul");

e.forEach(ei => {
    const f = ei.firstElementChild;
    f.style.backgroundColor = "yellow";
});

 //.la`stElementChild; it will select last element of the node same as .firstElementChild;

// .nextElementSibling

const ell = document.getElementById("apple");
const ell1 = ell.nextElementSibling;
ell1.style.backgroundColor = "yellow"

 //.previousElementSibling is same leik the .nextElementSibling but it selects the pervious one 

//.parentElement

const ell2 = document.getElementById("apple");
const ell21 = ell2.parentElement;
ell21.style.backgroundColor = "yellow";

//.children

const ell3 = document.getElementById("Vegetables");
const ell31 = ell3.children;

Array.from(ell31).forEach(c => {
    c.style.backgroundColor = "yellow"
});