import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query getFilteredPokemons($offset: Int, $type: String, $name: String) {
    pokemon_v2_pokemon(offset: $offset, limit: 20, where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_ilike: $type}}}, name: {_ilike: $name}}) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;