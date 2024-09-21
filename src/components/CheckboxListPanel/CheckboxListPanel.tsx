import { useEffect, useState } from "react";
import Checkbox, { CheckboxProps } from "../Checkbox/Checkbox";
import styles from "./CheckboxListPanel.module.scss";
import SearchInput from "../SearchInput";
import Button from "../Button";

interface Props {
  options: CheckboxProps[];
  onSubmit: string;
}

function CheckboxListPanel({ options, onSubmit }: Props) {
  const [checkboxes, setCheckboxes] = useState(options);
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);

  useEffect(() => {
    setDefaultSelected();
  }, [options]);

  function setDefaultSelected() {
    const selectedOptions = options
      .filter((option) => option.checked)
      .map((option) => option.value);

    setSelectedOptions(selectedOptions);
  }

  function updateSelectedOptions(value: string) {
    let newList;
    if (selectedOptions.includes(value)) {
      newList = selectedOptions.filter((option) => option !== value);
    } else {
      newList = [...selectedOptions, value];
    }

    return setSelectedOptions(newList);
  }

  function resetList() {
    setDefaultSelected();
  }

  function handleSubmit() {
    onSubmit === "logToConsole" ? console.log(selectedOptions) : undefined;
  }

  function handleSearch(value: string) {
    let newList;

    newList = options.filter((checkbox) =>
      checkbox.title.toLowerCase().includes(value.toLowerCase())
    );

    setCheckboxes(newList);
  }

  return (
    <div className={styles.panel}>
      <SearchInput onChange={handleSearch} />
      <div className={styles.panel__list}>
        {checkboxes.map((checkbox) => (
          <Checkbox
            key={checkbox.value}
            {...checkbox}
            checked={selectedOptions.includes(checkbox.value)}
            onChange={updateSelectedOptions}
          />
        ))}
      </div>
      <div className={styles.panel__controls}>
        <Button secondary value="Reset" onClick={resetList} />
        <Button value="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default CheckboxListPanel;
