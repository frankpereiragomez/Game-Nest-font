import { ButtonStructure } from "../../types";

interface ButtonProps {
  button: ButtonStructure;
}

const Button = ({ button }: ButtonProps): React.ReactElement => {
  return (
    <>
      <button
        className={button.className}
        onClick={button.actionOnClick}
        type={button.type}
        disabled={button.isDisabled}
        aria-label={button.ariaLabel}
      >
        {button.text || (
          <img
            src={button.icon}
            alt={button.alt}
            width={button.width}
            height={button.height}
          />
        )}
      </button>
    </>
  );
};

export default Button;
