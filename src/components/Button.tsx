import styles from "./button.module.scss";

type Props = {
  text: string;
  disabled: boolean;
  onClick?: React.MouseEventHandler;
};

const Button = ({ text, disabled, onClick }: Props) => {
  return (
    <button
      className={`
        ${styles.button} 
        ${disabled ? styles["button--disabled"] : ""} 
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
