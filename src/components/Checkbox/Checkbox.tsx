import styles from "./Checkbox.module.scss";

export interface CheckboxProps {
  value: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
}

function Checkbox({
  value,
  title,
  subtitle,
  imageUrl,
  checked,
  disabled,
  onChange,
}: CheckboxProps) {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={value}
        name={title}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(value)}
        className={styles.checkbox__box}
      />
      <label
        htmlFor={value}
        className={`${styles.checkbox__label} ${
          disabled ? styles["checkbox__label--disabled"] : ""
        }`}
      >
        <div className={styles.checkbox__label__text}>
          <p className={styles.checkbox__label__text__title}>{title}</p>
          {!!subtitle && (
            <p className={styles.checkbox__label__text__subtitle}>{subtitle}</p>
          )}
        </div>
        {!!imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className={styles.checkbox__label__image}
          />
        )}
      </label>
    </div>
  );
}

export default Checkbox;
