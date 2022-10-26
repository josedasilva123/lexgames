import React, { useContext } from "react";
import { GamesContext } from "../../contexts/GamesContext/GamesContext";
import FavoriteCard from "./FavoriteCard";
import GameFilters from "./GameFilters";
import { StyledTitle } from "../../styles/typography";
import { StyledFavoriteList, StyledGrid } from "./style";

const FavoriteList = () => {
  const { newFavoriteList } = useContext(GamesContext);
  
  return (
    <StyledGrid>
      <GameFilters />
      {newFavoriteList.length ? (
        <StyledFavoriteList>
          {newFavoriteList.map((game, index) => (
            <FavoriteCard key={index} game={game} />
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
