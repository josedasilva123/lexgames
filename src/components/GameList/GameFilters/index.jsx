import React from "react";
import styles from "./style.module.css";

const GameFilters = ({ categories, filter, setFilter }) => {
  return (
    <div className={styles.categoryList}>
      <button className={`btn ${filter === "" ? "solid1" : "outline"} default`} onClick={() => setFilter("")}>Todos</button>
      {categories.map((category) => (
        <button className={`btn ${filter === category ? "solid1" : "outline"} default`} key={category} onClick={() => setFilter(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default GameFilters;
