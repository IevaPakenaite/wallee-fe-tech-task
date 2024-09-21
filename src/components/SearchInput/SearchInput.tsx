import styles from "./SearchInput.module.scss";

interface Props {
  onChange: (value: string) => void;
}

function SearchInput({ onChange }: Props) {
  return (
    <input
      className={styles["search-input"]}
      type="search"
      placeholder="Search for Payment Method"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchInput;
