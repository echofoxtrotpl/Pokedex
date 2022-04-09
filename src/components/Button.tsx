type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button className="transition-colors py-2 px-3 w-full text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {text}
      </button>
    </div>
  );
};

export default Button;