


function rolldice(){
   const numofdice = document.getElementById("inputnum").value; 
   const diceresult = document.getElementById("dice1");
   const diceimg = document.getElementById("dice2");

   const values = [];
   const img = [];

   for(let i = 0; i < numofdice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
      img.push(`<img src="die/d${value}.png" alt="Dice ${value}">`);
   }

   diceresult.textContent = `Dice Rolled ${values.join(', ')}`;
   diceimg.innerHTML = img.join('');
}