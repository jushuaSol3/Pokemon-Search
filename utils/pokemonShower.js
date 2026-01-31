const result = document.getElementById("search-result");

function showPokemon(pokemon) {

    result.innerHTML = "";
    const pokemonDiv = document.createElement("div");

    if (pokemon === undefined) {
        console.log("working here");
        pokemonDiv.innerHTML = `<h2 class='no-found'>No Pokemon found. Please try again.</h2>`;

        result.appendChild(pokemonDiv);
        return pokemonDiv;
    }

    const skills = pokemon.abilities.map(ability => ability.ability.name).join(", ");

    pokemonDiv.innerHTML = "";
    pokemonDiv.innerHTML = `
    <div class="pokemon-card">
        <h2 class="pokemon-name">${pokemon.name.toUpperCase()}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
        <img src="${pokemon.sprites.back_default}" alt="${pokemon.name}" />
        <div class="pokemon-info">
            <p><strong>Height:</strong> ${pokemon.height}</p>
            <p><strong>Weight:</strong> ${pokemon.weight}</p>
            <p><strong>Abilities:</strong> ${skills}</p>
        </div>
    </div>
    `;
    result.appendChild(pokemonDiv);
    return pokemonDiv;
}


export { showPokemon };