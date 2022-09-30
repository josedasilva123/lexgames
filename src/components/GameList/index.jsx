import React from "react";
import { StyledTitle } from "../../styles/typography";
import GameCard from "./GameCard";
import GameFilters from "./GameFilters";
import { StyledGameList, StyledGrid } from "./style";

const GameList = ({ gameList, removeGame, categories, filter, setFilter }) => {
  return (
    <StyledGrid>
      <GameFilters
        categories={categories}
        filter={filter}
        setFilter={setFilter}
      />
      {gameList.length ? (
        <StyledGameList>
          {gameList.map((game, index) => (
            <GameCard key={index} game={game} removeGame={removeGame} />
          ))}
        </StyledGameList>
      ) : (
        <StyledTitle tag="h1" fontSize="one">
          Não foi encontrado nenhum jogo.
        </StyledTitle>
      )}
    </StyledGrid>
  );
};

export default GameList;
