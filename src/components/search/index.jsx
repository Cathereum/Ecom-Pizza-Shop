import React from "react";
import styles from "./Search.module.scss";
import searchSvg from "./search_icon.svg";
import { searchContext } from "../../App";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(searchContext);

  return (
    <div className={styles.root}>
      <img className={styles.search} src={searchSvg} alt="search pizza" />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
    </div>
  );
};

export default Search;
