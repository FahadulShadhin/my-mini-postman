type ButtonProps = {
  text: string;
  handleClick: () => void;
};

const Button = ({ text, handleClick }: ButtonProps) => {
  return (
    <button
      className="text-white text-[18px] bg-blue-500 hover:bg-blue-700 px-8 ml-4 font-bold rounded"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
