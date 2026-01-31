

async function pokemonLister() {
    const result = document.getElementById("search-result");

    result.innerHTML = "";

    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        const pokemonList = data.results;

        for (let pokemon of data.results) {
            const pokemonResponse = await fetch(pokemon.url);
            if (!pokemonResponse.ok) throw new Error("Network response was not ok");

            const pokemonData = await pokemonResponse.json();
            const pokemonSprite = pokemonData.sprites.front_default;
            console.log(pokemonSprite);

            const pokemonDiv = document.createElement("div");
            pokemonDiv.classList.add("pokemon-list-item");
            pokemonDiv.innerHTML = `
                <div class="pokemon-info">
                  
                    <img src="${pokemonSprite}" alt="${pokemonData.name}" />
                    
                </div>
               
                    <div class="more-info">
                      <h3 class="pokemon-name">${pokemonData.name.toUpperCase()}</h3>
                         <div class="pokemon-types">
                        <p><strong>Types:</strong> ${pokemonData.types.map(typeInfo => typeInfo.type.name).join(", ")}</p>
                        <p><strong>Height:</strong> ${pokemonData.height} ft</p>
                        <p><strong>Weight:</strong> ${pokemonData.weight} lbs</p>

                    <div class="stats">
                        <p><strong>Base Experience:</strong> ${pokemonData.base_experience}</p>
                        <p><strong>Abilities:</strong> ${pokemonData.abilities.map(abilityInfo => abilityInfo.ability.name).join(", ")}</p>
                    </div>
                        <div>
                                <button class="additional-info">Additional Info</button>
                        </div>
                    </div>
                        
            `;

            result.appendChild(pokemonDiv);
        }


    } catch (error) {
        console.error("Error listing pokemons: ", error);
    }
}


export { pokemonLister };