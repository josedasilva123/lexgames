import React from "react";
import { StyledButton } from "../../styles/button";
import GameCard from "./GameCard";
import { StyledGameList } from "./style";

const GameList = ({ gameList, addGame }) => {
  return (
    <StyledGameList>
      {gameList.map((game) => (
        <GameCard key={game.id} game={game} addGame={addGame} />
      ))}
    </StyledGameList>
  );
};

export default GameList;
