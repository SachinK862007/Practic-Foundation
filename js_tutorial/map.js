const math = [1, 2, 3, 4, 5, 6];
const squares = math.map(square);

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}