

async function pokemonLister() {
    const result = document.getElementById("search-result");
    result.innerHTML = "";

    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");

        if (!response.ok) {
            throw new Error(`error status: ${response.status}`);
        }


        const data = await response.json();
        const filteredData = JSON.parse(JSON.stringify(data.results));

        filteredData.map(pokemon => {
            const pokemonDiv = document.createElement("div");
            pokemonDiv.classList.add("pokemon-list-item");
            pokemonDiv.innerHTML = `
                <img class="pokemon-list-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png" alt="${pokemon.name}" />
                <p class="pokemon-list-name">${pokemon.name.toUpperCase()}</p>
            `;

            result.appendChild(pokemonDiv);

        });





    } catch (error) {
        console.error("Error listing pokemons: ", error);
    }
}


export { pokemonLister };