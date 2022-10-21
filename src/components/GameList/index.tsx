import React from "react";
import { iGame } from "../../contexts/types/types";
import GameCard from "./GameCard";
import { StyledGameList } from "./style";

interface iGameListProps{
  gameList: iGame[];
}

const GameList = ({ gameList }: iGameListProps) => {
  return (
    <StyledGameList>
      {gameList.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </StyledGameList>
  );
};

export default GameList;
