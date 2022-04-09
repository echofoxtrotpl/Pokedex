type ToggleProps = {
  label: string;
  toggle: () => void;
};

const ToggleSwitch: React.FC<ToggleProps> = ({ label, toggle }) => {
  return (
    <label className="shadow-md dark:bg-gray-800 dark:border-gray-700 border bg-white flex w-48 justify-center items-center group p-1 dark:text-white mb-4 rounded-b-lg">
      {label}
      <input
        onClick={toggle}
        type="checkbox"
        className="left-1/2 -translate-x-1/2 peer appearance-none rounded-md"
      />
      <span
        className="w-10 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-500 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4 group-hover:after:translate-x-1"
      />
    </label>
  );
};

export default ToggleSwitch;