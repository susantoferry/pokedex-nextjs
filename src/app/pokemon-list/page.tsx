import PokemonListComponent from "@/components/pokemon-list/page";
import { PokemonModel, PokemonTypeEntry } from "@/models/pokemon";
import { getPokemonIdFromUrl } from "@/utils/function";


const fetchPokemons = async () => {
   try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const data = await response.json();

    const pokemonData: PokemonModel[] = data.results.map(
      (pokemon: {name: string; url: string }) => ({
        ...pokemon,
        types: [],
      })
    );

    // Fetch types for all Pokémon
    const typePromises = [];

    for (let i = 1; i <= 18; i++) {
      typePromises.push(
        fetch(`https://pokeapi.co/api/v2/type/${i}`)
        .then((res) => res.json())
        .then((typeData) => {
          typeData.pokemon.forEach((pokeInType: PokemonTypeEntry) => {
            const pokemonId = getPokemonIdFromUrl(pokeInType.pokemon.url);

            if (pokemonId <= pokemonData.length && pokemonData[pokemonId - 1]) {
              pokemonData[pokemonId - 1].types.push(typeData.name);
            }
          })
        })
      )
    }
    
    await Promise.all(typePromises);
    return pokemonData;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return []
  }
}

const PokemonListPage = async () => {
  const pokemons = await fetchPokemons();
  
  return (
    
    <PokemonListComponent pokemonsData={pokemons} />
  )
}

export default PokemonListPage