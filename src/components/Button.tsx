type ButtonProps = {
  text: string;
  handleClick: () => void;
};

const Button = ({ text, handleClick }: ButtonProps) => {
  return (
    <button
      className="transition ease-in-out delay-150 text-white text-[18px] bg-blue-500 hover:bg-blue-700 duration-150 px-8 ml-4 font-bold rounded"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
