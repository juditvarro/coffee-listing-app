interface ButtonProps {
  text: string;
  selected: boolean;
  handleClick: (clicked: boolean) => void;
}

const Button = ({ text, selected, handleClick }: ButtonProps) => {
  return (
    <button
      onClick={() => handleClick(true)}
      className={`text-themeLightestGray font-dm font-light text-[14px] p-2 rounded-md ${selected ? 'bg-themeDarkGray' : 'bg-inherit'}`}
    >
      {text}
    </button>
  );
};

export default Button;
