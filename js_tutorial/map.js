//const math = [1, 2, 3, 4, 5, 6];
//const squares = math.map(square);
//
//console.log(squares);
//
//function square(element){
//    return Math.pow(element, 2);
//}
//
//const stud = ['sk', 'master', 'spongebob', 'patrick'];
//const upper = stud.map(up);
//
//console.log(upper);
//
//function up(element){
//    return element.toUpperCase();
//}
//
//
//
//const dates = ['2024-1-10', '2025-2-20', '2026-3-30'];
//const format = dates.map(foemating);
//
//console.log(format);
//
//function foemating(element){
//    const parts = element.split('-');
//    return `${parts[1]}/${parts[2]}/${parts[0]}`;
//}
//
//
//
//
//// .filter() method in js
//
//let A = [20, 22, 1, 23, 55];
//
//let f = A.filter(even);
//let o = A.filter(odd);
//console.log(f);
//console.log(o, '\n');
//
//
//function odd(element){
//    if(element % 2 != 0){
//        return element;
//    }
//}
//function even(element){
//    if(element % 2 == 0){
//        return element;
//    }
//}
//
//
////.reduce() method in js
//
//let r = A.reduce(sum);
//let r1 = A.reduce(max);
//
//console.log(r, '\n');
//console.log(r1, '\n');
//
//function sum(a, element){
//    return a + element;
//}
//
//function max(a, element){
//    return Math.max(a, element);
//}
//
//
//
////function expression in js
//
//et B = [20, 33, 2, 4, 5, 1];
//
//onst sq = B.map(function(element){return Math.pow(element, 2)});
//onst cube = B.map(function(element){return Math.pow(element, 3)});
//onst fil = B.filter(function(element){return element % 2 === 0});
//
//onsole.log(sq);
//onsole.log(cube);
//onsole.log(fil, '\n');


//arrow expression

const hello = () => console.log('Welcome Master SK');

hello();

let C = [1, 2, 3, 4, 5, 6];

const sq = C.map((element) => Math.pow(element, 2));
const cu = C.map((element) => Math.pow(element, 3));
const even = C.filter((element) => element % 2 === 0);
const odd = C.filter((element) => element % 2 !== 0);
const add = C.reduce((a, element) => a + element);

console.log(sq);
console.log(cu);
console.log(even);
console.log(odd);
console.log(add);