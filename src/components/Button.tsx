interface ButtonProps {
  text: string;
  handleClick: (clicked: boolean) => void;
}

const Button = ({ text, handleClick }: ButtonProps) => {
  return (
    <button
      onClick={() => handleClick(true)}
      className="text-themeLightestGray font-dm font-light text-[14px] p-2 rounded-md hover:bg-themeDarkGray "
    >
      {text}
    </button>
  );
};

export default Button;
