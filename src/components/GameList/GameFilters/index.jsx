import React from "react";
import { StyledButton } from "../../../styles/button";
import { StyledGameFilters } from "./style";

const GameFilters = ({ categories, filter, setFilter }) => {
  return (
    <StyledGameFilters>
      <StyledButton buttonStyle={(filter === "" ? "solid1" : "outline")} onClick={() => setFilter("")}>Todos</StyledButton>
     
      {categories.map((category) => (
        <StyledButton key={category} buttonStyle={(filter === category ? "solid1" : "outline")} onClick={() => setFilter(category)}>
          {category}
        </StyledButton>
      ))}
    </StyledGameFilters>
  );
};

export default GameFilters;
