import styles from "./SearchBox.module.css";

const SearchBox = ({ newValue, onChange }) => {
  return (
    <label className={styles.searchBox}>
      Find contacts by name
      <input
        type="text"
        value={newValue}
        onChange={onChange}
        className={styles.inputSearchBox}
      />
    </label>
  );
};

export default SearchBox;
