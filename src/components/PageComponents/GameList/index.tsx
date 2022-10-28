import React, { useContext } from "react";
import { CatalogContext } from "../../../contexts/CatalogContext/CatalogContext";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import GameCard from "./GameCard";
import { StyledGameList } from "./style";

const GameList = () => {
  const { gameList } = useContext(CatalogContext);
  const intersectionElement = useIntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      console.log("Elemento está visível");
    }
  });

  return (
    <>
      <StyledGameList>
        {gameList.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </StyledGameList>
      <div ref={intersectionElement}></div>
    </>
  );
};

export default GameList;
