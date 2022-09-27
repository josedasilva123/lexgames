import React from "react";
import { StyledButton } from "../../../styles/button";
import styles from "./style.module.css";

const GameFilters = ({ categories, filter, setFilter }) => {
  return (
    <div className={styles.categoryList}>
      <StyledButton buttonStyle={(filter === "" ? "solid1" : "outline")} onClick={() => setFilter("")}>Todos</StyledButton>
     
      {categories.map((category) => (
        <StyledButton key={category} buttonStyle={(filter === category ? "solid1" : "outline")} onClick={() => setFilter(category)}>
          {category}
        </StyledButton>
      ))}
    </div>
  );
};

export default GameFilters;
