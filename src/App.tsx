import { PokemonDetails } from "./@types";
import AppLogic from "./AppLogic";
import Button from "./components/Button";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";
import PreviewCard from "./components/PreviewCard";
import ToggleSwitch from "./components/ToggleSwitch";

const App: React.FC = () => {
  const {
    loadMorePokemons,
    toggleDarkMode,
    pokemons,
    darkMode,
    loading,
    setSearchText,
    setFilter,
    setOffset,
    offset
  } = AppLogic();

  return (
    <div className={`App ${darkMode ? 'dark bg-gray-900' : 'bg-blue-50'} min-h-screen`}>
      <div className="container mx-auto px-3">
        <div className="flex justify-between">
          <h1 className="text-3xl py-2 font-bold dark:text-white text-gray-700">Pokédex</h1>
          <ToggleSwitch label="Dark mode?" toggle={toggleDarkMode} />
        </div>
        <Navbar setFilter={setFilter} setSearchText={setSearchText} />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4 flex justify-items-center">
          {pokemons && pokemons.map((p: PokemonDetails) => (
            <PreviewCard
              name={p.name}
              id={p.id}
              pokemon_v2_pokemontypes={p.pokemon_v2_pokemontypes}
              weight={p.weight}
              height={p.height}
              key={p.id}
            />
          ))}
        </div>
        {!loading && !pokemons?.length && <p className="text-gray-500 dark:text-gray-400">
          There are no matching results :((((
        </p>}
        <div className="mx-auto w-48 py-5">
          {pokemons && pokemons.length >= 20 &&
            <div onClick={() => {
              loadMorePokemons(offset + 20);
              setOffset(offset + 20);
            }}>
              <Button text="Load more" />
            </div>}
        </div>
      </div>
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default App;
