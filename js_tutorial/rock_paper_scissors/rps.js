const choice = ["Rock", "Paper", "Scissor"];
const playd = document.getElementById("playerdisplay");
const compd = document.getElementById("computerdisplay");
const results = document.getElementById("resultdisplay");
const score1 = document.getElementById("playerscore");
const score2 = document.getElementById("computerscore");

let plays = 0;
let comps = 0;

function playgame(playc){
    const compc = choice[Math.floor(Math.random() * 3)];
    let result = "";

    if(playc === compc){
        result = "IT'S A TIE!";

    }
    else{
        switch(playc){
            case "Rock" : 
                result = (compc === "Scissor") ? "YOU WIN!" : "YOU LOSE!";
                break;
            
            case "Paper" : 
                result = (compc === "Rock") ? "YOU WIN!" : "YOU LOSE!"; 
                break;
            
            case "Scissor" : 
                result = (compc === "Paper") ? "YOU WIN!" : "YOU LOSE!"; 
                break;
        }
    }
    playd.textContent = `PLAYER : ${playc}`;
    compd.textContent = `COMPUTER : ${compc}`;
    results.textContent = result;
    results.classList.remove("greentext", "redtext", "black");

    

    switch(result){
        case "YOU WIN!" :
            results.classList.add("greentext");
            plays++;
            score1.textContent = plays;
            break;

        case "YOU LOSE!" :
            results.classList.add("redtext");
            comps++;
            score2.textContent = comps;
            break;

        case "IT'S A TIE!":
            results.classList.add("black");
            break;
    }
    
    
}