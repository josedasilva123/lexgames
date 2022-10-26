import React, { useContext } from "react";
import { CatalogContext } from "../../../contexts/CatalogContext/CatalogContext";
import { GamesContext } from "../../../contexts/GamesContext/GamesContext";
import { StyledButton } from "../../../styles/button";
import { StyledGameFilters } from "./style";

const GameFilters = () => {
  const { filter, setFilter } = useContext(GamesContext);
  const { newCategories } = useContext(CatalogContext);

  return (
    <StyledGameFilters>
      <StyledButton buttonStyle={(filter === "" ? "solid1" : "outline")} onClick={() => setFilter("")}>Todos</StyledButton>
     
      {newCategories?.map((category) => (
        <StyledButton key={category} buttonStyle={(filter === category ? "solid1" : "outline")} onClick={() => setFilter(category)}>
          {category}
        </StyledButton>
      ))}
    </StyledGameFilters>
  );
};

export default GameFilters;
