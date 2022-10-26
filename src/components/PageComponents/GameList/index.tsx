import React, { useContext } from "react";
import { CatalogContext } from "../../../contexts/CatalogContext/CatalogContext";
import GameCard from "./GameCard";
import { StyledGameList } from "./style";

const GameList = () => {
  const { gameList } = useContext(CatalogContext);

  return (
    <StyledGameList>
      {gameList.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </StyledGameList>
  );
};

export default GameList;
