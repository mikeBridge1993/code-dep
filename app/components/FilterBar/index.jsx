import React from "react"
import styles from "./styles.module.scss"
import { useSearch } from "../../utils/useSearch"

const FilterBar = () => {
  const { saveSearch } = useSearch()

  return (
    <div className={styles["input"]}>
      <input
        name="name"
        type="text"
        required
        autoComplete="off"
        placeholder="Please use the search bar to filter a repository name"
        onChange={e => saveSearch(e.target.value)}
        className={styles["input-field"]}
        data-testid="filter-input"
      ></input>
      <i className="fa fa-search"></i>
    </div>
  )
}

export default FilterBar
