const input = document.getElementById("sk1");
const button = document.getElementById("sk2");
const result = document.getElementById("sk3");
let age;

button.onclick = function(){
    age = input.value;
    age = Number(age);

    if(age >= 100){
        result.textContent = `You are too OLD hear !`;
    }
    else if(age == 50){
        result.textContent = `You are getting crossend a half Century !`;
    }
    else if(age >= 18){
        result.textContent = `You are old enough for this situation HAHAHAH!`;
    }
    else if(age == 0){
        result.textContent = `Why did u BORN ?`;
    }
    else if(age < 0){
        result.textContent = `You are a Sperm!`;
    }
    else{
        result.textContent = `I don't Know what ur Fuck u!`
    }
}