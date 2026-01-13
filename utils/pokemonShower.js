const result = document.getElementById("search-result");

function showPokemon(pokemon) {
    const pokemonDiv = document.createElement("div");
    console.log(showPokemon);

    if (pokemon === null || pokemon === undefined) {
        pokemonDiv.textContent = "Pokemon not found";
        result.appendChild(pokemonDiv);
        return pokemonDiv;
    }
    pokemonDiv.textContent = "Pokemon: " + pokemon.name;
    result.appendChild(pokemonDiv);
    return pokemonDiv;
}


export { showPokemon };