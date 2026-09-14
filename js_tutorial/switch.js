const result = document.getElementById("score2");
let s = 20;

if (s !== Number) {
    result.textContent = `Invalid, Not Found !`
}

switch(true){
    case s >= 90:
        result.textContent = `Your Test Score is ${s} Grade: 'A+'`;
        break;

    case s >= 80:
        result.textContent = `Your Test Score is ${s} Grade: 'A'`;
        break;

    case s >= 70:
        result.textContent = `Your Test Score is ${s} Grade: 'B+'`;
        break;

    case s >= 60:
        result.textContent = `Your Test Score is ${s} Grade: 'B'`;
        break;

    case s >= 55:
        result.textContent = `Your Test Score is ${s} Grade: 'C+'`;
        break;

    case s >= 50:
        result.textContent = `Your Test Score is ${s} Grade: 'C'`;
        break;

    case s >= 0 :
        result.textContent = `Your Test Score is ${s} Grade: 'F'`;
        break;

    default:
        result.textContent = `Invalid, Not Found !`
}
