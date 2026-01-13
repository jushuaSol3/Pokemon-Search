import { searchPokemon } from './searchApi.js';
import { showPokemon } from './pokemonShower.js';

console.log("main is running")
console.log(showPokemon());


const searchInput = document.getElementById("searchPokemon");
const searchButton = document.getElementById("srch-btn");
let pokemonName = " ";


// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM fully loaded and parsed");
    //This event Listener will wait fot the button to be clicked  and activate the 
    //search function, if the search input is empty it will log a message to the console

    searchButton.addEventListener("click", async () => {
        pokemonName = searchInput.value.toLowerCase().trim();
        console.log("Searching for Pokemon: ", pokemonName);

        if (pokemonName === "") {
            console.log("the input is empty");
        } else {
            const pokemon = searchPokemon(pokemonName);

            console.log("pokemon response: ", pokemon);

            if (!pokemon) {

                console.log("Pokemon not found");
                searchInput.value = "";
            } else {

                console.log("Pokemon found");
                const data = await pokemon;
                console.log("data returned: ", data);
                showPokemon(data);
                searchInput.value = "";
            }

            searchInput.value = "";
        }
    });

});