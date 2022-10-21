import React from "react";
import { iGame } from "../../contexts/types/types";
import { StyledTitle } from "../../styles/typography";
import FavoriteCard from "./FavoriteCard";
import GameFilters from "./GameFilters";
import { StyledFavoriteList, StyledGrid } from "./style";

interface iFavoriteListProps{
  gameList: iGame[];
  categories: string[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FavoriteList = ({ gameList, categories, filter, setFilter }: iFavoriteListProps) => {
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
