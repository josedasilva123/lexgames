import React, { useContext } from "react";
import { CatalogContext } from "../../../contexts/CatalogContext/CatalogContext";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import GameCard from "./GameCard";
import { StyledGameList } from "./style";

const GameList = () => {
  const { gameList, renderGameList, renderCount, setRenderCount } = useContext(CatalogContext);
  const observer = useIntersectionObserver<HTMLDivElement>((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      const newRenderCount = renderCount + 24;

      if(newRenderCount < gameList.length){
        setRenderCount(newRenderCount);
      }
    }
  });

  return (
    <>
      <StyledGameList>
        {renderGameList.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </StyledGameList>
      <div ref={observer}></div>
    </>
  );
};

export default GameList;
