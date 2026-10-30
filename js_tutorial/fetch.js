fetchdata();

async function fetchdata(){

    
    try{
        const input = document.getElementById("inputs1").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        
        if(!response.ok){
            throw new Error("Could not fetch");
        }

        const data = await response.json();
        const pokmonesprite = data.sprites.front_default;
        const pokemonimg = document.getElementById("pokemonsprite");

        pokemonimg.src = pokmonesprite;
        pokemonimg.style.display = "block";
    }
    catch(error){
        console.log(error);
    }
}