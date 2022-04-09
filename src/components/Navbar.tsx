type NavbarProps = {
  setSearchText: (value: React.SetStateAction<string>) => void;
  setFilter: (value: React.SetStateAction<string>) => void;
};

const Navbar: React.FC<NavbarProps> = ({ setSearchText, setFilter }) => {
  return (
    <div className="dark:text-white bg-white dark:bg-gray-800 shadow-md rounded-lg p-2 mb-4 dark:border-gray-700 border flex flex-col md:flex-row justify-between">
      <div className="flex flex-col mb-5 md:mb-0">
        <label htmlFor="search" className="text-gray-500 dark:text-gray-400 text-sm mb-1">Search by name</label>
        <input
          id="search"
          type="text"
          className="font-medium text-gray-500 dark:text-gray-400 rounded-xl dark:border-gray-700 border dark:bg-gray-600 px-3 py-1 w-64 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800"
          placeholder="Search..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="filterType" className="text-gray-500 dark:text-gray-400 text-sm mb-1">Filter by type</label>
        <select
          id="filterType"
          className="font-medium text-gray-500 dark:text-gray-400 rounded-xl dark:border-gray-700 border dark:bg-gray-600 px-3 py-1 w-36 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value)}
        >
          <option value="" defaultChecked>all</option>
          <option value="normal">normal</option>
          <option value="fire">fire</option>
          <option value="water">water</option>
          <option value="grass">grass</option>
          <option value="flying">flying</option>
          <option value="fighting">fighting</option>
          <option value="poison">poison</option>
          <option value="electric">electric</option>
          <option value="ground">ground</option>
          <option value="rock">rock</option>
          <option value="psychic">psychic</option>
          <option value="ice">ice</option>
          <option value="bug">bug</option>
          <option value="ghost">ghost</option>
          <option value="steel">steel</option>
          <option value="dragon">dragon</option>
          <option value="dark">dark</option>
          <option value="fairy">fairy</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;