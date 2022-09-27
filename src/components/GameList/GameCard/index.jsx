import React from "react";
import { StyledTitle } from "../../../styles/typography";
import { StyledGameCard } from "./style";

const GameCard = ({ game, removeGame }) => {
  return (
    <StyledGameCard>
      <div>
        <span className="paragraph">{game.category}</span>
        <StyledTitle tag="h3" fontSize="two">
          {game.name}
        </StyledTitle>
      </div>
      <button className="btn solid2 default" onClick={() => removeGame(game)}>
        Remover
      </button>
    </StyledGameCard>
  );
};

export default GameCard;
