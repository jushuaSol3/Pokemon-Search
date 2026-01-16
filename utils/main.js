import { searchPokemon } from './searchApi.js';
import { showPokemon } from './pokemonShower.js';
import { pokemonLister } from './pokemonLister.js';

console.log("main is running")



const searchInput = document.getElementById("searchPokemon");
const searchButton = document.getElementById("srch-btn");
const result = document.getElementById("search-result");
let pokemonName = " ";


// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM fully loaded and parsed");


    //this part shows the list of all pokemons when the page loads

    pokemonLister();




    //This event Listener will wait fot the button to be clicked  and activate the 
    //search function, if the search input is empty it will log a message to the console

    searchButton.addEventListener("click", async () => {
        pokemonName = searchInput.value.toLowerCase().trim();
        console.log("Searching for Pokemon: ", pokemonName);

        if (pokemonName === "") {
            console.log("the input is empty");
            result.innerHTML = "<h2 class='no-found'>Please enter a Pokemon name.</h2>";
            searchInput.value = "";

        } else {
            const pokemon = searchPokemon(pokemonName);

            console.log("pokemon response: ", pokemon);

            if (!pokemon) {

                console.log("Pokemon not found");
                searchInput.value = "";
            } else {

                console.log("Pokemon found");
                const data = pokemon ? await pokemon : pokemonName;
                console.log("data returned: ", data);
                showPokemon(data);
                searchInput.value = "";
            }

            searchInput.value = "";
        }
    });

});