import { useState } from "react";
import { PokemonDetails } from "../@types";
import Button from "./Button";

const PreviewCard: React.FC<PokemonDetails> = ({ name, id, pokemon_v2_pokemontypes, height, weight }) => {
  const [showingDetails, setShowingDetails] = useState<boolean>(false);

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-all" style={{ height: 'min-content' }}>

      <img className="h-48 p-2 mx-auto"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={`pokemon-${name}-sprite-image`}
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <small className="text-gray-400">Types:</small>
        <div className="flex gap-2 mt-1 mb-3">
          {pokemon_v2_pokemontypes.map((type) => (
            <div className="bg-red-300 dark:bg-red-400 rounded-lg text-sm px-3 py-1 text-white" key={type.pokemon_v2_type.name}>
              {type.pokemon_v2_type.name}
            </div>
          ))}
        </div>

        {showingDetails && <div className="flex gap-2 my-2">
          <small className="text-gray-400">Weight: <span className="font-bold">{weight}</span></small>
          <small className="text-gray-400">Height: <span className="font-bold">{height}</span></small>
        </div>}

        <div
          onClick={() => setShowingDetails(!showingDetails)}
        >
          <Button text={showingDetails ? "Hide details" : "More details"} />
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;