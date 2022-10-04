import React from "react";
import { StyledTitle } from "../../styles/typography";
import FavoriteCard from "./FavoriteCard";
import GameFilters from "./GameFilters";
import { StyledFavoriteList, StyledGrid } from "./style";

const FavoriteList = ({ gameList, removeGame, ratingGame, categories, filter, setFilter }) => {
  return (
    <StyledGrid>
      <GameFilters
        categories={categories}
        filter={filter}
        setFilter={setFilter}
      />
      {gameList.length ? (
        <StyledFavoriteList>
          {gameList.map((game, index) => (
            <FavoriteCard key={index} game={game} removeGame={removeGame} ratingGame={ratingGame} />
          ))}
        </StyledFavoriteList>
      ) : (
        <StyledTitle tag="h1" fontSize="one">
          Não foi encontrado nenhum jogo.
        </StyledTitle>
      )}
    </StyledGrid>
  );
};

export default FavoriteList;
