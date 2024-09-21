import styles from "./Button.module.scss";

interface Props {
  value: string;
  secondary?: boolean;
  onClick: () => void;
}

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

function Button({ value, secondary, onClick }: Props) {
  return (
    <button
      className={`${styles.button} ${
        secondary ? styles["button--secondary"] : styles["button--primary"]
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Button;
