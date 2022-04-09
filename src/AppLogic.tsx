import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { PokemonDetails, PokemonsData, PokemonsVars } from "./@types";
import { GET_POKEMONS } from "./graphql/queries";

const AppLogic = () => {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const [getPokemonsQuery] = useLazyQuery<PokemonsData, PokemonsVars>(GET_POKEMONS);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const getPokemons = async (offset: number) => {
    const { data } = await getPokemonsQuery({
      variables: { 
        offset,
        name: `%${searchText}%`,
        type: `%${filter}%`
      },
    });

    return data?.pokemon_v2_pokemon;
  };

  const loadPokemons = async () => {
    setLoading(true);
    setPokemons(await getPokemons(0));
    setLoading(false);
  };

  const loadMorePokemons = async (offset: number) => {
    setLoading(true);
    setPokemons(pokemons?.concat(await getPokemons(offset) ?? []));
    setLoading(false);
  };

  useEffect(() => {
    setOffset(0);
    loadPokemons();
  }, [filter, searchText])

  return {
    loadMorePokemons,
    toggleDarkMode,
    pokemons,
    darkMode,
    loading,
    setSearchText,
    setFilter,
    setOffset,
    offset
  };
};

export default AppLogic;