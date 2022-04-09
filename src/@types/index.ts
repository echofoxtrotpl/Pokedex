export type PokemonsData = {
	pokemon_v2_pokemon: PokemonDetails[];
};

export type PokemonDetails = {
	id: number;
	name: string;
	height: number;
	weight: number;
	pokemon_v2_pokemontypes: [
		{
			pokemon_v2_type:
			{
				name: string
			}
		}
	]
};

export type PokemonsVars = {
	offset: number;
	name: string;
	type: string;
};