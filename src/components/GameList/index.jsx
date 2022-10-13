import React from "react";
import { StyledButton } from "../../styles/button";
import GameCard from "./GameCard";
import { StyledGameList } from "./style";

const GameList = ({ gameList }) => {
  return (
    <StyledGameList>
      {gameList.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </StyledGameList>
  );
};

export default GameList;
