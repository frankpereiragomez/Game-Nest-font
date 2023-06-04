import { ButtonStructure } from "../../types";

interface ButtonProps {
  button: ButtonStructure;
}

const Button = ({ button }: ButtonProps): React.ReactElement => {
  return (
    <>
      <button className={button.className}>
        {button.text || (
          <img
            src={button.icon}
            alt={button.alt}
            width={button.width}
            height={button.height}
          ></img>
        )}
      </button>
    </>
  );
};

export default Button;
