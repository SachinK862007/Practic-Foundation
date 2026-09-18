const s = document.getElementById("sk");
const min = 0;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
let guess;
let attempts = 0;
let running = true;


while(running){
    guess = window.prompt("Guess the Number between 0 to 100");
    guess = Number(guess);
    
    if(guess < min || guess > max){
        window.alert("Please enter valid number (1 to 100)");
    }
    else if(isNaN(guess)){
        window.alert(`Please enter valid number`);
    }
    else{
        attempts++;
        if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN");
        }
        else if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN");
        }
        else{
            s.textContent = `The correct guess number is ${answer} and your total attempts is ${attempts}`;
            running = false;
        }
    }

}