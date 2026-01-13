/*
   this is were pokemom API goes
   it will get data from the server of this API
*/



async function searchPokemon(name) {
   try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      if (!res.ok) {
         console.log(`the pokemon is not found`)
         return;
      }

      const dat = await res.json();
      return dat;
      // console.log(dat);

   } catch (err) {
      console.log("error catched: ", err)
   }

}

export { searchPokemon };